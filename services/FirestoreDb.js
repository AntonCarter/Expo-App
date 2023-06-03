// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { firebaseConfig } from '../config/firebase'
// import { collection,addDoc, getDoc, doc, setDoc } from "firebase/firestore";
// import { ref } from "firebase/database"
// // import { query, orderBy, limit, ref, onValue  } from "firebase/firestore"; 

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// class FirestoreDb {
//   constructor() { 

//     if (!FirestoreDb.instance) {
//       FirestoreDb.instance = this
//     }
//     // Initialize object
//     return FirestoreDb.instance
//   }

//   async add(path, document) {
//     console.info('create document at', path);
//     const docRef = await addDoc(collection(db, path), document);
//     console.log("Document written with ID: ", docRef.id);
//     return {id: docRef.id, created: new Date()}
//   }

//   async fetch(path, id) {
//     try {
//       let auth = getAuth();
//       if(!auth.currentUser){
//         console.info('not authenticated for db!');
//         return null;
//       }
//       // console.log(`fetch document ${path}/${id}`);
//       const docRef = doc(db, path, id);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         return data;
//       } else {
//         console.log(`No such document at ${path}/${id}`);
//       }
//     } catch (error) {
//       console.error(`unable to fetch document ${path}/${id}`, error)
//       throw error;
//     }
//   }

//   async fetchAll(path){
//     console.info('db:fetch-all', ref);
//     let queryRef = ref(db, 'sharedUpdates2/')
//     // const dbRef = ref(db, 'sharedUpdates2/');
//     // console.info('dbRef')

//     // var q1 = query(dbRef, orderBy("dateStamp", "desc"), limit(10));
//     // console.info('query',q1)
//     console.info('db:finished', queryRef)
//    // const q = query(ref(db, 'sharedUpdates2/'), orderBy("dateStamp", "desc"), limit(10));
//   }
// }

// const instance = new FirestoreDb();

// export default instance;
