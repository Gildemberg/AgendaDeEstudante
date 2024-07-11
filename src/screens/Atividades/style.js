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
    footerCard: {
        fontSize: 15,
        color: "#fff",
    },
    colunas: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    status: {
        color: '#32CD32'
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
    cardAbertoAtividade: {
        margin: 20,
        backgroundColor: '#424242',
        borderRadius: 50,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
    footerCardA: {
        backgroundColor: '#32CD32',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 10
    },
    prazo: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    botoes: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 20
    },
    btn: {
        backgroundColor: "#424242",
        width: 50,
        height: 50,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    btnInserir: {
        backgroundColor: "#32CD32",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10
    },
    txt: {
        color: "#fff"
    }
});

export default styles;