 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
  
 
  
  const firebaseConfig = {
    apiKey: "AIzaSyACk0teok-rgKbeYdN_9OVCB3_yKo9DCWM",
    authDomain: "camplete-bd0dc.firebaseapp.com",
    projectId: "camplete-bd0dc",

    storageBucket: "camplete-bd0dc.appspot.com",
    messagingSenderId: "300136877407",
    appId: "1:300136877407:web:7aa09a37d4e90637a77aea",
    measurementId: "G-C83TQQ04CZ"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getFirestore(app)
  const storage = getStorage(app)
  const analytics = getAnalytics(app);
  console.log("auth=>",auth)

  export { auth, db , storage }