import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#000",
        padding: 30
    },
    btnAdd: {
        backgroundColor: "#fff",
        width: 70,
        height: 70,
        borderRadius: 70,
        position: 'absolute',
        bottom: 30,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;