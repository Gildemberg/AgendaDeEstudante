import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#09184D",
    },
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: "#09184D",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,
    },
    titulo:{
        textAlign: 'center',
        color:"#EDF2FA",
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
        color:"#EDF2FA",
        fontSize: 25
    },
    input: {
        padding:15,
        backgroundColor: "#EDF2FA",
        borderRadius:15,
        marginBottom: 30,
        color: "#09184D",
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