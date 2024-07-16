import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import styles from './style';

import moment from 'moment';

import { firebase } from '../../service/firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, query, ref, set, push } from "firebase/database";

const db = getDatabase();
const auth = getAuth();

export default function EditarAtividade({ navigation, route }) {
    const [idDisciplina, setIdDisciplina] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [etapa, setEtapa] = useState("");

    const [idAtividade, setIdAtividade] = useState("");
    const [titulo, setTitulo] = useState("");
    const [assunto, setAssunto] = useState("");
    const [status, setStatus] = useState("");
    const [nota, setNota] = useState("");
    const [valor, setValor] = useState("");
    const [peso, setPeso] = useState("");
    const [prazo, setPrazo] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const [erro, setErro] = useState("");

    //Recupera o ID da Disciplina
    useEffect(() => {
        if (route.params && route.params.id) {
            setIdDisciplina(route.params.id);
            setIdAtividade(route.params.idAtividade);
            setPeriodo(route.params.periodo);
            setEtapa(route.params.etapa);

            const url = ref(db, `atividades/${auth.currentUser.uid}/${route.params.id}/${route.params.idAtividade}`);

            onValue(url, (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const dataFormatada = moment(data.prazo).format('DD/MM/YYYY');

                    setTitulo(data.titulo || "");
                    setAssunto(data.assunto || "");
                    setNota(data.nota || "");
                    setValor(data.valor || "");
                    setPeso(data.peso || "");
                    setPrazo(dataFormatada || "");
                    setObservacoes(data.observacoes || "");
                    setStatus(data.status || "");
                }
            });
        }
    }, [route.params])

    const validar = () => {
        if (titulo == "" || assunto == "" || valor == "" || peso == "" || prazo == "" || observacoes == "") {
            setErro("Preencha todos os campos !");
        } else {
            setErro(null);
            editerAtividade();
        }
    }

    const editerAtividade = () => {
        const [day, month, year] = prazo.split('/').map(Number);
        const data = new Date(year, month - 1, day);
        const milisegundos = data.getTime();
        const hoje = new Date().getTime();

        const url = ref(db, `atividades/${auth.currentUser.uid}/${idDisciplina}/${route.params.idAtividade}`)
        if(nota===''){
            set(url , {
                titulo: titulo,
                assunto: assunto,
                nota: nota,
                valor: valor,
                peso: peso,
                prazo: milisegundos,
                observacoes: observacoes,
                status: ""
            });
        }else if(nota!=="" && milisegundos>hoje){
            set(url , {
                titulo: titulo,
                assunto: assunto,
                nota: nota,
                valor: valor,
                peso: peso,
                prazo: milisegundos,
                observacoes: observacoes,
                status: "Entregue"
            });
        }else{
            set(url , {
                titulo: titulo,
                assunto: assunto,
                nota: nota,
                valor: valor,
                peso: peso,
                prazo: milisegundos,
                observacoes: observacoes,
                status: ""
            });
        }
        navigation.navigate('Atividades', { id: idDisciplina, periodo: periodo, etapa: etapa });
    }


    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Text style={styles.titulo}>EDITAR ATIVIDADE</Text>
            <View style={styles.content}>
                {erro != null && (<Text style={styles.alert}>{erro}</Text>)}

                <Text style={styles.tituloInput}>Título:</Text>
                <TextInput style={styles.input} value={titulo} onChangeText={setTitulo}></TextInput>

                <Text style={styles.tituloInput}>Assunto:</Text>
                <TextInput style={styles.input} value={assunto} onChangeText={setAssunto}></TextInput>

                <View style={styles.columns}>
                    <View style={styles.columnOne}>
                        <Text style={styles.tituloInput}>Valor:</Text>
                        <TextInput style={styles.input} value={valor} onChangeText={setValor}></TextInput>
                    </View>

                    <View style={styles.columnTwo}>
                        <Text style={styles.tituloInput}>Nota:</Text>
                        <TextInput style={styles.input} value={nota} onChangeText={setNota}></TextInput>
                    </View>

                    <View style={styles.columnThree}>
                        <Text style={styles.tituloInput}>Peso:</Text>
                        <TextInput style={styles.input} value={peso} onChangeText={setPeso}></TextInput>
                    </View>
                </View>

                <Text style={styles.tituloInput}>Prazo:</Text>
                <TextInput style={styles.input} value={prazo} onChangeText={setPrazo}></TextInput>

                <Text style={styles.tituloInput}>Observações:</Text>
                <TextInput multiline
                    numberOfLines={5}
                    textAlignVertical="top"
                    autoCorrect={false}
                    style={styles.input}
                    value={observacoes}
                    onChangeText={setObservacoes}
                ></TextInput>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.btnCadastrar} onPress={validar}>
                        <Text style={styles.txtBtn}>Concluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}