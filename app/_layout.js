import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ 
            headerShown: true,
            headerStyle: {
                backgroundColor: '#3b5998',
            }, 
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name="index" options={{ title: 'SENAI'}}/>
            <Stack.Screen name="about" options={{ title: 'SOBRE'}}/>
        </Stack>
    )
    }