import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { firebase } from '../../service/firebaseConfig'
import { getDatabase, onValue, query, ref, push, set, remove, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import { FlatList } from "react-native-gesture-handler";

import { MaterialCommunityIcons } from '@expo/vector-icons'
const db = getDatabase();
const auth = getAuth();

export default function Disciplinas({navigation}){
    /*const [disciplinas, setDisciplinas] = useState([]);

    useEffect(()=>{
        const URL = query(ref(db, 'disciplinas/' + auth.currentUser.uid));
        onValue(URL, (snapshot) => {
            const disciplinas = []
            snapshot.forEach((data)=>{
                disciplinas.push({...data.val(), id: data.key});
            })
            setDisciplinas(disciplinas);
        });
    })
    */


    return(
        <View style={styles.container}>
            {/* <FlatList
                showsHorizontalScrollIndicator={false}
                data={disciplinas}
                keyExtractor={(item)=>item.id}

                renderItem={({item})=>
                    <View style={styles.disciplina}>
                        <TouchableOpacity style={styles.btnDisciplina}>

                        </TouchableOpacity>
                    </View>
                }
            />  */}
            <TouchableOpacity style={styles.btnAdd} onPress={()=>navigation.navigate('CadastrarDis')}><MaterialCommunityIcons name={'plus'} color='#000' size={40} /></TouchableOpacity>
        </View>
    )
}