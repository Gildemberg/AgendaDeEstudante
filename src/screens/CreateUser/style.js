import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D3D3D3",
        padding: 30,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    alert:{
        color: "#fff"
    },
    areaImg:{
        backgroundColor: '#fff',
        width: 205,
        height: 205,
        borderRadius: 205,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        borderRadius: 200
    },
    input: {
        width: '100%',
        padding:10,
        backgroundColor: "#fff",
        borderRadius: 10,
        fontSize: 20,
        marginBottom: 40
    },
    botao: {
        width: '100%',
        padding: 10,
        backgroundColor: "#4169E1",
        borderRadius: 10
    },
    textoBotao: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
});
export default styles;