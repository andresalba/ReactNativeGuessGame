import { Text, StyleSheet, Platform } from "react-native"
import Colors from "../../constants/Colors"

function Title(props) {
    return (
        <Text style={styles.title}>{props.children}</Text>
    )
}
export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        //fontWeight: 'bold',
        color: Colors.tempo,
        textAlign: 'center',
        borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderColor: Colors.tempo,
        padding: 12,
        marginTop: 10, //por que no funciona sav
        maxWidth: '80%',
        width: 300,
    },
});