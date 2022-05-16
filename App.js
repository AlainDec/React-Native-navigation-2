import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ImageScreen() {
  return (
    <View>
      <Image 
        source={require('./assets/adaptive-icon.png')}
        style={styles.image} />
    </View>
  );
}

function TextScreen() {
  return (
    <View>
      <Text style={styles.text}>Le château de Pierrefonds est un imposant château fort construit à la fin du xive siècle, qui se dresse sur la commune française de Pierrefonds, dans le département de l'Oise, en région des Hauts-de-France, à la lisière sud-est de la forêt de Compiègne, au nord de Paris.
{'\n\n'}
Le château de Pierrefonds présente la plupart des caractéristiques de l'ouvrage défensif du Moyen Âge, en fait une interprétation du style troubadour du xixe siècle, très en vogue au Second Empire dans les classes aisées. Il fut reconstruit à cette époque pour Napoléon III par Viollet-le-Duc, qui y entreprit également d'importants travaux de création de décoration et de mobilier.
{'\n\n'}
Le château fait l’objet d’un classement au titre des monuments historiques par la liste de 18621. Il est géré par le Centre des monuments nationaux3.
{'\n\n'}
Il a également été le lieu de tournage de la série Merlin.</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Text" component={TextScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  text: {
    padding: 20
  },
});
