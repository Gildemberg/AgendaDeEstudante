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
        backgroundColor: '#111',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default styles;