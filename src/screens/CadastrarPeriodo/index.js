import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import styles from "./style";

import { firebase } from "../../service/firebaseConfig";
import { getDatabase, onValue, query, ref, push, set, remove, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getDatabase();
const auth = getAuth();

export default function CadastrarPeriodo({ navigation }) {
    const [periodo, setPeriodo] = useState("");
    const [etapas, setEtapas] = useState("");
    const [erro, setErro] = useState("");
    const [idUser, setIdUser] = useState("");

    const db = getDatabase();

    function recuperarDados() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setIdUser(uid);
            } else {
                setIdUser("");
            }
        });
    }

    useEffect(() => {
        recuperarDados();
    })

    const validar = () => {
        if (etapas == "" || periodo == "") {
            setErro("Preencha todos os campos!");
        } else {
            setErro(null);
            cadastrarDisciplina();
        }
    }

    const cadastrarDisciplina = () => {
        set(push(ref(db, 'periodos/' + idUser)), {
            periodo: periodo,
            etapas: etapas
        });
        navigation.navigate('Drawers');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>CADASTRO DE DISCIPLINA</Text>

            {erro != null && (<Text style={styles.alert}>{erro}</Text>)}

            <Text style={styles.tituloInput}>Período:</Text>
            <TextInput style={styles.input} placeholder="ex: 1, 2, 3..." value={periodo} onChangeText={setPeriodo}></TextInput>
            
            <Text style={styles.tituloInput}>Quantidade de Etapas:</Text>
            <TextInput style={styles.input} placeholder="ex: 1, 2, 3..." value={etapas} onChangeText={setEtapas}></TextInput>

            <TouchableOpacity style={styles.btnCadastrar} onPress={validar}><Text style={styles.txtBtn}>Cadastrar</Text></TouchableOpacity>
        </View>
    )
}