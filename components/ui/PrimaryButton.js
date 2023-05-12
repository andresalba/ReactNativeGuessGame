import { Text, Pressable, View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton(props) {

    return (
        <View style={styles.buttonOutCont} >
            <Pressable 
                onPress={props.btnPressed} // btnPressed comes from StartGameScreen
                android_ripple={{ color: Colors.primary600 }} 
                style={styles.buttonInCont} 
            >
                <Text style={styles.buttonText} >{props.children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOutCont: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInCont: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
});