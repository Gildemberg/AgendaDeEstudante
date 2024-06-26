import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import firebase from '../../service/firebaseConfig'
import { getDatabase, onValue, query, ref, push, set, remove, get } from "firebase/database";
import { getAuth } from "firebase/auth";
const db = getDatabase();
const auth = getAuth();

export default function PaginaInicial({navigation}){

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnAdd}><Text style={styles.txtbtnadd}> + </Text></TouchableOpacity>
        </View>
    )
}