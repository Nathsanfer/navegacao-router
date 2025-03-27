import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { Link, Stack, useNavigation } from 'expo-router';
import { useState } from 'react';

export default function Home() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        Alert.alert('Formulário Enviado', `Nome: ${name}\nEmail: ${email}`);
    };

    const handHidHeader = () => {
        navigation.setOptions({
            headerShown: false,
        });
    };

    const handHeader = () => {
        navigation.setOptions({
            headerShown: true,
        });
    };

    return (
        <View style={styles.container}>
            <Stack.Screen 
                options={{
                    title: 'Senai',
                    headerRight: () => (
                        <Button
                            onPress={() => alert('Olá, aula de Mobile!')}
                            title="Info"
                            color="#000"
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#800e13',
                    },
                }} 
            />

            <Button title="Ocultar Header" onPress={handHidHeader} color="#800e13" />
            <Button title="Mostrar Header" onPress={handHeader} color="#800e13" />

            <Text style={styles.title}>Bem-vindo à tela inicial!</Text>
            <Link href="/sobre">Ir para Sobre</Link>

            {/* Formulário */}
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <Button title="Enviar" onPress={handleSubmit} color="#800e13" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
        marginBottom: 15,
    },
});