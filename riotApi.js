import axios from 'axios';
import { RIOT_API_KEY } from '@env';

// A baseURL que estamos utilizando para acessar o arquivo champions.json da Riot
const baseURL = 'https://ddragon.leagueoflegends.com/cdn/14.22.1/data/pt_BR/champion.json';

// Função para buscar todos os campeões
export const getAllChampions = async () => {
  try {
    const response = await axios.get(`${baseURL}champion.json`);
    return response.data.data;  // Retorna todos os campeões
  } catch (error) {
    console.error("Erro ao buscar a lista de campeões:", error);
    throw new Error('Erro ao buscar a lista de campeões');
  }
};

// Função para buscar informações detalhadas de um campeão
export const getChampionInfo = async (championName) => {
  try {
    const champions = await getAllChampions();  // Obtemos todos os campeões
    // Convertendo o nome do campeão para minúsculo para garantir que a busca seja insensível a maiúsculas
    const champion = champions[championName.toLowerCase()];

    if (!champion) {
      throw new Error('Campeão não encontrado');
    }

    return champion;  // Retorna as informações do campeão encontrado
  } catch (error) {
    console.error("Erro ao buscar informações do campeão:", error);
    throw new Error('Erro ao buscar informações do campeão.');
  }
};
