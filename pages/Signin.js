import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import {useDispatch} from 'react-redux';
import {addUserInfo} from '../redux/TodoSlice';
import auth from '@react-native-firebase/auth';

export default function SignIn({navigation}) {
console.log("rendered");
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn,setSignIn] = useState(true)

  const handleRoute = ()=>{
    setSignIn(!signIn)
    if(!signIn){
      navigation.setOptions({title:"Login"})
    }
    else{
      navigation.setOptions({title:"Register"})
    }
  }

  const handleSignIn = async()=>{
    if(signIn){
      await auth().signInWithEmailAndPassword(email, password).then((response)=>{
      dispatch(addUserInfo(JSON.stringify(response)))
      navigation.navigate("Dashboard")
    }).catch(err=>alert(err))
  }
    else{
      await auth().createUserWithEmailAndPassword(email,password).then(response=>{
        dispatch(addUserInfo(JSON.stringify(response)))
        navigation.navigate("Dashboard")
      }).catch(err=>alert(err))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={handleRoute}>{signIn?"Create a new account":"click here to signin"}</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={handleSignIn}>
        <Text style={styles.loginText}>{signIn?"Login":"Register"}</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#e4e5e2",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#4863A0",
  },
  loginText:{
    fontSize:20
  }
});