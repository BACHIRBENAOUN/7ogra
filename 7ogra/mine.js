const firebaseConfig = {
    apiKey: "AIzaSyCfZ1WqqFvz7i6SuuW4KIHBGc2AFoq0RZw",
    authDomain: "my-points-store.firebaseapp.com",
    projectId: "my-points-store",
    storageBucket: "my-points-store.firebasestorage.app",
    messagingSenderId: "438961787555",
    appId: "1:438961787555:web:4e4caa167f54d8cf7b6516",
    measurementId: "G-K74J0658V9"
  };


   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();
   const storageref = firebaseApp.storage().ref();