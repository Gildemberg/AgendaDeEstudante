import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#09184D",
        padding: 50
    },
    titulo: {
        color: '#fff',
        fontSize: 27,
        marginBottom: 40,
        textAlign: 'center'
    },
    alert:{
        color: "#fff"
    },
    tituloInput:{
        color: '#EDF2FA',
        fontSize: 25,
    },
    input: {
        width: '100%',
        padding: 20,
        backgroundColor: "#EDF2FA",
        borderRadius: 10,
        fontSize: 20,
        marginBottom: 40,
        color: "#09184D",
        fontSize: 20
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