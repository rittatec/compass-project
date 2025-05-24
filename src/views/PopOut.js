import { View, Text, Button } from 'react-native';

export default function PopOut({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PopOut de registro com sucesso</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
}
