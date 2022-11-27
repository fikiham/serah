import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

export default function Navbar(){
    return(
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home"  
          component={HomeScreen}
          options={{headerShown:false}}/>

        <BottomTab.Screen name="About" 
          component={ProfileScreen} 
          options={{headerShown:false}}/>
      </BottomTab.Navigator>

    );
  }
  