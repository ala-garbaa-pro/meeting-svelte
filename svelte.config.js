import adapter from '@sveltejs/adapter-node';
import { server } from './src/lib/socket.io.js';

export default {
  kit: {
    adapter: adapter(),
    vite: {
      server: {
        middlewareMode: true,
        attach: server,
      },
    },
  },
};
