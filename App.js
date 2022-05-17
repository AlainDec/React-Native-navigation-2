import 'react-native-gesture-handler'; // A placer en premier sinon ca crash
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Biography from './components/Biography';
import Personnage from './components/Personnage';
import AdaLovelace from './components/AdaLovelace';

const AdaScreen = ()   => <AdaLovelace />
const PersoScreen = () => <Personnage />
const BioScreen = ()   => <Biography />

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Biographie de Ada Lovelace"
        onPress={() => navigation.navigate('Ada LOVELACE')}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  // <Drawer.Navigator useLegacyImplementation>
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Ada LOVELACE" component={AdaScreen} />
      <Drawer.Screen name="Personnage" component={PersoScreen} />
      <Drawer.Screen name="Biographie" component={BioScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator useLegacyImplementation
        initialRouteName="Root"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Root" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
