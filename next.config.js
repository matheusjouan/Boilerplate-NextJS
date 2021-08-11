// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
};

module.exports = withPWA({
  // Algumas configurações
  pwa: {
    // Destino para armazenar o pwa (arquivos do serviceworker)
    dest: 'public',
    // Desabilita quando não tiver em produção o pwa
    disable: !isProd,
  },
});
