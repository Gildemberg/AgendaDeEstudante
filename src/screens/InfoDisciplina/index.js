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
    const [notaS, setNotaS] = useState('');
    const [pesoS, setPesoS] = useState('');

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
        
        recuperaNotas(route.params.id);
        
        
    }, [route.params])
    
    const recuperaNotas = (disciplina) => {
        let notaS=0, pesoS=0, notaa=0, peso=0

        const URL = query(ref(db, `atividades/${auth.currentUser.uid}/${disciplina}`));

        onValue(URL, (snapshot) => {
            snapshot.forEach((data) => {

                const URL2 = query(ref(db, `atividades/${auth.currentUser.uid}/${disciplina}/${data.key}`));
                onValue(URL2, (snapshot2) => {
                        const atividade = snapshot2.val()
                        let nota = atividade.nota
                        if(atividade.nota=="") nota=0
                        
                        notaa = parseFloat(nota) * parseFloat(atividade.peso)
                        peso = parseFloat(atividade.peso)
                        
                    });
                    notaS=notaS+notaa
                    pesoS=pesoS+peso
                })
        });
        setNotaS(notaS)
        setPesoS(pesoS)
        setMedia(notaS/pesoS)
    }


     const verificarMedia = (media) => {
         if(!isNaN(media)){            
            if(media<7){
                return <Text style={{color: 'red'}}>{media}</Text>
            }else{
                return <Text style={{color: 'green'}}>{media}</Text>
            }
        }else{
            return <Text style={{color: '#fff'}}>-</Text>
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.areaImagem}>
                {image ? <Image source={{ uri: image }} style={styles.imagem} /> : null}
            </View>
            <View style={styles.disciplina}>
                <Text style={styles.txtDisciplina}>{nomeDisciplina}</Text>
                <Text style={styles.txtMedia}>Média Final: {verificarMedia(media)}</Text>
            </View>

            <View style={styles.bottomTabs}>
                <TouchableOpacity style={styles.btnInfo}>
                    <MaterialCommunityIcons name="inbox-full" color="#fff" size={32} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAula} onPress={() => navigation.navigate('Aulas', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                    <MaterialCommunityIcons name="google-classroom" color="#fff" size={32} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAtividade} onPress={() => navigation.navigate('Atividades', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                    <MaterialCommunityIcons name="format-list-numbered" color="#fff" size={32} />
                </TouchableOpacity>
            </View>
        </View>
    )
}