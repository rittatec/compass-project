import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PerfilView() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header com ícones de menu e notificações */}
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="black" />
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <Text style={styles.title}>Perfil</Text>

      {/* Foto de perfil */}
      <View style={styles.fotoCircle} />

      {/* Nome */}
      <Text style={styles.name}>User</Text>

      {/* Opcoes */}
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => navigation.navigate('AtualizarPerfil')}
        >
          <MaterialIcons name="photo-camera" size={24} color="#5A97A7" />
          <Text style={styles.optionText}>Atualizar perfil</Text>
          <Ionicons name="chevron-forward" size={22} color="#bbb" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => navigation.navigate('Orcamento')}
        >
          <MaterialIcons name="history" size={24} color="#5A97A7" />
          <Text style={styles.optionText}>Histórico</Text>
          <Ionicons name="chevron-forward" size={22} color="#bbb" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionItem}
          onPress={() => navigation.navigate('Login')}
        >
          <MaterialIcons name="logout" size={24} color="#5A97A7" />
          <Text style={styles.optionText}>Sair</Text>
          <Ionicons name="chevron-forward" size={22} color="#bbb" style={styles.chevron} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafbfc',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  fotoCircle: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 150,
    backgroundColor: '#ddd',
    marginBottom: 16,
  },
  name: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  options: {
    marginTop: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 14,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  optionText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  chevron: {
    marginLeft: 8,
  },
});