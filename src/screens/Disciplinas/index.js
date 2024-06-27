import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { firebase } from '../../service/firebaseConfig'
import { getDatabase, onValue, query, ref, push, set, remove, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { FlatList } from "react-native-gesture-handler";
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';

import { MaterialCommunityIcons } from '@expo/vector-icons'
const db = getDatabase();
const auth = getAuth();

export default function Disciplinas({ navigation }) {
    const [disciplinas, setDisciplinas] = useState([]);
    const [filtroPeriodo, setFiltroPeriodo] = useState("");
    const [filtroEtapa, setFiltroEtapa] = useState("");
    const [etapas, setEtapas] = useState([]);
    const [periodos, setPeriodos] = useState([]);

    const [isModalVisible, setModalVisible] = useState(false);

    //Recupera as diciplinas com base no filtro
    useEffect(() => {
        const URL = query(ref(db, `disciplinas/${auth.currentUser.uid}/${filtroPeriodo}/${filtroEtapa}`));
        onValue(URL, (snapshot) => {
            const disciplinas = []
            snapshot.forEach((data) => {
                disciplinas.push({ ...data.val(), id: data.key });
            })
            setDisciplinas(disciplinas);
        });
    }, [filtroPeriodo, filtroEtapa])

    useEffect(() => {
        recuperarPeriodos();
        recuperarFiltro();
    }, [])

    //Recupera todos os Períodos do user
    function recuperarPeriodos() {
        const URL = query(ref(db, 'periodos/' + auth.currentUser.uid));
        onValue(URL, (snapshot) => {
            const periodos = []
            snapshot.forEach((data) => {
                periodos.push({ ...data.val(), id: data.key });
            })
            setPeriodos(periodos);
        });
    }

    //Recupera as Etapas do Período selecionado
    useEffect(() => {
        const URL = query(ref(db, `periodos/${auth.currentUser.uid}/${filtroPeriodo}`));
        onValue(URL, (snapshot) => {
            let etapass = []
            snapshot.forEach((data) => {
                etapass.push({ ...data.val(), id: data.key });
            })
            etapass = etapass.slice(0, etapass.length - 1);
            setEtapas(etapass);
        });
    }, [filtroPeriodo])

    //Recupera Filtros já selecionado pelo user
    function recuperarFiltro() {
        const URL = query(ref(db, `filtros/${auth.currentUser.uid}`));
        onValue(URL, (snapshot) => {
            let filtroP = [];
            snapshot.forEach((data) => {
                filtroP.push(data.val());
            })
            setFiltroPeriodo(filtroP[1] || "");
            setFiltroEtapa(filtroP[0] || "");
        });
    }

    function closeModal() {
        setModalVisible(false);
    }

    //Cadastra os filtros selecionado pelo user
    useEffect(() => {
        if (filtroPeriodo !== "" && filtroEtapa !== "") {
            set(ref(db, `filtros/${auth.currentUser.uid}`), {
                ...filtroPeriodo ? { periodo: filtroPeriodo } : {},
                ...filtroEtapa ? { etapa: filtroEtapa } : {},
            });
        }
    }, [filtroPeriodo, filtroEtapa])




    return (
        <View style={styles.container}>
            <Modal
                isVisible={isModalVisible}
                backdropOpacity={0.9}
                onBackdropPress={() => closeModal()}
            >
                <View style={styles.modalContent}>
                    <Text style={styles.txtFiltroP}>Período:</Text>
                    <Picker
                        style={styles.select}
                        selectedValue={filtroPeriodo}
                        onValueChange={(itemValue, itemIndex) => setFiltroPeriodo(itemValue)}>
                        <Picker.Item label="" value="" />
                        {periodos.map((item) => (
                            <Picker.Item key={item.id} label={`${item.periodo}º Período`} value={item.id} />
                        ))}
                    </Picker>

                    <Text style={styles.txtFiltroP}>Etapa:</Text>
                    <Picker
                        style={styles.select}
                        selectedValue={filtroEtapa}
                        onValueChange={(itemValue, itemIndex) => setFiltroEtapa(itemValue)}>
                        <Picker.Item label="" value="" />
                        {etapas.map((item) => (
                            <Picker.Item key={item.id} label={`${item.etapas}ª Etapa`} value={item.id} />
                        ))}
                    </Picker>
                </View>
            </Modal>

            <TouchableOpacity
                style={styles.filtro}
                onPress={() => setModalVisible(true)}
            >
                <MaterialCommunityIcons name={'filter'} color='#fff' size={28} />
            </TouchableOpacity>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={disciplinas}
                numColumns={2}
                //keyExtractor={(item) => item.id}

                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.disciplina} onPress={()=>navigation.navigate('Tabs', { screen: 'InfoDisciplina', params: { id: item.id, periodo: filtroPeriodo, etapa: filtroEtapa } })}>
                        <View style={styles.areaImagem}>
                            {item.image ? <Image source={{ uri: item.image }} style={styles.imagem} /> : null}
                        </View>
                        <Text style={styles.txtDisciplina}>{item.disciplina}</Text>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('CadastrarDis')}><MaterialCommunityIcons name={'plus'} color='#000' size={40} /></TouchableOpacity>
        </View>
    )
}