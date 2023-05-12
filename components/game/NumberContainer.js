import { View, Text, StyleSheet, Dimensions } from "react-native"
import Colors from "../../constants/Colors";

function NumberContainer(props){
    return(
        <View style={styles.cont}>
            <Text style={styles.numText}>{props.children}</Text>
        </View>
    )
}

export default NumberContainer

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    cont: {
        borderWidth: 4,
        borderColor: Colors.tempo,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: "center",
        justifyContent: "center",
    },
    numText: {
        fontFamily: 'open-sans-bold',
        color: Colors.tempo,
        fontSize: deviceWidth < 380 ? 28 : 36,
        //fontWeight: 'bold'
    },
});