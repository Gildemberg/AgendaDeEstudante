import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from './style';

import { firebase } from '../../service/firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, query, ref, set, push } from "firebase/database";

const db = getDatabase();
const auth = getAuth();

export default function CadastrarAtividade({ navigation, route }) {
    const [idDisciplina, setIdDisciplina] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [etapa, setEtapa] = useState("");

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
            setPeriodo(route.params.periodo);
            setEtapa(route.params.etapa);
        }
    }, [])

    const validar = () => {
        if (titulo == "" || assunto == "" || valor=="" || peso=="" || prazo == "" || observacoes == "") {
            setErro("Preencha todos os campos !");
        } else {
            setErro(null);
            cadastrarAtividade();
        }
    }

    const cadastrarAtividade = () => {
        const [day, month, year] = prazo.split('/').map(Number);
        const data = new Date(year, month - 1, day);
        const milisegundos = data.getTime();

        set(push(ref(db, `atividades/${auth.currentUser.uid}/${idDisciplina}`)), {
            titulo: titulo,
            assunto: assunto,
            nota: "-",
            valor: valor,
            peso: peso,
            prazo: milisegundos,
            observacoes: observacoes,
            status: ""
        });
        navigation.navigate('Atividades', { id: idDisciplina, periodo: periodo, etapa: etapa });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>CADASTRO DE ATIVIDADE</Text>
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
                        <Text style={styles.txtBtn}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}