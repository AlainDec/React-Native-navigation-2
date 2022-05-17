import { Image, View, Text, StyleSheet, Button } from 'react-native';

const AdaLovelace = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/ada-lovelace.png')}
                style={styles.image}
            />
            <View>
                <Text style={styles.text}>Ada Lovelace</Text>
                <Button 
                    onPress={() => navigation.navigate('Home')}
                    title="retour vers l'accueil"
                />
            </View>
        </View>
    );
}

export default AdaLovelace;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        alignItems: 'center'
    },
    text: {
        padding: 20,
    },
    image: {
        width: '60%',
        height: 400,
    }
});