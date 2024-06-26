import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import CreateUser from './src/screens/CreateUser';
import Login from './src/screens/Login';
import Disciplinas from './src/screens/Disciplinas';
import CadastrarDisciplina from './src/screens/CadastrarDisciplina';
import InfoDisciplina from './src/screens/InfoDisciplina';
import Periodos from './src/screens/Periodos';
import CadastrarPeriodo from './src/screens/CadastrarPeriodo';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOption={{
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#070A52' }
        }}
      >
        <Stack.Screen name='CreateUser' component={CreateUser} options={{ headerShown: false }} />

        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />

        <Stack.Screen name='CadastrarDis' component={CadastrarDisciplina} options={{ headerShown: false }} />

        <Stack.Screen name='CadastrarPeriodo' component={CadastrarPeriodo} options={{ headerShown: false }} />

        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />

        <Stack.Screen name="Drawers" component={Drawers} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
        tabBarActiveBackgroundColor: '#4169E1',
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: '#070A52' },
        headerShown: true,
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#000' }
      }}
    >
      <Tab.Screen name="InfoDisciplina" component={InfoDisciplina}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="car-back" color={color} size={32} />
          ),
          tabBarLabel: () => null
        }}
      />

    </Tab.Navigator>
  )
}

function Drawers() {
  return (
    <Drawer.Navigator initialRouteName="Disciplinas" 
                      screenOptions={{
                        headerShown: true,
                        headerTintColor: '#FFF',
                        headerTitleAlign: 'center',
                        headerStyle: { backgroundColor: '#000' },
                        headerTitleStyle: { fontSize: 40 },
    }}>

      <Drawer.Screen name="Disciplinas" component={Disciplinas} />

      <Drawer.Screen name="Periodos" component={Periodos} />

    </Drawer.Navigator>
  )
}