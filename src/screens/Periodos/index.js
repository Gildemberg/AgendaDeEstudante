import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import styles from "./style";
import { firebase } from '../../service/firebaseConfig'
import { getDatabase, onValue, query, ref, push, set, remove, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { FlatList } from "react-native-gesture-handler";

import { MaterialCommunityIcons } from '@expo/vector-icons'
const db = getDatabase();
const auth = getAuth();

export default function Periodos({ navigation }) {
    const [periodos, setPeriodos] = useState([]);

    useEffect(() => {
        const URL = query(ref(db, 'periodos/' + auth.currentUser.uid));
        onValue(URL, (snapshot) => {
            const periodoss = []
            snapshot.forEach((data) => {
                periodoss.push({ ...data.val(), id: data.key });
            })
            setPeriodos(periodoss);
        });
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={periodos}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.periodo}>
                        <Text style={styles.txtPeriodo}>{item.periodo}º Período</Text>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('CadastrarPeriodo')}><MaterialCommunityIcons name={'plus'} color='#000' size={40} /></TouchableOpacity>
        </View>
    )
}