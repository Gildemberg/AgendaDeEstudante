import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//STACKS
import CreateUser from './src/screens/CreateUser';
import Login from './src/screens/Login';
import CadastrarDisciplina from './src/screens/CadastrarDisciplina';
import CadastrarPeriodo from './src/screens/CadastrarPeriodo';
import CadastrarAula from './src/screens/CadastrarAula';
//import CadastrarAtividade from './src/screens/CadastrarAtividade';

//DRAWERS
import Disciplinas from './src/screens/Disciplinas';
import Periodos from './src/screens/Periodos';

//TABS
import InfoDisciplina from './src/screens/InfoDisciplina';
import Aulas from './src/screens/Aulas'
//import Atividades from './src/screens/Atividades';


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

        <Stack.Screen name='CadastrarAula' component={CadastrarAula} options={{ headerShown: false }} />

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
        tabBarActiveBackgroundColor: '#424242',
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: '#696969' },
        headerShown: false,
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#000' }
      }}
    >
      <Tab.Screen name="InfoDisciplina" component={InfoDisciplina}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="inbox-full" color={color} size={32} />
          ),
          tabBarLabel: () => null
        }}
      />

      <Tab.Screen name="Aulas" component={Aulas}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="google-classroom" color={color} size={32} />
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