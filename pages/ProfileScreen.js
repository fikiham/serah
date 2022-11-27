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
function ProfileScreen() {
    const [data, setData] = useState("");
    useEffect(() => {
        axios
                .get("https://api.github.com/users/fikiham")
                .then((res) => setData(res.data))
                .catch((e) => Alert.alert("Gagal!", e));
    }, []);
    const next = () => {
        window.open("https://github.com/fikiham");
    };

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Dibuat untuk menyelesaikan tugas akhir ppb</Text>
                <Text style={styles.headerText}>Oleh Faqih</Text>
            </View>
            <TouchableOpacity style={styles.bodyTouchable}
            onPress={() => next()}
                >
                                    <Image
                    source={{
                        uri: data.avatar_url
                    }}
                    style={styles.headerImage}
                />
                <Text style={styles.bodyText}>
                    {data.name}
                </Text>
                <Text style={styles.bodyText}>{data.login}</Text>
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
        alignItems:"center",
        backgroundColor: "#47B5FF",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        margin: 20
    },
    bodyText: {
        alignSelf:"center",
        color: "#efd",
        fontSize: 20
    },
    bodyImage:{
        alignSelf:"center",
        height: 120,
        width: 120,
        borderRadius: 60,
        marginVertical: 10
    }
});

export default ProfileScreen;