import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Biography from './components/Biography';
import Personnage from './components/Personnage';
import AdaLovelace from './components/AdaLovelace';

const Ada = ()   => <AdaLovelace />
const Perso = () => <Personnage />
const Bio = ()   => <Biography />

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Ada LOVELACE" component={Ada} />
      <Drawer.Screen name="Personnage" component={Perso} />
      <Drawer.Screen name="Biographie" component={Bio} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <Text>Coucou</Text>
      </View>
      <MyDrawer />
    </NavigationContainer>
  );
}
