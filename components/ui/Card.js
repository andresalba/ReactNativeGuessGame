import { View, Text, StyleSheet, Dimensions } from "react-native"

function Card(props){
    return(
        <View style={styles.card}>
            {props.children}
        </View>
    )
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: deviceWidth < 380 ? 18 : 36, 
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 8,
    },
});