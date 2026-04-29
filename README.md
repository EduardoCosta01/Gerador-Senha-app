# Bat Pass Generator

Aplicativo mobile feito com **React Native + Expo** para gerar senhas aleatorias e copiar rapidamente para a area de transferencia.

## Sobre o projeto

O objetivo do app e oferecer uma forma simples e rapida de criar senhas com:

- letras maiusculas e minusculas
- numeros
- caracteres especiais

A interface segue uma identidade visual inspirada no tema "Bat", com logo personalizada e acoes diretas para gerar e copiar a senha.

## Funcionalidades

- Geracao de senha com tamanho configuravel (de 4 a 32 caracteres)
- Selecao de tipos de caracteres (a-z, A-Z, 0-9 e especiais)
- Exibicao da senha em campo de texto
- Botao para copiar a senha com `expo-clipboard`
- Feedback visual para sucesso e validacoes (ex.: sem tipo selecionado)
- Layout simples e responsivo para mobile

## Tecnologias utilizadas

- `React Native`
- `Expo`
- `TypeScript`
- `expo-clipboard`
- `expo-status-bar`

## Estrutura do projeto

```bash
src/
  components/
    BatButton/
    BatLogo/
    BatTextInput/
  screens/
    Home/
  services/
    passwordService.ts
```

## Como executar localmente

### Pre-requisitos

- Node.js instalado
- npm ou yarn
- Expo Go (no celular) **ou** emulador Android/iOS configurado

### Passos

1. Instale as dependencias:

```bash
npm install
```

2. Inicie o projeto:

```bash
npm start
```

3. Execute em uma plataforma:

- Android:

```bash
npm run android
```

- iOS:

```bash
npm run ios
```

- Web:

```bash
npm run web
```

## Como usar

1. Abra o app.
2. Defina o tamanho da senha.
3. Ative/desative os tipos de caracteres desejados.
4. Toque em **GENERATE** para criar uma nova senha.
5. Toque em **COPY** para copiar a senha gerada.
6. Cole onde desejar.

## Scripts disponiveis

- `npm start` - inicia o Expo Dev Server
- `npm run android` - abre no Android
- `npm run ios` - abre no iOS
- `npm run web` - abre no navegador



