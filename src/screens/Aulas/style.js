import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#000",
    },
    titulo:{
        fontSize: 15,
        color: "#fff",
        marginBottom: 10,
        marginTop: 60,
        textAlign: 'center'
    },
    titulo2:{
        fontSize: 35,
        color: "#fff",
        marginBottom: 20,
        textAlign: 'center'
    },
    cardAula: {
        backgroundColor: "#424242",
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
    bottomTabs:{
        flexDirection: 'row',
        width:"100%",
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
        backgroundColor: "#424242",
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAtividade: {
        backgroundColor: "#696969",
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
        backgroundColor: 'yellow',
        padding: 10,
        margin: 10,
        marginTop: -100,
        borderRadius: 10,
    },
    txtAviso:{
        color: '#000',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default styles;