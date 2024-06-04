import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colour from "../../Utils/Colour";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.userAvatar} />
            <View>
              <Text style={{ color: Colour.WHITE }}>Welcome,</Text>
              <Text style={{ color: Colour.WHITE, fontSize: 20 }}>
                {user?.fullName}
              </Text>
            </View>
          </View>
          <Feather name="bookmark" size={24} color={Colour.WHITE} />
        </View>
        {/* search bar cesction */}
        <View style={styles.searchBarContainer}>
            <TextInput placeholder="Search" style={styles.textInput}/>
            <FontAwesome name="search" size={24} color={Colour.PRIMARY}  style={styles.searchBtn}/>
        </View>
      </View>
    )
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 40,
    backgroundColor: Colour.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  searchBarContainer:{
marginTop:17,
display:'flex',
flexDirection:'row',
gap:10,
marginBottom:10
  },
  searchBtn:{
backgroundColor:Colour.WHITE,
padding:10,
borderRadius:8
  },
  textInput:{
padding:7,
paddingHorizontal:16,
backgroundColor:Colour.WHITE,
borderRadius:8,
width:'85%',
fontSize:16
  }
});
