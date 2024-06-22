import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
// FIREBASE
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../Config/Config';
import { ref, set } from 'firebase/database';

export default function RegistroScreen({ navigation }: any) {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [nick, setNick] = useState('');
  const [edad, setEdad] = useState('');

  function registro() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        set(ref(db, 'users/' + nick), {
          email: correo,
          edad: edad,
          nickname: nick
        });
        navigation.navigate('Login');
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/email-already-in-use') {
          Alert.alert('Error', 'El correo ya está en uso.');
        } else {
          Alert.alert('Error', error.message);
        }
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>RegistroScreen</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese email'
        onChangeText={(texto) => setCorreo(texto)}
        value={correo}
      />
      <TextInput
        style={styles.input}
        placeholder='Ingrese contraseña'
        secureTextEntry
        onChangeText={(texto) => setContrasenia(texto)}
        value={contrasenia}
      />
      <TextInput
        style={styles.input}
        placeholder='Ingrese un nick'
        onChangeText={(texto) => setNick(texto)}
        value={nick}
      />
      <TextInput
        style={styles.input}
        placeholder='Edad'
        onChangeText={(texto) => setEdad(texto)}
        value={edad}
      />
      <Button title='Registrarse' onPress={registro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
