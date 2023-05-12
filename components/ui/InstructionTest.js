import { Text, StyleSheet } from "react-native"
import Colors from "../../constants/Colors";

function InstructionTest(props) {
    return (
        <Text style={[styles.instructions, props.stl]}>{props.children}</Text>
    )
}

export default InstructionTest

const styles = StyleSheet.create({
    instructions: {
        fontFamily: 'open-sans',
        color: Colors.tempo0,
        fontSize: 24,
    },
});