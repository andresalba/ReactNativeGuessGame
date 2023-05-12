import { TextInput, View, StyleSheet, Alert, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import InstructionTest from "../components/ui/InstructionTest";

function StartGameScreen(props) {

    const [enterNum, setEnterNum] = useState('');

    const { height, width } = useWindowDimensions()

    function numInput(e) {// function to capture what is written in the textinput
        setEnterNum(e)
    }

    function resetInp() {// resets the number in the input whrn the alert button is clicked or Reset button
    }

    function confirmInp() {// action the confirm button passed as a prop
        const chosenNumber = parseInt(enterNum)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) { // if is not a number or is less or cero or bigger than 99
            Alert.alert(//show alert
                'Invalid number',
                'Must be >0 and <99',
                [{ text: 'ok', style: 'destructive', onPress: resetInp }]
            )
            return
        }
        props.numPicked(chosenNumber)
    }

    const marginTopDistance = height < 450 ? 50 : 100

    return (
        <View style={[styles.rootCont, { marginTop: marginTopDistance }]}>
            <Title>Guess my Number</Title>
            <Card>
                <InstructionTest>Enter a Number</InstructionTest>
                <TextInput
                    style={styles.numInp}
                    maxLength={2}
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numInput}
                    value={enterNum}
                />
                <View style={styles.btnsCont}>
                    <View style={styles.btnCont}><PrimaryButton btnPressed={resetInp}>Reset</PrimaryButton></View>
                    <View style={styles.btnCont}><PrimaryButton btnPressed={confirmInp}>Confirm</PrimaryButton></View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen

//const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    rootCont: {
        flex: 1,
        //marginTop: deviceHeight < 450 ? 50 : 100,
        alignItems: 'center',
    },
    inputCont: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 8,
    },
    numInp: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    btnsCont: {
        flexDirection: "row",
    },
    btnCont: {
        flex: 1,
    },
});