import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import "react-native-gesture-handler";
import GameScreen from "./pages/GameScreen";
import ThreeDScreen from "./pages/ThreeDScreen";
import ThreeDetailScreen from "./pages/ThreeDetailScreen";
import Navbar from "./pages/Navbar";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="kih" component={Navbar} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="ThreeDScreen" component={ThreeDScreen} />
        <Stack.Screen name="ThreeDetailScreen" component={ThreeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}