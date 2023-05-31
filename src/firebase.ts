import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Neste caso deixei as keys em aberto para que qualquer um possa testar, mas o correto e adicionar isto em um .env pois é um dado sensivel da aplicação

const firebaseConfig = {
  apiKey: 'AIzaSyC39dDvNWOzw_v5SnjKALzLhAiCz2zccUE',
  authDomain: 'churras-app-2a545.firebaseapp.com',
  projectId: 'churras-app-2a545',
  storageBucket: 'churras-app-2a545.appspot.com',
  messagingSenderId: '885950238961',
  appId: '1:885950238961:web:186a037dae346f60479950',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
