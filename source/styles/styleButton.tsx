import { StyleSheet } from "react-native";

// Definindo as cores e fontes globais
export const colors = {
  primaryBackground: '#7E6FB1', // PANTONE 2655 C (gradiente)
  button: '#8c73e5',            // Cor do botão
  errorText: '#ea534a',         // Cor das mensagens de erro
  defaultText: '#181818',       // Cor das mensagens padrão
  positiveOpinion: '#999999',   // Cor das mensagens de opinião positiva
  white: '#ffffff',             // Cor da fonte
};


export const buttonstyle = StyleSheet.create({
  tituloFont1Normal: {
    fontFamily: 'Roboto_100Thin',
    fontSize: 60,
    color: '#8c73e5',
  },
  tituloFont1Normal1: {
    fontFamily: 'Roboto_100Thin',
    fontSize: 59,
    color: '#8c73e5',
    fontWeight: 'bold',  // Ajuste para garantir negrito
  },
  subTitulo: {
    fontFamily: 'Roboto_100Thin',
    top:10,
    fontSize: 21.5,
    color: '#000000',
    fontWeight: 'bold',  // Ajuste para garantir negrito
    margin: -5,
  },

  buttonInitial: {
    textAlign: 'center',                // Centraliza o texto no botão
    alignSelf: 'center',                // Centraliza o botão na tela
    justifyContent: 'center',           // Centraliza o conteúdo verticalmente
    height: 50,                         // Ajuste a altura do botão
    width: '90%',                       // Botão ocupa 80% da largura da tela
    fontFamily: 'Roboto_700Bold',       // Garantir que a fonte esteja correta
    backgroundColor: colors.button,     // Cor do botão usando as cores globais
    color: '#FFF',                      // Cor do texto
    display: 'flex',                    // Flexbox para alinhamento
    borderRadius: 50,                   // Bordas arredondadas
    padding: 10,                        // Espaçamento interno
    fontWeight: 'bold',                 // Negrito
    marginTop: 20,                      // Distância entre o botão e o conteúdo acima
    marginBottom: 20,                   // Distância da parte inferior
  },

  buttonText: {
    color: '#FFF',                      // Cor do texto dentro do botão
    fontFamily: 'Roboto_700Bold',       // Fonte do texto
    fontSize: 16,                       // Tamanho da fonte do texto
    fontWeight: 'bold',                 // Deixar o texto em negrito
    textAlign: 'center',                // Centraliza o texto
    width: '100%'                       // Garante que o texto ocupe toda a largura disponível
  },
});