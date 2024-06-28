import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#000",
    },
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: "#000",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,
    },
    titulo:{
        textAlign: 'center',
        color:"#fff",
        fontSize: 30,
        padding: 30,
        marginTop: 30
    },
    alert:{
        color: "red",
        fontSize:15,
        textAlign: 'center'
    },
    tituloInput:{
        color:"#fff",
        fontSize: 25
    },
    input: {
        padding:15,
        backgroundColor: "#424242",
        borderRadius:15,
        marginBottom: 30,
        color: "#fff",
        fontSize: 20
    },
    columns:{
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between'
    },
    columnOne: {
        width: "46%"
    },
    columnTwo: {
        width: "46%"
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