import React, { useState } from 'react';
import { TextInput, Button, View, Text, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { getChampionInfo } from './services/riotApi';
import ChampionInfo from './components/ChampionInfo';

export default function App() {
  const [championName, setChampionName] = useState('');
  const [championData, setChampionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const champion = await getChampionInfo(championName);  // Buscando as informações do campeão
      setChampionData(champion);  // Atualizando o estado com os dados do campeão
    } catch (error) {
      setError(error.message);  // Mostra a mensagem de erro
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('./assets/bg-lol.jpg')}  // Caminho da imagem de fundo
      style={styles.container}  // Estilos da imagem de fundo
    >
      {/* Camada de transparência */}
      <View style={styles.overlay}></View>

      <Text style={styles.title}>Buscar Campeão</Text>
      
      <TextInput
        placeholder="Digite o nome do campeão"
        value={championName}
        onChangeText={setChampionName}
        style={styles.input}
      />
      
      <Button title="Buscar" onPress={handleSearch} color="#ffff" />
      
      {loading && <ActivityIndicator size="large" color="#ffff" style={styles.loading} />}
      
      {error && <Text style={styles.error}>{error}</Text>}
      
      {/* Exibir informações do campeão */}
      {championData && <ChampionInfo champion={championData} />}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4e6a54',
    marginBottom: 20,
    zIndex: 1,  
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  loading: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 20,
  },
  Button: {
    color: 'blue',
  },
});
