import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#EDF2FA",
    },
    titulo:{
        fontSize: 15,
        color: "#2F2E2E",
        marginBottom: 10,
        marginTop: 60,
        textAlign: 'center'
    },
    titulo2:{
        fontSize: 35,
        color: "#2F2E2E",
        marginBottom: 20,
        textAlign: 'center'
    },
    cardAula: {
        backgroundColor: "#09184D",
        width: '80%',
        borderRadius: 30,
        margin: 10,
        padding: 15,
        alignSelf: 'center'
    },
    tituloAula: {
        fontSize: 20,
        color: "#fff",
        textAlign: 'center'
    },
    dataAula: {
        fontSize: 10,
        color: "#fff",
         textAlign: 'right'
    },
    btnAdd: {
        backgroundColor: "#09184D",
        width: 50,
        height: 50,
        borderRadius: 70,
        position: 'absolute',
        bottom: 70,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomTabs:{
        flexDirection: 'row',
        width:"100%",
        position: 'absolute',
        bottom: 0,
        height: 50
    },
    btnInfo: {
        backgroundColor: "#09184D",
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAula: {
        backgroundColor: "#040b26",
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAtividade: {
        backgroundColor: "#09184D",
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },


    
    cardAulaAberto: {
        backgroundColor: "#09184D",
        width: '80%',
        borderRadius: 30,
        margin: 10,
        marginBottom:0,
        padding: 15,
        alignSelf: 'center',
        paddingTop: 40,
        paddingBottom: 40
    },
    tituloAulaa: {
        fontSize: 14,
        color: "#fff",
        textAlign: 'center',
        marginBottom: 10
    },
    tituloAssunto: {
        fontSize: 20,
        color: "#fff",
        textAlign: 'center',
        fontWeight: 'bold'
    },
    observacoes: {
        color: '#fff',
        padding: 40,
        paddingLeft: 20,
        fontSize: 18
    },
    dataAulaAberto: {
        textAlign: 'center',
        color: '#fff'
    },


    
    botoes: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        width: "80%"
    },
    btnAE: {
        backgroundColor: "#09184D",
        padding: 3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 10,
        width: '40%'
    },
    btnInserir: {
        position: 'absolute',
        marginLeft: 35,
        marginTop: -2,
    },
    txt: {
        color: "#fff",
        fontWeight: 'bold'
    },

    
    containerAviso:{
        flex: 1,
        justifyContent: 'center'
    },
    aviso:{
        backgroundColor: '#09184D',
        padding: 10,
        margin: 10,
        marginTop: -100,
        borderRadius: 10,
    },
    txtAviso:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default styles;