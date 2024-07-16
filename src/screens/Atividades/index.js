import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, StatusBar } from "react-native";
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');
import styles from './style';

import { FlatList } from "react-native-gesture-handler";

import { firebase } from '../../service/firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, query, ref, set, remove } from "firebase/database";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const db = getDatabase();
const auth = getAuth();

export default function Atividades({ navigation, route }) {
    const [idDisciplina, setIdDisciplina] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [etapa, setEtapa] = useState("");
    const [nomeDisciplina, setNomeDisciplina] = useState("");
    const [atividades, setAtividades] = useState([]);

    const [idAtividade, setIdAtividade] = useState("");
    const [titulo, setTitulo] = useState("");
    const [assunto, setAssunto] = useState("");
    const [desc, setDesc] = useState("");
    const [status, setStatus] = useState("");
    const [valor, setValor] = useState("");
    const [nota, setNota] = useState("");
    const [peso, setPeso] = useState("");
    const [prazo, setPrazo] = useState("");
    const [dataF, setDataF] = useState("");
    const [diaSem, setDiaSem] = useState("");

    const [modalVisivel, setModalVisivel] = useState(false);

    //Recebe: Id Disciplina, Periodo, Etapa
    useEffect(() => {
        if (route.params && route.params.id) {
            setIdDisciplina(route.params.id);
            setPeriodo(route.params.periodo);
            setEtapa(route.params.etapa);
        }

        //Recupera nome da disciplina
        const url = query(ref(db, `disciplinas/${auth.currentUser.uid}/${route.params.periodo}/${route.params.etapa}/${route.params.id}`));
        onValue(url, (snapshot) => {
            let infor = [];
            snapshot.forEach((data) => {
                infor.push(data.val());
            })
            setNomeDisciplina(infor[0] || "");
        });

        //Recupera as atividades
        const URL = query(ref(db, `atividades/${auth.currentUser.uid}/${route.params.id}`));
        onValue(URL, (snapshot) => {
            const atividades = []
            snapshot.forEach((data) => {
                atividades.push({ ...data.val(), id: data.key });
            })
            setAtividades(atividades);
        });
    }, [])

    const comparar = (prazo) => {
        const milissegundosDia = 24 * 60 * 60 * 1000;
        const hoje = new Date().getTime();
        const diferenca = prazo - hoje;
        const dias = diferenca / milissegundosDia;

        if (prazo < hoje) {
            return 'Não entregue';
        } else if (prazo === hoje) {
            return 'Prazo é Hoje';
        } else {
            return `Faltam: ${Math.ceil(dias)} dias`;
        }

    }

    const getColor = (prazo) => {
        const hoje = new Date().getTime();

        if (prazo < hoje) {
            return '#FF0000';
        } else if (prazo === hoje) {
            return '#FF4500';
        } else {
            return '#FFD700';
        }

    }


    const setInfo = (titulo, assunto, desc, valor, nota, peso, prazo, status, id) => {
        setTitulo(titulo);
        setAssunto(assunto);
        setDesc(desc);
        setValor(valor);
        setNota(nota);
        setPeso(peso);
        setPrazo(prazo);
        setStatus(status);
        setIdAtividade(id);

        converter(prazo);
    }

    const converter = (dataMili) => {
        const data = moment(dataMili);

        const dataFormatada = data.format('DD/MM');
        const diaFormatado = data.format('ddd').replace(/^\w/, (c) => c.toUpperCase());;
        setDataF(dataFormatada);
        setDiaSem(diaFormatado);
    }

    const toggleModal = () => {
        setModalVisivel(!modalVisivel);
    }



    const removerAtividade = (id) => {
        setModalVisivel(false);
        const url = ref(db, `atividades/${auth.currentUser.uid}/${idDisciplina}/${idAtividade}`);
        remove(url);
    }



    const btnInserirNota = () => {
        if (nota == "" && status == "") {
            return <TouchableOpacity style={styles.btnInserir} onPress={() => toggleModal()}>
                        <MaterialCommunityIcons name="plus-circle" color="#32CD32" size={25} />
                    </TouchableOpacity>
        }
    }

    const incluirNota = () => {
        const url = ref(db, `atividades/${auth.currentUser.uid}/${idDisciplina}/${idAtividade}`)

        if (comparar(prazo) == "Não entregue" || comparar(prazo) == "Prazo é Hoje") {
            set(url, {
                titulo: titulo,
                assunto: assunto,
                nota: nota,
                valor: valor,
                peso: peso,
                prazo: prazo,
                observacoes: desc,
                status: status
            });
        } else {
            set(url, {
                titulo: titulo,
                assunto: assunto,
                nota: nota,
                valor: valor,
                peso: peso,
                prazo: prazo,
                observacoes: desc,
                status: "Entregue"
            });
        }
        toggleModal();
    }


    const cardAtividade = (id, titulo, assunto, desc, valor, nota, peso, prazo, status) => {
        if (id === idAtividade) { //CARD ABERTO
            return <View style={styles.container}>
                <TouchableOpacity onPress={() => setIdAtividade('')}>

                    <View style={styles.cardAbertoAtividade}>
                        <Text style={styles.tituloAtividade}>{titulo}</Text>
                        <Text style={styles.assuntoAtividade}>{assunto}</Text>
                        <Text style={styles.descricao}>{desc}</Text>

                        <View style={styles.valores}>
                            <Text style={styles.txtFooter}>Nota: {nota}</Text>{btnInserirNota()}
                            <Text style={styles.txtFooter}>Valor: {valor}</Text>
                            <Text style={styles.txtFooter}>Peso: {peso}</Text>
                        </View>
                    </View>

                    <View style={styles.footerCardA}>
                        {!status && <View style={[styles.footer, { backgroundColor: getColor(prazo) }]}>
                            <Text style={styles.prazo}>
                                Prazo: {dataF} - {diaSem}
                            </Text>
                        </View>}

                        {status && <View style={styles.footer}>
                            <Text style={styles.prazo}>
                                Prazo: {dataF} - {diaSem}
                            </Text>
                        </View>}
                    </View>
                </TouchableOpacity>

                <View style={styles.botoes}>
                        <TouchableOpacity style={styles.btnAE} onPress={() => navigation.navigate('EditarAtividade', { id: idDisciplina, periodo: periodo, etapa: etapa, idAtividade: idAtividade })}>
                            <MaterialCommunityIcons name={'pencil-outline'} color="#fff" size={32} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnAE} onPress={() => removerAtividade()}>
                            <MaterialCommunityIcons name={'delete-outline'} color="#fff" size={32} />
                        </TouchableOpacity>
                    
                </View>
            </View>

        } else {
            return <TouchableOpacity style={styles.cardAtividade} onPress={() => setInfo(titulo, assunto, desc, valor, nota, peso, prazo, status, id)}>
                <Text style={styles.tituloAtividade}>{titulo}</Text>
                <Text style={styles.assuntoAtividade}>{assunto}</Text>
                <View style={styles.colunas}>
                    <View>
                        {nota && <Text style={styles.txtFooter}>Nota: {nota}   Valor: {valor}</Text>}
                        {!nota && <Text style={styles.txtFooter}>Nota: -   Valor: {valor}</Text>}
                    </View>
                    <View>
                        {!status && <Text style={[styles.statusContagem, { color: getColor(prazo) }]}>{comparar(prazo)}</Text>}
                        {status && <Text style={styles.status}>{status}</Text>}
                    </View>
                </View>
            </TouchableOpacity>
        }
    }

    const verificarExistenciaAtv = () =>{
        if(atividades.length!==0){
            return <FlatList
            showsHorizontalScrollIndicator={false}
            data={atividades}
            renderItem={({ item }) => (
                cardAtividade(item.id, item.titulo, item.assunto, item.observacoes, item.valor, item.nota, item.peso, item.prazo, item.status)
            )}
            />
        }else{
            return <View style={styles.containerAviso}>
            <View style={styles.aviso}>
                <Text style={styles.txtAviso}>NENHUMA ATIVIDADE CADASTRADA!</Text>
            </View>
            </View>
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Text style={styles.titulo}>{nomeDisciplina}</Text>
            <Text style={styles.titulo2}>Atividades</Text>


            {verificarExistenciaAtv()}

            <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('CadastrarAtividade', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                <MaterialCommunityIcons name={'plus'} color="#fff" size={32} />
            </TouchableOpacity>


            <View style={styles.bottomTabs}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => navigation.navigate('InfoDisciplina', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                    <MaterialCommunityIcons name="inbox-full" color="#fff" size={32} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAula} onPress={() => navigation.navigate('Aulas', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                    <MaterialCommunityIcons name="google-classroom" color="#fff" size={32} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAtividade}>
                    <MaterialCommunityIcons name="format-list-numbered" color="#fff" size={32} />
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={toggleModal}
            >
                <View style={styles.modal}>
                    <View style={styles.cardInserirNota}>
                        <Text style={styles.tituloIncluirNota}>INFORME SUA NOTA:</Text>
                        <TextInput style={styles.input} value={nota} onChangeText={setNota} placeholder="Ex.: 1 ou 1.5"></TextInput>
                        <TouchableOpacity style={styles.incluirNota} onPress={() => incluirNota()}>
                            <Text style={styles.txtIncluirNota}>Confirmar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnClose} onPress={() => toggleModal()}>
                            <MaterialCommunityIcons name="close-circle-outline" color="#4F4F4F" size={35} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}