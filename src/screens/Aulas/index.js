import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
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

    const [idAula, setIdAula] = useState("");
    const [titulo, setTitulo] = useState("");
    const [assunto, setAssunto] = useState("");
    const [data, setData] = useState("");
    const [observacoes, setObservacoes] = useState("");

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

    const setInfor = (id, titulo, assunto, data, observacoes) => {
        setIdAula(id);
        setTitulo(titulo);
        setAssunto(assunto);
        setData(data);
        setObservacoes(observacoes);
    }

    const removerAula = () => {
        setModalVisivel(false);
        const url = ref(db, `aula/${auth.currentUser.uid}/${idDisciplina}/${idAula}`);
        remove(url);
    }

    const cardAula = (id, titulo, assunto, data, observacoes) => {
        if (id === idAula) { //Card Aberto
            return <View style={styles.container}>

                <TouchableOpacity style={styles.cardAulaAberto} onPress={() => setIdAula("")}>
                    <Text style={styles.tituloAulaa}>{titulo}</Text>
                    <Text style={styles.tituloAssunto}>{assunto}</Text>
                    <Text style={styles.observacoes}>{observacoes}</Text>
                    <Text style={styles.dataAulaAberto}>{data}</Text>
                </TouchableOpacity>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.btnAE} onPress={() => navigation.navigate('EditarAula', { id: idDisciplina, periodo: periodo, etapa: etapa, idAula: idAula })}>
                        <MaterialCommunityIcons name={'pencil-outline'} color="#FFF" size={32} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnAE} onPress={() => removerAula()}>
                        <MaterialCommunityIcons name={'delete-outline'} color="#FFF" size={32} />
                    </TouchableOpacity>

                </View>
            </View>
        } else { // Card Fechado
            return <TouchableOpacity style={styles.cardAula} onPress={() => setInfor(id, titulo, assunto, data, observacoes)}>
                <Text style={styles.tituloAula}>{titulo} - {assunto}</Text>
                <Text style={styles.dataAula}>{data}</Text>
            </TouchableOpacity>
        }
    }

    const verificarExistenciaAula = () => {
        if (aulas.length !== 0) {
            return <FlatList
                showsHorizontalScrollIndicator={false}
                data={aulas}
                renderItem={({ item }) => (
                    cardAula(item.id, item.titulo, item.assunto, item.data, item.observacoes)
                )}
            />
        } else {
            return <View style={styles.containerAviso}>
                <View style={styles.aviso}>
                    <Text style={styles.txtAviso}>NENHUMA AULA CADASTRADA!</Text>
                </View>
            </View>
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Text style={styles.titulo}>{nomeDisciplina}</Text>
            <Text style={styles.titulo2}>Aulas</Text>

            {verificarExistenciaAula()}

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
                <TouchableOpacity style={styles.btnAtividade} onPress={() => navigation.navigate('Atividades', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                    <MaterialCommunityIcons name="format-list-numbered" color="#fff" size={32} />
                </TouchableOpacity>
            </View>
        </View>
    )
}