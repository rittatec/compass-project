import { View, Text } from 'react-native';

export default function Sair() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Sair</Text>
      <Text style={{ marginTop: 20 }}>Tela para sair do aplicativo.</Text>
    </View>
  );
}