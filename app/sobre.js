import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

export default function Sobre() {
  return (
    <View>

      <Stack.Screen options={{
        ttle: 'SOBRE',
        headerStyle: {
          backgroundColor: '#800e13',
        }
      }} />

    </View>
  );
}