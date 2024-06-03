import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/HomeScreen/Home";
import Profile from "../Screens/ProfileScreen/Profile";
import Bookings from "../Screens/BookingScreen/Bookings";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import Colour from "../Utils/Colour";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,tabBarActiveTintColor:Colour.PRIMARY }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
     
      <Tab.Screen name="Bookings" component={Bookings} options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
            Bookings
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }} />

      <Tab.Screen name="Profile" component={Profile}
       options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle"  size={size} color={color} />
          ),
        }}
         />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
