import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#000",
        padding: 50
    },
    titulo: {
        color: '#fff',
        fontSize: 40,
        marginBottom: 40,
        textAlign: 'center'
    },
    alert:{
        color: "#fff"
    },
    tituloInput:{
        color: '#fff',
        fontSize: 40,
    },
    input: {
        width: '100%',
        padding: 20,
        backgroundColor: "#4F4F4F",
        borderRadius: 10,
        fontSize: 20,
        marginBottom: 40,
        color: "#fff",
        fontSize: 30
    },
    areaImg:{
        backgroundColor: '#4F4F4F',
        width: "100%",
        height: 205,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        borderRadius: 200
    },
    btnSelecionarImg: {
        width: '100%',
        padding: 10,
        backgroundColor: "#363636",
        borderRadius: 10,
        marginBottom: 50,
        marginTop: 20,
    },
    btnCadastrar: {
        width: '100%',
        padding: 10,
        backgroundColor: "#006400",
        borderRadius: 10,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 70,
    },
    txtBtn: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30
    }
});

export default styles;