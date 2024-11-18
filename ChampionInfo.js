import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ChampionInfo = ({ champion }) => {
  if (!champion) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.championName}>{champion.name}</Text>
      <Text style={styles.championTitle}>{champion.title}</Text>
      <Image
        source={{ uri: 'https://ddragon.leagueoflegends.com/cdn/14.22.1/data/pt_BR/champion.json' }}
        style={styles.championImage}
      />
      <Text style={styles.championDescription}>{champion.blurb}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  championName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  championTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  championImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  championDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});

export default ChampionInfo;
