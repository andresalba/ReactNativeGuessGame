import { View, Text, StyleSheet, Image, ScrollView, useWindowDimensions } from "react-native"
import Title from "../components/ui/Title"
import { Colors } from "react-native/Libraries/NewAppScreen"
import PrimaryButton from "../components/ui/PrimaryButton"

function GameOver({ roundsNumber, userNumber, onRestart }) {

    const { width, height } = useWindowDimensions()

    let imageSize = 300

    if (width < 380) {
        imageSize = 150
    }

    if (height < 400) {
        imageSize = 80
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }

    return (
        <ScrollView style={styles.scr}>
            <View style={styles.rootCont}>
                <Title>GAME OVER MAN</Title>
                <View style={[styles.imgCont, imageStyle]}><Image source={require('../assets/images/success.png')} style={styles.img} /></View>
                <Text style={styles.summaryTxt}>
                    Your machine needed <Text style={styles.hightlight}>{roundsNumber} </Text>
                    rounds to guess the number <Text style={styles.hightlight}>{userNumber}</Text>
                </Text>
                <PrimaryButton btnPressed={onRestart}>Re Start</PrimaryButton>
            </View>
        </ScrollView>
    )
}
export default GameOver

//const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    scr:{
        flex: 1,
        marginTop: 50,
    },
    rootCont: {
        flex: 1,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgCont: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.tempo,
        overflow: 'hidden',
        margin: 36,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    summaryTxt: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
        marginHorizontal: 20,
    },
    hightlight: {
        fontFamily: 'open-sans-bold',
        color: 'red'
    }
});