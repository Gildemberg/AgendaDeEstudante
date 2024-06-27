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
    }
});

export default styles;