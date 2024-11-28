import { StyleSheet } from 'react-native';

export const styleImg = StyleSheet.create({
  cartoes: {
    flex: 2,               // O contêiner ocupa todo o espaço disponível
    justifyContent: 'flex-end', // Alinha o conteúdo no final (parte inferior)
    alignItems: 'center',  // Centraliza horizontalmente
    width: '120%',         // A largura ocupa 100% do espaço disponível
    height: '120%',        // A altura ocupa 100% do espaço disponível
    top: 130,                // Remove o deslocamento do topo (se não precisar)
    resizeMode: 'contain', // Ou use 'cover' dependendo da necessidade de manter a proporção
  }
});
