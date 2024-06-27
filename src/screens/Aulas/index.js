import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from './style';

import { firebase } from '../../service/firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, query, ref, set } from "firebase/database";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const db = getDatabase();
const auth = getAuth();

export default function Aulas({ navigation, route }){

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnAdd} onPress={()=>navigation.navigate('CadastrarAula')}>
                <MaterialCommunityIcons name={'plus'} color="#000" size={32}/>
            </TouchableOpacity>
        </View>
    )
}