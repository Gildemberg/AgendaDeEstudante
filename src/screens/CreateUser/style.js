import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#09184D",
        padding: 30,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alert:{
        color: "#fff"
    },
    areaImg:{
        backgroundColor: '#EDF2FA',
        width: 205,
        height: 205,
        borderRadius: 205,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        borderRadius: 200
    },
    input: {
        width: '100%',
        padding:10,
        backgroundColor: "#EDF2FA",
        borderRadius: 10,
        fontSize: 20,
        marginBottom: 40,
        color: '#09184D'
    },
    botao: {
        width: '100%',
        padding: 10,
        backgroundColor: "#4169E1",
        borderRadius: 10
    },
    textoBotao: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
});
export default styles;