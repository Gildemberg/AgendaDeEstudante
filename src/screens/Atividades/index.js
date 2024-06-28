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

export default function Atividades({ navigation, route }) {
    const [idDisciplina, setIdDisciplina] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [etapa, setEtapa] = useState("");
    const [nomeDisciplina, setNomeDisciplina] = useState("");
    const [atividades, setAtividades] = useState([]);

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

        //Recupera as atividades
        const URL = query(ref(db, `atividades/${auth.currentUser.uid}/${route.params.id}`));
        onValue(URL, (snapshot) => {
            const atividades = []
            snapshot.forEach((data) => {
                atividades.push({ ...data.val(), id: data.key });
            })
            setAtividades(atividades);
        });
    }, [])

    const comparar = (prazo) => {
        const milissegundosDia = 24 * 60 * 60 * 1000;
        const hoje = new Date().getTime();
        const diferenca = prazo - hoje;
        const dias = diferenca / milissegundosDia;

        if (prazo < hoje) {
            return 'Não entregue';
        } else if (prazo === hoje) {
            return 'Prazo é Hoje';
        } else {
            return `Faltam: ${Math.ceil(dias)} dias`;
        }

    }
    const getColor = (prazo) => {
        const hoje = new Date().getTime();

        if (prazo < hoje) {
            return '#FF0000';
        } else if (prazo === hoje) {
            return '#FF4500';
        } else {
            return '#FFD700';
        }

    }

    return (
        <View style={styles.container}>



            
            <Text style={styles.titulo}>{nomeDisciplina}</Text>
            <Text style={styles.titulo2}>Atividades</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={atividades}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cardAtividade}>
                        <Text style={styles.tituloAtividade}>{item.titulo}</Text>
                        <Text style={styles.assuntoAtividade}>{item.assunto}</Text>
                        <View style={styles.colunas}>
                            <View style={styles.coluna1}>
                                <Text style={styles.footerCard}>Nota: {item.nota}   Valor: {item.valor}</Text>
                            </View>
                            <View style={styles.coluna2}>
                                {!item.status && <Text style={[styles.statusContagem, { color: getColor(item.prazo) }]}>{comparar(item.prazo)}</Text>}
                                {item.status && <Text style={styles.status}>{item.status}</Text>}
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('CadastrarAtividade', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                <MaterialCommunityIcons name={'plus'} color="#fff" size={32} />
            </TouchableOpacity>


            <View style={styles.bottomTabs}>
                <TouchableOpacity style={styles.btnInfo} onPress={() => navigation.navigate('InfoDisciplina', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                    <MaterialCommunityIcons name="inbox-full" color="#fff" size={32} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAula} onPress={() => navigation.navigate('Aulas', { id: idDisciplina, periodo: periodo, etapa: etapa })}>
                    <MaterialCommunityIcons name="google-classroom" color="#fff" size={32} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnAtividade}>
                    <MaterialCommunityIcons name="format-list-numbered" color="#fff" size={32} />
                </TouchableOpacity>
            </View>
        </View>
    )
}