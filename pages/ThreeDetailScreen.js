import { View, Text, Image, StyleSheet } from "react-native";
import { data } from "../common/ThreeDetail";
function ThreeDetailScreen({route}) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{data[route.params.msg-1].name}</Text>
            </View>
            <Image style={styles.uhhImage} source={{uri:data[route.params.msg-1].image}}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: "#DE3163",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 15,
        alignItems: "center",
        paddingBottom: 10
    },
    headerImage: {

        height: 120,
        width: 100
    },
    uhhImage: {
        marginLeft:'auto',
        marginRight:'auto',
        height: '100%',
        width: '100%'
    },
    headerText: {
        color: "#fff",
        fontWeight: "bold"
    }
});
export default ThreeDetailScreen;