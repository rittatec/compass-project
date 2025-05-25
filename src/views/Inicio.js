import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#3E5698', '#141C32']}
        style={styles.topSection}
      >
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.WLCText}>Bem vindo ao Compass</Text>
      </LinearGradient>  

      <View>
        <Text style={styles.description}>
          Tenha o seu controle financeiro {'\n'} na palma das suas mãos
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('Cadastrar')}
        >
          <Text style={styles.signupText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topSection: {
  flex: 0.9,
  backgroundColor: '#3E5698, #141C32',
  justifyContent: 'center',
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  alignItems: 'center',
},
  logo: { width: 150, height: 150, marginBottom: 20 },
  WLCText: {
  color: '#fff',
  fontSize: 25,
  fontWeight: 'bold',
},
  description: {
  marginBottom: -60,
  marginTop: 20,
  fontSize: 30,
  fontWeight: 'bold',
  color: '#000',
  textAlign: 'center',
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 100,
},
  loginButton: {
  backgroundColor: '#F5F5F5',
  borderRadius: 20,
  paddingVertical: 30,
  paddingHorizontal: 70,   
},
  signupButton: {
  backgroundColor: '#4153a3',
  borderRadius: 20,
  paddingVertical: 30,
  paddingHorizontal: 50,
},
  signupText: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
},
  logintext: {
  color: '#000',
  fontSize: 20,
  fontWeight: 'bold',
},


});