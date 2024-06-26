import React, {useState, useEffect} from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./style";

import firebase from "../../service/firebaseConfig";
import { getDatabase, onValue, query, ref, push, set, remove, get } from "firebase/database";
import { getAuth } from "firebase/auth";

const db = getDatabase();
const auth = getAuth();

export default function InfoDisciplina({navigation, route}){

    return(
        <View style={styles.container}>
        </View>
    )
}