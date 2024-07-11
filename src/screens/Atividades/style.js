import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#000",
    },
    titulo: {
        fontSize: 15,
        color: "#fff",
        marginBottom: 10,
        marginTop: 60,
        textAlign: 'center'
    },
    titulo2: {
        fontSize: 35,
        color: "#fff",
        marginBottom: 20,
        textAlign: 'center'
    },
    cardAtividade: {
        backgroundColor: "#424242",
        width: '80%',
        borderRadius: 30,
        margin: 10,
        padding: 15,
        alignSelf: 'center'
    },
    tituloAtividade: {
        fontSize: 15,
        color: "#fff",
        textAlign: 'center'
    },
    assuntoAtividade: {
        fontSize: 20,
        color: "#fff",
        textAlign: 'center'
    },
    colunas: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtFooter: {
        fontSize: 15,
        color: "#fff",
    },
    status: {
        color: '#32CD32'
    },



    cardAbertoAtividade: {
        backgroundColor: "#424242",
        width: '80%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        margin: 10,
        marginBottom: -10,
        padding: 15,
        paddingBottom: 0,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: "#32CD32"
    },
    bodyCard: {
        padding: 30
    },
    descricao: {
        color: "#fff",
        marginBottom: 50,
        marginTop: 30,
        textAlign: 'justify'
    },
    valores: {
        flexDirection: 'row',
        justifyContent: 'space-around'
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
        color: '#000',
        fontWeight: 'bold'
    },
    botoes: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: "#fff",
        width: "80%"
    },
    btn: {
        backgroundColor: "#424242",
        width: "30%",
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    btnInserir: {
        backgroundColor: "#32CD32",
        width: "30%",
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        marginLeft: 5
    },
    txt: {
        color: "#fff"
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
        backgroundColor: "#d3d3d3",
        borderRadius: 20,
        width: 500,
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
        width: '30%',
        padding: 15,
        backgroundColor: "#4F4F4F",
        borderRadius: 10,
        marginBottom: 10,
        color: "#fff",
        fontSize: 20
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
        backgroundColor: "#424242",
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
        backgroundColor: "#696969",
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAula: {
        backgroundColor: "#696969",
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAtividade: {
        backgroundColor: "#424242",
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;