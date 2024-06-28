import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './style';

import { FlatList } from "react-native-gesture-handler";

import { firebase } from '../../service/firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, query, ref, set } from "firebase/database";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const db = getDatabase();
const auth = getAuth();

export default function Aulas({ navigation, route }) {
    const [idDisciplina, setIdDisciplina] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [etapa, setEtapa] = useState("");
    const [nomeDisciplina, setNomeDisciplina] = useState("");
    const [aulas, setAulas] = useState([]);

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

        //Recupera as aulas
        const URL = query(ref(db, `aulas/${auth.currentUser.uid}/${route.params.id}`));
        onValue(URL, (snapshot) => {
            const aulas = []
            snapshot.forEach((data) => {
                aulas.push({ ...data.val(), id: data.key });
            })
            setAulas(aulas);
        });
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{nomeDisciplina}</Text>
            <Text style={styles.titulo2}>Aulas</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={aulas}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cardAula}>
                        <Text style={styles.tituloAula}>{item.titulo} - {item.assunto}</Text>
                        <Text style={styles.dataAula}>{item.data}</Text>
                    </TouchableOpacity>
                )}
            />

            <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('CadastrarAula', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                <MaterialCommunityIcons name={'plus'} color="#fff" size={32} />
            </TouchableOpacity>

            
            <View style={styles.bottomTabs}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => navigation.navigate('InfoDisciplina', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                    <MaterialCommunityIcons name="inbox-full" color="#fff" size={32} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAula} >
                    <MaterialCommunityIcons name="google-classroom" color="#fff" size={32} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAtividade} onPress={()=>navigation.navigate('Atividades', { id: idDisciplina, periodo: periodo, etapa: etapa } )}>
                    <MaterialCommunityIcons name="format-list-numbered" color="#fff" size={32} />
                </TouchableOpacity>
            </View>
        </View>
    )
}