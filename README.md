
# **Riot Champions Search App**

**Riot Champions Search App** é um aplicativo desenvolvido com **React Native** e **Expo** que permite aos jogadores de **League of Legends** buscar informações detalhadas sobre os campeões do jogo, diretamente usando a **API da Riot Games**.

O aplicativo oferece uma interface simples e interativa onde o usuário pode procurar um campeão pelo nome e obter informações sobre ele, como **descrição, imagem, atributos** e muito mais.

---

## 📝 **Funcionalidades**

- **Busca de Campeões**: Pesquise por campeões de League of Legends pelo nome.
- **Informações Detalhadas**: Visualize informações completas do campeão, como descrição, atributos e imagens.
- **Interface Agradável**: Design clean e responsivo com feedbacks de carregamento e mensagens de erro.
- **Imagem de Fundo**: Tela inicial com uma imagem de fundo temática de League of Legends.

---

## 🚀 **Tecnologias Utilizadas**

- **React Native**: Framework para desenvolvimento de aplicativos móveis nativos usando JavaScript e React.
- **Expo**: Plataforma para construção, desenvolvimento e publicação de apps React Native.
- **Axios**: Biblioteca para realizar requisições HTTP e interagir com APIs externas.
- **API da Riot Games**: Usada para obter dados sobre campeões de League of Legends.

---

## 🔧 **Pré-Requisitos**

Antes de começar a usar o projeto, você precisará de algumas ferramentas instaladas:

- **Node.js** (versão 14 ou superior)
- **Expo CLI** (ferramenta de linha de comando do Expo)
- **Git** (para controle de versão e clonagem do repositório)

---

## 🚗 **Configuração do Projeto**

### 1. Clone o repositório

Primeiro, clone o repositório para sua máquina local com o comando:

```bash
git clone https://github.com/lygianegreiros/riot-api-app.git
```

### 2. Instale as dependências

Navegue até a pasta do projeto e instale as dependências com npm ou yarn:

```bash
cd riot-api-app
npm install
```

Ou, se preferir usar o **Yarn**:

```bash
cd riot-api-app
yarn install
```

### 3. Obtenha sua chave de API da Riot Games

O aplicativo precisa de uma **chave de API da Riot Games** para buscar as informações sobre os campeões. Siga as etapas abaixo para obter a sua chave:

1. Acesse o [Portal de Desenvolvedores da Riot Games](https://developer.riotgames.com/) e crie uma conta ou faça login.
2. Crie um novo projeto e obtenha a chave da API.
3. No arquivo `services/riotApi.js`, substitua `'SUA_CHAVE_DE_API'` pela chave que você obteve:

```javascript
const API_KEY = 'SUA_CHAVE_DE_API';  // Substitua pela sua chave de API
```

### 4. Inicie o aplicativo

Agora, você pode iniciar o aplicativo localmente:

```bash
npm start
```

Ou com o **Yarn**:

```bash
yarn start
```

Isso abrirá o **Expo DevTools** no seu navegador. Você pode escanear o QR Code com o **Expo Go** no seu dispositivo móvel para testar o aplicativo diretamente ou rodá-lo em um emulador.

---

## 🧑‍💻 **Estrutura do Projeto**

A estrutura do projeto é organizada da seguinte maneira:

```
riot-api-app/
│
├── assets/              # Arquivos de mídia (ex: imagens)
│   └── bg-lol.jpg       # Imagem de fundo do aplicativo
│
├── components/          # Componentes reutilizáveis
│   └── ChampionInfo.js  # Componente para exibir informações do campeão
│
├── services/            # Lógica de integração com a API
│   └── riotApi.js       # Serviço para fazer requisições à API da Riot Games
│
├── App.js               # Componente principal do aplicativo
│
└── package.json         # Arquivo de configuração do projeto
```

- **assets/**: Contém as imagens do aplicativo, como o fundo e as imagens dos campeões.
- **components/**: Componentes reutilizáveis que gerenciam a exibição das informações do campeão.
- **services/**: Contém a lógica para fazer chamadas à API da Riot Games e processar os dados.
- **App.js**: Componente principal, onde a lógica de busca do campeão e exibição das informações é feita.

---

## 🛠️ **Como Contribuir**

Se você quiser contribuir com melhorias, correções de bugs ou novas funcionalidades, siga os passos abaixo:

1. Faça um **fork** do repositório.
2. Crie uma **branch** para a sua funcionalidade ou correção de bug.
3. Faça as alterações necessárias no código.
4. Envie um **pull request** detalhando as mudanças feitas.

**Exemplo de como criar uma branch**:

```bash
git checkout -b minha-feature
```

Depois, faça as modificações, commit e envie a sua **pull request**!

---

## ⚖️ **Licença**

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 💬 **Agradecimentos**

- Agradecemos à **Riot Games** pela poderosa API que possibilita o acesso aos dados de **League of Legends**.
