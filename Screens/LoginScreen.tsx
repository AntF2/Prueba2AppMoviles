import { Button, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//FIREBASE
import { auth } from '../Config/Config';


export default function LoginScreen({ navigation }: any) {

  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')

  function login() {
signInWithEmailAndPassword(auth, correo, contrasenia)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate('Drawer_Welcome')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    Alert.alert(errorMessage)
    if (errorCode === 'auth/user-not-found') {
      Alert.alert('Usuario no encontrado')
    }else if (errorCode === 'auth/wrong-password') {
      Alert.alert('Contraseña incorrecta')
    }
  });
  }
  

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Login</Text>
      <TextInput
        placeholder='Ingresar email'
        keyboardType='email-address'
        onChangeText = { (texto: any) => setcorreo(texto)}
      />

      <TextInput
        placeholder=" Ingresar contraseña"
        onChangeText = { (texto: any) => setcontrasenia(texto)}

      />

      <Button title='Ingresar' onPress={() => login() } />

      <Text onPress={() => navigation.navigate('Registro')}> 👉 Regístrate aquí 👈</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})