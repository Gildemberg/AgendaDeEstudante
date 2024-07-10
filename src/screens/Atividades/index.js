import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');
import styles from './style';

import { FlatList } from "react-native-gesture-handler";

import { firebase } from '../../service/firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, query, ref, set } from "firebase/database";

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

    const toggleModal = () => {
        setModalVisivel(!modalVisivel);
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

    const converter = (dataMili) => {
        const data = moment(dataMili);

        const dataFormatada = data.format('DD/MM');
        const diaFormatado = data.format('ddd').replace(/^\w/, (c) => c.toUpperCase());;
        setDataF(dataFormatada);
        setDiaSem(diaFormatado);

        toggleModal();
    }

    return (
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => { toggleModal() }}
            >
                <View style={styles.container}>
                    <Text style={styles.titulo}>{nomeDisciplina}</Text>
                    <Text style={styles.titulo2}>Atividades</Text>

                    <View style={styles.cardAbertoAtividade}>
                        <View style={styles.bodyCard}>
                            <Text style={styles.tituloAtividade}>{titulo}</Text>
                            <Text style={styles.assuntoAtividade}>{assunto}</Text>
                            <Text style={styles.descricao}>{desc}</Text>

                            <View style={styles.valores}>
                                <Text style={styles.footerCard}>Nota: {nota}</Text>
                                <Text style={styles.footerCard}>Valor: {valor}</Text>
                                <Text style={styles.footerCard}>Peso: {peso}</Text>
                            </View>
                        </View>

                        {!status && <View style={[styles.footerCardA, { backgroundColor: getColor(prazo) }]}>
                            <Text style={styles.prazo}>
                                Prazo: {dataF} - {diaSem}
                            </Text>
                        </View>}

                        {status && <View style={styles.footerCardA}>
                            <Text style={styles.prazo}>
                                Prazo: {dataF} - {diaSem}
                            </Text>
                        </View>}
                    </View>

                    <View style={styles.botoes}>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CadastrarAula', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                            <MaterialCommunityIcons name={'check'} color="#fff" size={32} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EditarAtividade', { id: idDisciplina, periodo: periodo, etapa: etapa, idAtividade: idAtividade })}>
                            <MaterialCommunityIcons name={'pencil-outline'} color="#fff" size={32} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CadastrarAula', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                            <MaterialCommunityIcons name={'delete-outline'} color="#fff" size={32} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


            <Text style={styles.titulo}>{nomeDisciplina}</Text>
            <Text style={styles.titulo2}>Atividades</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={atividades}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cardAtividade} onPress={() => setInfo(item.titulo, item.assunto, item.observacoes, item.valor, item.nota, item.peso, item.prazo, item.status, item.id)}>
                        <Text style={styles.tituloAtividade}>{item.titulo}</Text>
                        <Text style={styles.assuntoAtividade}>{item.assunto}</Text>
                        <View style={styles.colunas}>
                            <View style={styles.coluna1}>
                                <Text style={styles.footerCard}>Nota: {item.nota}   Valor: {item.valor}</Text>
                            </View>
                            <View style={styles.coluna2}>
                                {!item.status && <Text style={[styles.statusContagem, { color: getColor(item.prazo) }]}>{comparar(item.prazo)}</Text>}
                                {item.status && <Text style={styles.status}>{item.status}</Text>}
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

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
        </View>
    )
}