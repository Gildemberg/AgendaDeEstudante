import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#EDF2FA",
    },
    titulo: {
        fontSize: 15,
        color: "#2F2E2E",
        marginBottom: 10,
        marginTop: 60,
        textAlign: 'center'
    },
    titulo2: {
        fontSize: 35,
        color: "#2F2E2E",
        marginBottom: 20,
        textAlign: 'center'
    },
    cardAtividade: {
        backgroundColor: "#09184D",
        width: '80%',
        borderRadius: 30,
        margin: 10,
        padding: 15,
        alignSelf: 'center'
    },
    tituloAtividade: {
        fontSize: 10,
        color: "#fff",
        textAlign: 'center'
    },
    assuntoAtividade: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff",
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15,
    },
    colunas: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtFooter: {
        fontSize: 15,
        color: "#fff"
    },
    status: {
        color: '#32CD32'
    },



    cardAbertoAtividade: {
        backgroundColor: "#09184D",
        width: '80%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        margin: 10,
        marginBottom: -1,
        alignSelf: 'center',
        padding: 15
    },
    descricao: {
        fontSize: 15,
        color: "#fff",
        marginBottom: 50,
        marginTop: 30,
        textAlign: 'justify'
    },
    valores: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footer: {
        backgroundColor: '#32CD32',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 10,
    },
    footerCardA: {
        width: '80%',
        alignSelf: 'center',
    },
    prazo: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
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


    modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardInserirNota: {
        width: '80%',
        backgroundColor: "#d3d3d3",
        borderRadius: 20,
        alignItems: 'center',
        padding: 10
    },
    btnClose:{
        position: 'absolute',
        right: 10,
        top: 10,
    },
    tituloIncluirNota:{
        fontSize: 20,
        marginBottom: 5
    },
    input: {
        width: '50%',
        padding: 15,
        backgroundColor: "#d3d3d3",
        borderRadius: 10,
        marginBottom: 10,
        color: "#000",
        fontSize: 20,
        borderWidth: 2,
        borderColor: '#000'
    },
    incluirNota: {
        backgroundColor: "#32CD32",
        padding: 10,
        borderRadius:10
    },
    txtIncluirNota: {
        color: "#fff",
        fontSize: 18,
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
    bottomTabs: {
        flexDirection: 'row',
        width: "100%",
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
        backgroundColor: "#09184D",
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAtividade: {
        backgroundColor: "#040b26",
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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