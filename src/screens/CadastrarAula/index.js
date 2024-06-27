import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from './style';

import { firebase } from '../../service/firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, query, ref, set } from "firebase/database";

const db = getDatabase();
const auth = getAuth();

export default function CadastrarAula({ navigation, route }){
    const [titulo, setTitulo] = useState("");
    const [assunto, setAssunto] = useState("");
    const [data, setData] = useState("");
    const [observacoes, setObservacoes] = useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>CADASTRO DE AULA</Text>

            <Text style={styles.tituloInput}>Título:</Text>
            <TextInput style={styles.input} value={titulo} onChangeText={setTitulo}></TextInput>
            
            <Text style={styles.tituloInput}>Assunto:</Text>
            <TextInput style={styles.input} value={assunto} onChangeText={setAssunto}></TextInput>

            <Text style={styles.tituloInput}>Data:</Text>
            <TextInput style={styles.input} value={data} onChangeText={setData}></TextInput>

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
                <TouchableOpacity style={styles.btnCadastrar} >
                    <Text style={styles.txtBtn}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}