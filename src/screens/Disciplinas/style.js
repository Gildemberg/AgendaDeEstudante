import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#000",
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnAdd: {
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 1000,
        position: 'absolute',
        bottom: 30,
        right: 30
    },
    txtbtnadd: {
        textAlign: 'center',
        fontSize: 30
    }
});
export default styles;