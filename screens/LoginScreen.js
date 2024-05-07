import { Input, Button } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { auth } from "../fireBase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)

      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Chat");
      } else {
        // User is signed out
        // ...
        navigation.canGoBack() && navigation.popToTop();
      }
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button
        title={"sign in"}
        onPress={() => signIn()}
        style={styles.button}
      />
      <Button
        title={"register"}
        onPress={() => navigation.navigate("Register")}
        style={styles.button}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});
