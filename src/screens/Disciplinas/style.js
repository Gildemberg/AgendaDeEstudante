import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#EDF2FA",
        padding: 10,
        justifyContent: 'center',
    },
    filtro: {
        position: 'absolute',
        bottom: 50,
        left: 30
    },
    disciplina: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 15,
    },
    areaImagem: {
        backgroundColor: "#4F4F4F",
        width: "100%",
        height: 200,
        borderRadius: 40
    },
    imagem: {
        width: '100%', 
        height: 200, 
        borderRadius: 40
    },
    txtDisciplina: {
        textAlign: 'center',
        color: "#2F2E2E",
        fontSize: 20,
        marginTop: 5
    },
    btnAdd: {
        padding: 10,
        backgroundColor: "#09184D",
        borderRadius: 1000,
        position: 'absolute',
        bottom: 30,
        right: 30
    },
    modalContent: {
        backgroundColor: "#09184D",
        justifyContent: 'center',
        borderRadius: 20,
        paddingRight: 40,
        paddingLeft: 40,
        paddingTop: 20
    },
    select: {
        backgroundColor: "#eee",
        marginBottom: 40,
        color: "#fff",
        fontSize: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        color: "#000"
    },
    txtFiltroP: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 30
    },
    
});
export default styles;