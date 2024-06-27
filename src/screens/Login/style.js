import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        padding: 30,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo :{
        width: 360,
        height: 150,
        marginBottom: 20
    },
    alert:{
        color: "#fff"
    },
    input: {
        width: '100%',
        padding:10,
        backgroundColor: "#fff",
        borderRadius: 10,
        fontSize: 20,
        marginBottom: 40
    },
    botao: {
        width: '100%',
        padding: 10,
        backgroundColor: "#4169E1",
        borderRadius: 10,
        marginBottom: 10
    },
    txtBotao: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    btnCriarConta: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#4169E1",
    },
});
export default styles;