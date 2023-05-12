import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors";

function GuessLogItem(props){
    return(
        <View style={styles.listItem}>
            <Text style={styles.itemTxt}>#{props.roundNumber}</Text>
            <Text style={styles.itemTxt}>Oponent's Guess: {props.guess}</Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.tempo,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
    },
    itemTxt: {
        fontFamily: 'open-sans',

    },
});