import React, { useState } from "react";
import { View, Text, TextInput, Touchableopacity } from "react-native";
import styles from './style';

import { firebase } from '../../service/firebaseConfig';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, onValue, query, ref, set } from "firebase/database";

const db = getDatabase();
const auth = getAuth();

export default function CadastrarAula({ navigation, route }){

    return(
        <View style={styles.container}>
            
        </View>
    )
}