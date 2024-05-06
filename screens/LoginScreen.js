import { Input, Button } from "react-native-elements";
import React, { useState } from "react";
import { View, Text ,StyleSheet} from "react-native";

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style = {styles.container}>

      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={text => setEmail(text)}
      />
        <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
<Button title={'sign in'} style={styles.button}/>
<Button title={'register'}  onPress={()=>navigation.navigate('Register')} style={styles.button}/>

    </View>
  );
};

export default Login;


const styles = StyleSheet.create({
   button:{
width:200,
marginTop:10
   },
    container:{
        flex:1,
        alignItems:'center',
        padding:10
    }
})