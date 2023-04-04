import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"

export default function Home() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnHome} >
                <Icon style={styles.general} name="th-large" size={30} color={'#fff'} />
                <Text style={{ color: "#4AB0F6", marginTop: 15, fontWeight: "800" }}>General</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnHome}>
                <Icon style={styles.bus} name="bus" size={30} color={'#fff'} />
                <Text style={{ color: "#865FFE", marginTop: 15, fontWeight: "800" }}>Transport</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnHome}>
                <Icon style={styles.shopping} name="shopping-bag" size={30} color={"#fff"}/>
                <Text style={{ color: "#FD50E1", marginTop: 15, fontWeight: "800" }}>Shopping</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnHome}>
                <Text>sdfiysisf</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnHome}>
                <Text>sdfiysisf</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnHome}>
                <Text>sdfiysisf</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    btnHome: {
        width: 145,
        height: 165,
        borderRadius: 20,
        backgroundColor: "#282B5C",
        marginBottom: 10,
        marginLeft: 18,
        marginRight: 17,
        opacity: 0.9,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    general: {
        backgroundColor: "#4AB0F6",
        padding: 30,
        borderRadius: 50
    },
    bus: {
        backgroundColor: "#865FFE",
        padding: 30,
        borderRadius: 50,
        
    },
    shopping: {
        backgroundColor: "#FD50E1",
        padding: 30,
        borderRadius: 50,
        
    }
})