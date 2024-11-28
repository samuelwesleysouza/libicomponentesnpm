import { StyleSheet } from "react-native";  

export const styleLabelTextInput = StyleSheet.create({
        label: {
          position: 'absolute',
          left: 20,
          color: '#111111'
      
        },
        input: {
          top: 100,  // Ajustando a posição do campo de texto para que fique alinhado com o rótulo
          width: '80%',  // Ajuste da largura do campo de texto
          height: 40,  // Altura do campo de texto
          borderBottomWidth: 1,  // Apenas uma linha na parte inferior do campo de texto
          borderBottomColor: '#000',  // Cor da linha
          paddingLeft: 10,  // Espaçamento interno à esquerda
          fontSize: 16,
          marginBottom: 20,  // Espaço abaixo do campo de texto
        }
      });
      
