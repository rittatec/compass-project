import { View, Text, Button } from 'react-native';

export default function Menu({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Menu</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
