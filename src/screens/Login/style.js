import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EDF2FA",
        padding: 30,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo :{
        width: '100%',
        height: 210,
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
        marginBottom: 40,
        color: '#09184D'
    },
    botao: {
        width: '100%',
        padding: 10,
        backgroundColor: "#09184D",
        borderRadius: 10,
        marginBottom: 10
    },
    txtBotao: {
        color: '#EDF2FA',
        textAlign: 'center',
        fontSize: 20
    },
    btnCriarConta: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#09184D",
    },
    txtBotaoCadastrar: {
        color: '#09184D',
        textAlign: 'center',
        fontSize: 20
    },
    by:{
        position: 'absolute',
        bottom: 10
    }
});
export default styles;