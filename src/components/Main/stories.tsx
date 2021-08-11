// Tipagens do Storybook
import { Meta, Story } from '@storybook/react/types-6-0';

import { Main } from '.';

// Passa o título do Story do componente e o componente
export default {
  title: 'Main',
  component: Main,
  // Setando os valores iniciais das propriedades no Storybook
  args: {
    title: 'titulo padrão',
    description: 'texto padrão',
  },
} as Meta;

// Criando o story que terá o nome "Basic" na interface do Storybook
// é passado como parâmetro o args (p/ utilizar o Control e mudar props do componente)
// No componente passamos as props como vazio para não dar erro, e repassado o ...args
export const Basic: Story = args => <Main description="" title="" {...args} />;
