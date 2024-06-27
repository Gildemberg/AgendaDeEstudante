import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#000",
        padding: 30
    },
    titulo:{
        textAlign: 'center',
        color:"#fff",
        fontSize: 30
    },
    tituloInput:{
        color:"#fff",
        fontSize: 25
    },
    input: {
        padding:10,
        backgroundColor: "#424242",
        borderRadius:15,
        marginBottom: 20,
        color: "#fff",
        fontSize: 20
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    btnCadastrar: {
        backgroundColor: "#228B22",
        padding:10,
        borderRadius:10
    },
    txtBtn: {
        textAlign: 'center',
        color:"#FFF",
        fontSize:25
    }
});

export default styles;