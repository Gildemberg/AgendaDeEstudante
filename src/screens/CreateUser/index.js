import React, {useState} from "react"
import styles from "./style"
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import { firebase } from '../../service/firebaseConfig'
import { getDatabase, ref, set } from 'firebase/database'
import { getStorage, ref as refS, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import * as ImagePicker from 'expo-image-picker';

export default function CreateUser({navigation}){
    const [nome, setNome] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [erro, setErro] = useState(null);
    const [image, setImage] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const db = getDatabase();

    const validar = () => {
        if (nome=="" || dataNasc=="" || email=="" || password==""){
            setErro("Preencha todos os campos!");
        } else {
            setErro(null);
            cadastrarUser();
        }
    }

    const cadastrarUser = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                set(ref(db, 'users/' + user.uid), {
                    nome: nome,
                    email: email,
                    dataNasc: dataNasc,
                    password: password,
                    image: urlImage
                  });
                navigation.navigate('Login');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErro(errorMessage);
            });
    }

    const  selecionarImagem = async () => {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status !== 'granted'){
            alert('Desculpe, precisamos de permissão para acessar a galeria de fotos!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality:1
        });

        if(!result.canceled) {
            setImage(result.assets[0].uri);
            uploadImage(result.assets[0].uri);
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

    return (
        <View style={styles.container}>
            {erro != null && (
                <Text style={styles.alert}>{erro}</Text>
            )}
            <View style={styles.areaImg}>
                <TouchableOpacity style={styles.btnImg} onPress={selecionarImagem}>
                    {!image && <Text style={styles.txtImg}>Selecionar Foto</Text>}
                    {image && <Image source={{uri: image}} style={styles.imagemSelecionada} />}
                </TouchableOpacity>
            </View>
            <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome}></TextInput>
            <TextInput style={styles.input} placeholder="Data de Nascimento"  value={dataNasc} onChangeText={setDataNasc}></TextInput>
            <TextInput style={styles.input} placeholder="E-mail"  value={email} onChangeText={setEmail}></TextInput>
            <TextInput style={styles.input} placeholder="Senha"  value={password} onChangeText={setPassword}></TextInput>
            <TouchableOpacity style={styles.botao} onPress={validar}><Text style={styles.textoBotao}>Cadastrar</Text></TouchableOpacity>
        </View>
    )
}