import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import RegistroScreen from '../Screens/RegistroScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import HistorialScreen from '../Screens/HistorialScreen';
import PerfilScreen from '../Screens/PerfilScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
      <Stack.Screen name="Drawer_Welcome" component={MyDrawer} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Historial" component={HistorialScreen} />
        <Drawer.Screen name='Perfil' component={PerfilScreen}/>
    </Drawer.Navigator>
  );
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}