import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colour from "../../Utils/Colour";
import * as WebBrowser from "expo-web-browser";
import useWarmUpBrowser from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();
const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={styles.loginImage}
        source={require("../../../assets/images/view1.png")}
      ></Image>
      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 24, color: Colour.WHITE, textAlign: "center" }}
        >
          Lets Find
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Professional Cleaning & Repair{" "}
          </Text>
          Services
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: Colour.WHITE,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Best App to find services near you which deliver you a professional
          service.
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{textAlign:"center",fontSize:15,color:Colour.PRIMARY}}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colour.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colour.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button:{
padding:15,
borderRadius:99,
backgroundColor:Colour.WHITE,
marginTop:30
  }
});
