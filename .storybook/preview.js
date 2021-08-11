import GlobalStyles from '../src/styles/global';

// Criando um decorators que englobará todos componentes do Storybook
// Nesse caso, vai englobar com os estilo globais da aplicação
export const decorators = [
  (Story) => (
    <>
      {/* Arquivos/CSS que querempos que o StoryBoos leiam */}
      <GlobalStyles />
      {/* Story => Todo os componentes da aplicação */}
      <Story />
    </>
  ),
];
