import { View, Text, Button } from 'react-native';

export default function Cadastrar({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cadastre-se</Text>
      <Button title="Registre-se" onPress={() => navigation.navigate('PopOut')} />
    </View>
  );
}
