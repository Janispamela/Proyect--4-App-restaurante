// firebaseUtils.js
import { ref, put } from 'firebase/storage';
import { storage } from './firebase'; // Ajusta la ruta según tu configuración de Firebase

const uploadImage = (file) => {
  const storageRef = ref(storage, 'images/' + file.name);
  const uploadTask = put(storageRef, file);

  uploadTask.on('state_changed', (snapshot) => {
    // Puedes monitorear el progreso aquí
  }, (error) => {
    console.error('Error al subir la imagen', error);
  }, () => {
    console.log('Imagen subida con éxito');
  });
};

export { uploadImage };