## Criar um projeto react native usando Expo, Expo Router e Tailwind

- Usar o comando "npx create-expo-app --template"
- Escolher a opcao "Navigation (TypeScript)
- Colocar o nome do projeto
- Abrir o proejto na IDE

- Apagar as pastas "app", "components" e "constants" que sao geradas de forma automatica
- Apagar a pasta de fonts que fica em "assets"

- Criar o arquivo src --> app e dentro do app criar as telas

- Alterar o tsconfig.json de 

"paths": {
    "@/*": [
       "./*"
    ]
}

para 

"paths": {
    "@/*": [
        "./src/*"
    ]
}

- Instalar o NativeWind

link: https://www.nativewind.dev/

- Esse projeto esta usando o https://www.nativewind.dev/v4/overview

- Usar o comando: npm install nativewind@^4.0.1 react-native-reanimated tailwindcss

- Usar o comando: npx tailwindcss init

- Esse comando gera o arquico tailwind.config.js, dentro dele altere para:
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

- Criar o arquivo "styles" dentro de "src" e dentro de "styles" crie o arquivo "global.css" e colocar:
@tailwind base;
@tailwind components;
@tailwind utilities;

- Criar o arquivo "_layout.tsx" dentro de "src --> app". Esse arquivo sera o arquivo de estrutura de layout da aplicacao

- Importat o arquivo "global.css" dentro do arquivo "_layout.tsx"

- Instalar o GestureHandler para usar navegacoes por gesto:
Link: https://docs.expo.dev/versions/latest/sdk/gesture-handler/
Comando: npx expo install react-native-gesture-handler

- Alterar o arquivo babel.config.js para:

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};

- Criar o arquivo metro.config.js e adicionar:

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './src/styles/global.css' })

- Criar o arquivo "nativewind-env.d.ts" dentro da pasta "src" --> "types" e adicionar:
/// <reference types="nativewind/types" />