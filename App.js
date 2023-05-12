import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import { useState } from "react";
import Colors from './constants/Colors';
import { useFonts } from 'expo-font';
import Apploading from 'expo-app-loading';
import { StatusBar } from 'react-native';

export default function App() {

  const [userNum, setUserNum] = useState() //number entered by the user
  const [gameIsOver, setGameIsOver] = useState(true) //if the game is over
  const [guessNumb, setGuessNumb] = useState(0)// ow mani times the machine tryied

  const [fontsloaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsloaded) {
    return <Apploading />
  }

  function pickednum(pN) { //if the entered number is correct, analize it 
    setUserNum(pN)
    setGameIsOver(false)
  }

  function gameOverHandler(numOfRounds) {
    setGameIsOver(true)
    setGuessNumb(numOfRounds)
  }

  function startNewGame() {
    setUserNum(null)
    setGuessNumb(0)
    console.log('restarted')
  }

  let screen = <StartGameScreen numPicked={pickednum} />

  if (userNum) {// if is not null or undefined
    screen = <GameScreen userNumber={userNum} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNum) {
    screen = <GameOver userNumber={userNum} roundsNumber={guessNumb} onRestart={startNewGame} />
  }

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroungImg}
        >
          {/* <SafeAreaView style={styles.av}>{screen}</SafeAreaView> */}
          {screen}
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
  backgroungImg: {
    opacity: 0.25,
  },
  sav: {
    flex: 1,
  },
});
