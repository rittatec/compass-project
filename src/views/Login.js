import { View, Text, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
}
