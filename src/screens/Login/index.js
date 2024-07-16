import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, SafeAreaView } from "react-native";
import styles from "./style";
import { firebase } from '../../service/firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(null);

    function validar() {
        if (email == "") {
            setErrorLogin("Insira o e-mail.");
        } else if (password == "") {
            setErrorLogin("Insira a senha.");
        } else {
            setErrorLogin(null);
            login();
        }
    }

    function login() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setEmail("")
                setPassword("")
                setErrorLogin(null)
                navigation.navigate('Drawers');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorLogin(errorMessage);
            });
    }
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image style={styles.logo} source={require('../../../assets/logo.png')} />

            {errorLogin != null && (
                <Text style={styles.alert}>{errorLogin}</Text>
            )}
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.botao}
                onPress={validar}
            >
                <Text style={styles.txtBotao}>Entrar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.btnCriarConta}
                onPress={()=> navigation.navigate('CreateUser')}
            >
                <Text style={styles.txtBotaoCadastrar}>Criar Usuário</Text>                
            </TouchableOpacity>
            <Text style={styles.by}>By Gildemberg</Text>
        </View>
    )
};