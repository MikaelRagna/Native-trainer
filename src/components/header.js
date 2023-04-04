import { Image, StyleSheet, Text, View } from "react-native"

import calendar from "../../assets/calendar-date.png"

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.text1}>Classify transaction</Text>
            <Text style={styles.text2}>Classify this transaction into  a  particular category</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        margin:0, 
        paddingTop: 50,
        zIndex: 10
    },
    text1: {
        fontSize: 25,
        fontWeight: "900",
        color: "#fff",
        marginLeft: 20
    },
    text2: {
        fontSize: 17,
        fontWeight: "400",
        color: "#fff",
        marginLeft: 20,
        width: 300,
        marginBottom: 30
    },
})