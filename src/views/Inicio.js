import { View, Text, Button } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>INICIO</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Cadastre-se" onPress={() => navigation.navigate('Cadastrar')} />
    </View>
  );
}
