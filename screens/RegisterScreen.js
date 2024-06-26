import { Input, Button } from "react-native-elements";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { auth } from "../fireBase";


const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");

  const register = () => {
   auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    
user.updateProfile({
  displayName: name,
  photoURL: imageURL ?  imageURL:"https://i.pinimg.com/originals/34/a5/b8/34a5b8b2a7d86f39e7faaa8e1f064c81.jpg"
}).then(() => {
  // Update successful
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});  
navigation.replace('Chat')
    // ...
  })
  .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your name"
        label="Name"
        leftIcon={{ type: "material", name: "badge" }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
      <Input
        placeholder="Enter your image Url"
        label="Profile Picture"
        leftIcon={{ type: "material", name: "face" }}
        value={imageURL}
        onChangeText={(text) => setImageURL(text)}
      />

      <Button title={"register"} onPress={register} style={styles.button} />
    </View>
  );
};

export default RegisterScreen;

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
