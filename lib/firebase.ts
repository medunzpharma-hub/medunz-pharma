import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔐 Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCkRIjEJueYmzmKHAMeM4z_ZwTTOyb98UY",
  authDomain: "medunz-pharma-265b0.firebaseapp.com",
  projectId: "medunz-pharma-265b0",
  storageBucket: "medunz-pharma-265b0.firebasestorage.app",
  messagingSenderId: "640465535216",
  appId: "1:640465535216:web:71be454e0dd8e96ff58235",
};

// 🚀 Inicializar Firebase
const app = initializeApp(firebaseConfig);

// 🔥 EXPORTACIÓN CLAVE (esto soluciona tu error)
export const auth = getAuth(app);