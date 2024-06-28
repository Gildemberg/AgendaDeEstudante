import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center'
    },
    disciplina: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    },
    areaImagem: {
        backgroundColor: "#4F4F4F",
        width: "100%",
        height: 300,
        borderRadius: 40,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    imagem: {
        width: '100%', 
        height: 300, 
        borderRadius: 40,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    txtDisciplina: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center'
    },
    txtMedia: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    bottomTabs:{
        flexDirection: 'row',
        width:"100%",
        position: 'absolute',
        bottom: 0,
        height: 50
    },
    btnInfo: {
        backgroundColor: "#424242",
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
        backgroundColor: "#696969",
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;