import {firebaseConfig} from "./config"
import { initializeApp } from "firebase/app";
import { getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    sendEmailVerification, 
    onAuthStateChanged, 
    signOut} from "firebase/auth";

import { getFirestore, 
    collection, 
    addDoc, 
    getDocs,  
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    updateDoc, } from 'firebase/firestore';
import { async } from "regenerator-runtime";

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();


let currentUserName = '';
let currentUserImage = '';
let currentUserUid ='';
let currentUserEmail ='';

// ---------- Inicio de sesión con Google ----------

export   const LoginWithGoogle= async(navigateTo)=> {
    try {
     console.log("Inicio Async Function");
     const result = await signInWithPopup(auth, provider);
     const user = result.user;
     currentUserName = user.displayName;    
     currentUserImage = user.photoURL;    
     currentUserUid = user.uid   
     currentUserEmail = user.email
        

     if (user !==null) {
        // El usuario está autenticado
        console.log("Nombre de usuario:", currentUserName);
        console.log("Correo electrónico:", currentUserEmail);
        console.log("URL de la foto de perfil:", currentUserImage);
        console.log("ID del usuario:", currentUserUid); 
        userDataGoogle(currentUserName,currentUserImage,currentUserEmail,currentUserUid);

     } else {
        // No hay usuario autenticado
        console.log("No hay usuario autenticado.");
     }

     navigateTo('/wall');

     return currentUserImage;
  } catch (error) {
     console.error('Error de autenticación:', error);
  }
}

// guardando datos de usuario GOOGLE-Email
export const userDataGoogle = async (name,photo,email,uid) => {
  const user = auth.currentUser;
  const userName = user.displayName;
 
    const docRef = await addDoc(collection(db, "Google"), {
      name,
      photo,
      email,
      uid
    });  
}; 


// ---------- Enviar correo de verificación ----------
async function emailVerification() {
   const user = auth.currentUser;
   try {
      // Verificar si el usuario está autenticado y el correo electrónico no ha sido verificado aún
   if (user && !user.emailVerified) {
        // Enviar el correo electrónico de verificación
      await sendEmailVerification(user);
      alert('Se ha enviado un mensaje de verificación a tu correo electrónico, por favor revisalo y verifica tu registro. Luego inicia sesión.');

      console.log("Correo de verificación enviado a:", user.email);
   } else {
      console.log("No se puede enviar el correo de verificación.");
      alert('No se puede enviar el correo de verificación. Asegúrate de que el usuario esté autenticado y el correo electrónico no haya sido verificado aún.');
   }
   } catch (error) {
   console.error("Error al enviar el correo de verificación:", error);
   }
}

// ---------- Creación de cuenta ----------
export const registerUser = (navigateTo,email,password,confirmPassword) => { 
   if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
   }

   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredentials) => {

      console.log("CREANDO.....");

      navigateTo('/');
      emailVerification();
   })
   .catch((error) => {
      if (error.code === 'auth/invalid-email') alert('Por favor ingresa un email válido');
      if (error.code === 'auth/weak-password') alert('La contraseña es dmasiado débil');
      if (error.code === 'auth/email-already-in-use') alert('El email ya se encuentra asociado a una cuenta');

      console.log('no se puede iniciar')
   });
};


// ---------- Inicio de sesión con Email y Contraseña ----------
export const loginEmailPassword = (navigateTo) => {
  
   const emailLogin = document.getElementById('inputEmail').value;
   const passwordLogin = document.getElementById('inputPassword').value;

 
   signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
   .then((userCredential) => {
      // Inicio de sesión exitoso, puedes obtener el usuario y realizar acciones adicionales
      const user = userCredential.user;

      navigateTo('/wall')

      console.log('Inicio de sesión exitoso:', user);
   })
   .catch((error) => {
      // Ocurrió un error durante el inicio de sesión
      const errorCode = error.code;
      const errorMessage = error.message;
      const noteEyP = document.getElementById('msg_Email');
      console.error('Error de inicio de sesión:', errorCode, errorMessage);
      if (errorCode === 'auth/user-not-found') {
         noteEyP.innerHTML = 'Usuario no registrado'
         alert('usuario no registrado');
      } else if (errorCode === 'auth/wrong-password') {
         noteEyP.innerHTML = 'Contraseña incorrecta'
         alert('Contraseña incorrecta');
      }
   }); 
}




// Almacenar post

export const savePost = (description,nameUser,imageUser,likeCounter) => addDoc(collection(db, "Posts"), { description , nameUser, imageUser,likeCounter});

export const getUserName = () => getDocs(collection(db,'Google'));

export const onGetPosts = (callback) => onSnapshot(collection(db,'Posts'),callback);

export const onGetUserData = (callback) => onSnapshot(collection(db,'Google'),callback);

export const deleteUser = id => deleteDoc(doc(db,'Google',id));

export const deletePost = id => deleteDoc(doc(db,'Posts',id));

export const getPost = id => getDoc(doc(db,'Posts',id));

export const updatePost = (id,newfields) => updateDoc(doc(db,'Posts',id), newfields);

export const updateUser = (id,newfields) => updateDoc(doc(db,'Google',id), newfields);