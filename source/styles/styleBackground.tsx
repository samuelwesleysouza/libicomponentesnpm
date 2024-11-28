import { StyleSheet } from 'react-native';

// Estilos do contêiner
export const styleBackground = StyleSheet.create({
  containerBackgroundWhite: {
    flex: 1,               // O contêiner ocupa todo o espaço disponível
    justifyContent: 'flex-end', // Alinha o conteúdo no final (parte inferior)
    alignItems: 'center',  // Centraliza horizontalmente
    backgroundColor: '#efefef', // Cor do fundo, ajuste conforme necessário
  },
   containerBackgroundPurple: {
      flex: 1,               // O contêiner ocupa todo o espaço disponível
      justifyContent: 'flex-end', // Alinha o conteúdo no final (parte inferior)
      alignItems: 'center',  // Centraliza horizontalmente
    backgroundColor: '#8c73e5',
     },
});
