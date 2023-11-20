import * as React from "react";
import {
  View,
  BackHandler,
  StyleSheet,
  Text,
  Image,
  Alert,
} from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import SplashScreen from "./src/pages/SplashScreen";
import Intro from "./src/pages/Intro";
import Auth from "./src/pages/Auth";
import Register from "./src/pages/Register";
import Home from "./src/pages/Home";
import History from "./src/pages/History";
import Profile from "./src/pages/Profile";
import Transaction from "./src/pages/Transaction";
import TransactionDetail from "./src/pages/TransactionDetail";
import Password from "./src/pages/Password";
import { navigationRef } from "./src/function/navigationRef";
const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
        <Stack.Screen name="Password" component={Password} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
