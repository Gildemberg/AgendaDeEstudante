import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from './style';

import { firebase } from '../../service/firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, query, ref, set, push } from "firebase/database";

const db = getDatabase();
const auth = getAuth();

export default function CadastrarAula({ navigation, route }){
    const [idDisciplina, setIdDisciplina] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [etapa, setEtapa] = useState("");

    const [titulo, setTitulo] = useState("");
    const [assunto, setAssunto] = useState("");
    const [data, setData] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const [erro, setErro] = useState("");

    //Recupera o ID da Disciplina
    useEffect(()=>{
        if (route.params && route.params.id) {
            setIdDisciplina(route.params.id);
            setPeriodo(route.params.periodo);
            setEtapa(route.params.etapa);
        }
    },[])

    const validar = () => {
        if(titulo=="" || assunto=="" || data=="" || observacoes==""){
            setErro("Preencha todos os campos !");
        }else{
            setErro(null);
            cadastrarAula();
        }
    }
    
    const cadastrarAula = () => {
        set(push(ref(db, `aulas/${auth.currentUser.uid}/${idDisciplina}`)), {
            titulo: titulo,
            assunto: assunto,
            data: data,
            observacoes: observacoes
        });
        navigation.navigate('Aulas', { id: idDisciplina, periodo: periodo, etapa: etapa });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>CADASTRO DE AULA</Text>

            {erro != null && (<Text style={styles.alert}>{erro}</Text>)}

            <Text style={styles.tituloInput}>Título:</Text>
            <TextInput style={styles.input} value={titulo} onChangeText={setTitulo}></TextInput>
            
            <Text style={styles.tituloInput}>Assunto:</Text>
            <TextInput style={styles.input} value={assunto} onChangeText={setAssunto}></TextInput>

            <Text style={styles.tituloInput}>Data:</Text>
            <TextInput style={styles.input} value={data} onChangeText={setData}></TextInput>

            <Text style={styles.tituloInput}>Observações:</Text>
            <TextInput multiline
                numberOfLines={8}
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
    )
}