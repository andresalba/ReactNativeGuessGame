import { View, StyleSheet, Alert, useWindowDimensions, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionTest from "../components/ui/InstructionTest";
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {

    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBound = 1
let maxBound = 100

function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    const { height, width } = useWindowDimensions()

    useEffect(() => {
        if (currentGuess === userNumber) { //if the machine guessed the number
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBound = 1
        maxBound = 100
    }, [])

    function nextGuess(direction) { //direction means what button is pressed
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'lower' && currentGuess < userNumber)) {
            Alert.alert('liar', 'you are cheating', [{ text: "again", style: "cancel" }])
            return
        }
        if (direction === 'lower') {
            maxBound = currentGuess
        } else {
            minBound = currentGuess + 1
        }
        const newRndNum = generateRandomBetween(minBound, maxBound, currentGuess)
        setCurrentGuess(newRndNum)
        setGuessRounds(prevGuessRounds => [newRndNum, ...prevGuessRounds])
    }

    const guessRoundsListLength = guessRounds.length

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionTest stl={styles.instructionTxt}>higher or lower ?</InstructionTest>
            <View style={styles.btnsCont}>
                <View style={styles.btnCont}>
                    <PrimaryButton btnPressed={nextGuess.bind(this, 'lower')}>
                        <Ionicons name='md-remove' size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={styles.btnCont}>
                    <PrimaryButton btnPressed={nextGuess.bind(this, 'greater')}>
                        <Ionicons name='md-add' size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
    </>;

    if (width > 500) {
        content = <>
            <InstructionTest stl={styles.instructionTxt}>higher or lower ?</InstructionTest>
            <View style={styles.btnsContW}>
                <View style={styles.btnCont}>
                    <PrimaryButton btnPressed={nextGuess.bind(this, 'lower')}>
                        <Ionicons name='md-remove' size={24} color="white" />
                    </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.btnCont}>
                    <PrimaryButton btnPressed={nextGuess.bind(this, 'greater')}>
                        <Ionicons name='md-add' size={24} color="white" />
                    </PrimaryButton>
                </View> 
            </View>
        </>
    }

    return (
        <View style={styles.scrn}>
            <Title>Oponents Guess</Title>
            {content}
            <View style={styles.listCont}>
                { /* guessRounds.map( guessRound => <Text key={guessRound}>{guessRound}</Text>) */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                >
                </FlatList>
            </View>
        </View>
    )
}
export default GameScreen

const styles = StyleSheet.create({
    scrn: { //screen style
        flex: 1,
        padding: 24,
        alignItems: 'center',
    },
    btnsCont: {
        flexDirection: "row",
    },
    btnsContW:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnCont: {
        flex: 1,
    },
    instructionTxt: {
        marginBottom: 12,
    },
    listCont: {
        flex: 1,
        padding: 16,
    },
});