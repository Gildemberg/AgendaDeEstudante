import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
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

            onValue(ref(db, `atividades/${auth.currentUser.uid}/${route.params.id}/${route.params.idAtividade}`), (snapshot) => {
                let infor = [];
                snapshot.forEach((data) => {
                    infor.push(data.val());
                })
                const data = moment(infor[4] || "");
                const dataFormatada = data.format('DD/MM/YYYY');

                setAssunto(infor[0] || "");
                setNota(infor[1] || "");
                setObservacoes(infor[2] || "");
                setPeso(infor[3] || "");
                setPrazo(dataFormatada);
                setStatus(infor[5] || "");
                setTitulo(infor[6] || "");
                setValor(infor[7] || "");
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

        set(ref(db, `atividades/${auth.currentUser.uid}/${idDisciplina}`), {
            titulo: titulo,
            assunto: assunto,
            nota: nota,
            valor: valor,
            peso: peso,
            prazo: milisegundos,
            observacoes: observacoes,
            status: status
        });
        navigation.navigate('Atividades', { id: idDisciplina, periodo: periodo, etapa: etapa });
    }


    return (
        <View style={styles.container}>
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