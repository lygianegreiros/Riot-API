module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        'babel-preset-expo', // Necessário para projetos Expo
        '@babel/preset-react' // Adiciona suporte ao JSX
      ],
      plugins: [
        ['module:react-native-dotenv'] // Caso você esteja usando variáveis de ambiente
      ],
    };
  };