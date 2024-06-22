import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any>; 
};

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {

  const goToLogin = () => {
    navigation.navigate('Login'); 
  };

  const goToRegistro = () => {
    navigation.navigate('Registro'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.studentName}>Anthony Franco</Text>
      <Image
        source={require('../assets/gym.jpg')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToRegistro}>
        <Text style={styles.buttonText}>Registro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentName: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, 
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    color: "green"
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default WelcomeScreen;
