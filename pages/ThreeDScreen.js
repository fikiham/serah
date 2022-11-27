import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { data } from "../common/ThreeD";
import ProfileScreen from "./ProfileScreen";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
function ThreeDScreen({ navigation }) {
    const ListItemNama = (dataPassing) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('ThreeDetailScreen', {
                    msg: dataPassing.dataNama.id % 2 === 1
                        ? 1
                        : 2
                })}>
                <View

                    style={
                        dataPassing.dataNama.id % 2 === 1
                            ? styles.oddItemListContainer
                            : styles.evenItemListContainer
                    }
                >
                    <View>
                        <View style={styles.itemListLine} />
                    </View>

                    <View style={styles.itemListContent}>
                        <Text style={styles.itemListText}>
                            {dataPassing.dataNama.nama}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>3D by kih</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                legacyImplementation={false}
                data={data}
                renderItem={({ item }) => <ListItemNama dataNama={item} />}
                keyExtractor={(item) => item.id}
                style={styles.flatlist}
            />
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
    headerText: {
        color: "#fff",
        fontWeight: "bold"
    },
    flatlist: {
        flex: 1,
        marginHorizontal: 10
    },
    oddItemListContainer: {
        height: 100,
        backgroundColor: "#F2D2BD",
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20
    },
    evenItemListContainer: {
        height: 100,
        backgroundColor: "#FFC0CB",
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20
    },
    itemListContent: {
        marginLeft: 10
    },
    itemListLine: {
        backgroundColor: "#06283D",
        width: 5,
        height: "80%"
    },
    itemListText: {
        color: "#06283D",
        marginVertical: 2,
        fontWeight: "bold",
        fontSize: 17
    },
    bodyTouchable: {
        alignSelf: "center",
        backgroundColor: "#47B5FF",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        margin: 20
    }
});
export default ThreeDScreen;