import { View, Text, Button, StyleSheet } from 'react-native';
import { Link, Stack, useNavigation } from 'expo-router';

export default function Home() {
    const navigation = useNavigation() ;

    const handHidHeader = () => {
        navigation.setOptions({
            headerShown: false,
        });
    };

    const navigationTrue = useNavigation() ;

    const handHeader = () => {
        navigationTrue.setOptions({
            headerShown: true,
        });
    };

    return (
        <View style={styles.container}>

            <Stack.Screen options={{
                ttle: 'Senai',
                headerStyle: {
                    backgroundColor: '#800e13',
                }
            }} />

            <Button title='Ocultar Header' onPress={handHidHeader} color={'#800e13'}/>

            <Button title='Mostrar Header' onPress={handHeader} color={'#800e13'}/>



            <Text>Bem-vindo à tela inicial!</Text>
            <Link href="/sobre">Ir para Sobre</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 1.
    }
})