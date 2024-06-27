import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, TextInput, FlatList, Image } from "react-native";
import styles from "./style";
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { firebase } from "../../service/firebaseConfig";
import { getDatabase, onValue, query, ref, push, set, remove, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref as refS, uploadBytes, getDownloadURL } from 'firebase/storage';


import * as ImagePicker from 'expo-image-picker';

const db = getDatabase();
const auth = getAuth();

export default function CadastrarDisciplina({ navigation }) {
    const [disciplina, setDisciplina] = useState("");
    const [periodos, setPeriodos] = useState([]);
    const [periodo, setPeriodo] = useState("");
    const [etapas, setEtapas] = useState([]);

    const [idUser, setIdUser] = useState("");
    const [erro, setErro] = useState(null);
    const [image, setImage] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const db = getDatabase();

    function recuperarDados() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setIdUser(uid);

                const URL = query(ref(db, 'periodos/' + uid));
                onValue(URL, (snapshot) => {
                    const periodoss = []
                    snapshot.forEach((data) => {
                        periodoss.push({ ...data.val(), id: data.key });
                    })
                    setPeriodos(periodoss);
                });
            } else {
                setIdUser("");
            }
        });
    }

    useEffect(() => {
        recuperarDados();
    }, [])

    const validar = () => {
        if (disciplina == "" || periodo == "") {
            setErro("Preencha todos os campos!");
        } else {
            setErro(null);
            cadastrarDisciplina();
        }
    }

    const cadastrarDisciplina = () => {
        for(let i=0; i<etapas.length; i++){
            set(push(ref(db, 'disciplinas/' + idUser + '/' + periodo + '/' + etapas[i].id)), {
                disciplina: disciplina,
                image: urlImage,
                media: 0
            });
        }
        navigation.navigate('Drawers');
    }

    const selecionarImagem = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Desculpe, precisamos de permissão para acessar a galeria de fotos!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            uploadImage(result.assets[0].uri);
            console.log(result.assets[0].uri);
        }
    }

    const uploadImage = async (uri) => {
        const storage = getStorage();
        const response = await fetch(uri);
        const blob = await response.blob();
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const storageRef = refS(storage, filename);

        try {
            await uploadBytes(storageRef, blob);
            const url = await getDownloadURL(storageRef);
            setUrlImage(url);
        } catch (e) {
            console.error(e);
        }
    };

    
    useEffect(() => {
        onValue(query(ref(db, 'periodos/' + idUser + '/' + periodo)), (snapshot) => {
            let etapass = []
            snapshot.forEach((data) => {
                etapass.push({ id: data.key });
            })
            etapass = etapass.slice(0, etapass.length - 1);
            setEtapas(etapass);
        })
    }, [periodo])

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.titulo}>CADASTRO DE DISCIPLINA</Text>

                {erro != null && (<Text style={styles.alert}>{erro}</Text>)}

                <Text style={styles.tituloInput}>Disciplina:</Text>
                <TextInput style={styles.input} value={disciplina} onChangeText={setDisciplina}></TextInput>

                <Text style={styles.tituloInput}>Período:</Text>

                <Picker
                    style={styles.select}
                    selectedValue={periodo}
                    onValueChange={(itemValue, itemIndex) => setPeriodo(itemValue)}>
                        <Picker.Item label="" value=""/>
                    {periodos.map((item) => (
                        <Picker.Item key={item.id} label={item.periodo} value={item.id} />
                    ))}
                </Picker>

                <View style={styles.areaImg}>
                    {!image && <MaterialCommunityIcons name={'file-image'} color='#fff' size={60} />}
                    {image && <Image source={{ uri: image }} style={styles.imagemSelecionada} />}
                </View>

                <TouchableOpacity style={styles.btnSelecionarImg} onPress={selecionarImagem}>
                    <Text style={styles.txtBtn}>Selecionar Imagem</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.btnCadastrar} onPress={validar}><Text style={styles.txtBtn}>Cadastrar</Text></TouchableOpacity>
            </View>
        </View>
    )
}