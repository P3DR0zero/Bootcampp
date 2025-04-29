import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Configuração do Firebase (substitua pelos valores do seu projeto Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyBzTiypZ_guaCuy69wmdVaaGO3rJXkNwkw",
  authDomain: "proceem-ufrn.firebaseapp.com",
  projectId: "proceem-ufrn",
  storageBucket: "proceem-ufrn.firebasestorage.app",
  messagingSenderId: "1045639558275",
  appId: "1:1045639558275:web:6c5fb6cc17dd52758817b6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Função para autenticar com o Google
export const handleGoogleAuth = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('Usuário autenticado:', user);
    alert(`Bem-vindo, ${user.displayName}!`);
  } catch (error) {
    console.error('Erro ao autenticar com o Google:', error);
    alert('Erro ao autenticar com o Google.');
  }
};