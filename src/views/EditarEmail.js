import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function EditarEmail() {
  const route = useRoute();
  const navigation = useNavigation();
  const [novoEmail, setNovoEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(true);

  const salvar = () => {
    if (route.params?.setEmail) {
      route.params.setEmail(novoEmail);
    }
    setModalVisible(false);
    navigation.goBack();
  };

  const cancelar = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="slide"
      onRequestClose={cancelar}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Editar Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={novoEmail}
            onChangeText={setNovoEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={cancelar}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={salvar}>
              <Text style={styles.saveText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 28,
    width: '85%',
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#222',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 28,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  cancelButton: {
    marginRight: 24,
  },
  cancelText: {
    color: '#888',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {},
  saveText: {
    color: '#5A97A7',
    fontWeight: 'bold',
    fontSize: 16,
  },
});