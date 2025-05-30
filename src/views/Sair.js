import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sair() {
  const navigation = useNavigation();

  const handleSair = () => {
    navigation.navigate('Login');
  };

  const handleVoltar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sair do perfil</Text>

      <View style={styles.fotoCircle} />

      <Text style={styles.name}>User</Text>

      <Text style={styles.question}>Deseja sair da sua{'\n'}conta Compass?</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleSair}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleVoltar}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfc',
    paddingHorizontal: 36, 
    paddingTop: 60,        
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 90, 
    color: '#222',
  },
  fotoCircle: {
    width: 160,   
    height: 160,  
    borderRadius: 90,
    backgroundColor: '#ddd',
    alignSelf: 'center',
    marginBottom: 24, 
  },
  name: {
    alignSelf: 'center',
    fontSize: 22, 
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#222',
  },
  question: {
    fontSize: 20, // maior
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40, 
    color: '#222',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 24, 
  },
  button: {
    backgroundColor: '#AFCBFF',
    paddingVertical: 14, 
    paddingHorizontal: 40, 
    borderRadius: 24,
    marginHorizontal: 12,
  },
  buttonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18, 
  },
});