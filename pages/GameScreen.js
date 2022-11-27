import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Alert,
    TouchableOpacity
} from "react-native";
import axios from "axios";
function GameScreen() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    useEffect(() => {
         axios
                .get("https://itch.io/api/1/HIDDEN_FOR_PRIVACY_PURPOSE/my-games")
                .then((res) => setData(res.data.games[count]))
                .catch((e) => Alert.alert("Gagal!", e));
    }, [count]);
    const next = () => {
        var nextCount = 0;
        if(count < 2){
            var nextCount = count + 1;
        }else{
            var nextCount=0;
        }
        setCount(nextCount);

    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={{
                        uri: data.cover_url
                    }}
                    style={styles.headerImage}
                />
                <Text style={styles.headerText}>
                    {data.title}
                </Text>
                <Text style={styles.headerTextDesc}>{data.short_text}</Text>
            </View>
            <TouchableOpacity style={styles.bodyTouchable} onPress={() =>
                next()}>
                <Text style={styles.bodyText}>NEXT</Text>
            </TouchableOpacity>
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
        width: 120,
        borderRadius: 60,
        marginVertical: 10
    },
    headerText: {
        fontWeight: "bold",
        color: "#fff"
    },
    headerTextDesc: {
        color: "#fff"
    },
    bodyTouchable: {
        alignSelf: "center",
        backgroundColor: "#47B5FF",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        margin: 20
    },
    bodyText: {
        color: "#efd",
        fontSize: 20
    }
});

export default GameScreen;
