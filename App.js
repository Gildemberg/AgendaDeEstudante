import { StatusBar } from 'expo-status-bar';
import CreateUser from './src/screens/CreateUser';
import Login from './src/screens/Login'
import PaginaInicial from './src/screens/PaginaInicial'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>

        <Stack.Screen name='CreateUser' component={CreateUser} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
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
      <Tab.Screen name="Pagina Inicial" component={PaginaInicial}
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