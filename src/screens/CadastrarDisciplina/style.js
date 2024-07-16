import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#09184D",
        padding: 30,
        justifyContent: 'space-between'
    },
    content: {
        width: '100%',
    },
    titulo: {
        color: '#EDF2FA',
        fontSize: 30,
        marginBottom: 40,
        marginTop: 40,
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
        padding: 15,
        backgroundColor: "#EDF2FA",
        borderRadius: 10,
        marginBottom: 40,
        color: "#fff",
        fontSize: 20
    },
    select: {
        backgroundColor: "#EDF2FA",
        marginBottom: 40,
        color: "#fff",
        fontSize: 40,
        borderWidth: 1, 
        borderRadius: 10,
        borderColor: "#fff"
    },
    areaImg:{
        backgroundColor: '#EDF2FA',
        width: "100%",
        height: 220,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    imagemSelecionada: {
        width: "95%",
        height: 200,
        borderRadius: 8,
    },
    btnSelecionarImg: {
        width: '100%',
        padding: 10,
        backgroundColor: "#09184D",
        borderRadius: 10,
        marginBottom: 50,
        marginTop: 20,
        borderWidth: 2,
        borderColor: "#EDF2FA"
    },
    btnCadastrar: {
        width: '100%',
        padding: 10,
        backgroundColor: "#006400",
        borderRadius: 10,
        alignSelf: 'center',
        
    },
    txtBtn: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25
    },
    footer: {
        justifyContent: 'flex-end'
    }
});

export default styles;