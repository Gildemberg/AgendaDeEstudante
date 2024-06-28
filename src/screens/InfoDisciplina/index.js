import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styles from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import firebase from "../../service/firebaseConfig";
import { getDatabase, onValue, query, ref, push, set, remove, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getDatabase();
const auth = getAuth();

export default function InfoDisciplina({ navigation, route }) {
    const [idDisciplina, setIdDisciplina] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [etapa, setEtapa] = useState("");
    const [nomeDisciplina, setNomeDisciplina] = useState("");
    const [image, setImage] = useState("");
    const [media, setMedia] = useState("");

    useEffect(() => {
        if (route.params && route.params.id) {
            setIdDisciplina(route.params.id);
            setPeriodo(route.params.periodo);
            setEtapa(route.params.etapa);
        }

        const url = query(ref(db, `disciplinas/${auth.currentUser.uid}/${route.params.periodo}/${route.params.etapa}/${route.params.id}`));
        onValue(url, (snapshot) => {
            let infor = [];
            snapshot.forEach((data) => {
                infor.push(data.val());
            })
            setNomeDisciplina(infor[0] || "");
            setImage(infor[1] || "");
            setMedia(infor[2] || "");
        });
    }, [route.params])

    return (
        <View style={styles.container}>
                <View style={styles.areaImagem}>
                    {image ? <Image source={{ uri: image }} style={styles.imagem} /> : null}
                </View>
            <View style={styles.disciplina}>
                <Text style={styles.txtDisciplina}>{nomeDisciplina}</Text> 
                <Text style={styles.txtMedia}>Média Final: {media},0</Text> 
            </View>
            
            <View style={styles.bottomTabs}>
                <TouchableOpacity style={styles.btnInfo}>
                    <MaterialCommunityIcons name="inbox-full" color="#fff" size={32} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAula} onPress={()=>navigation.navigate('Aulas', { id: idDisciplina, periodo: periodo, etapa: etapa } )}>
                    <MaterialCommunityIcons name="google-classroom" color="#fff" size={32} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAtividade} onPress={()=>navigation.navigate('Atividades', { id: idDisciplina, periodo: periodo, etapa: etapa } )}>
                    <MaterialCommunityIcons name="format-list-numbered" color="#fff" size={32} />
                </TouchableOpacity>
            </View>
        </View>
    )
}