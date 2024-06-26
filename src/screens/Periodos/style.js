import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#000",
        padding: 30,
        justifyContent: 'center'
    },
    periodo:{
        padding: 30,
        marginBottom: 10,
        backgroundColor: "#4F4F4F",
        borderRadius: 30
    },
    txtPeriodo:{
        textAlign: 'center',
        color: "#fff",
        fontSize: 30
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