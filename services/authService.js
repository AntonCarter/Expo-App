// import { initializeAuth, getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
// import { initializeApp, getApp, getApps } from "firebase/app"
// import UserProfileService from "./UserProfileService";
// import { firebaseConfig } from '../config/firebase'
// import { getReactNativePersistence } from "firebase/auth/react-native"
// import AsyncStorage from "@react-native-async-storage/async-storage"
// let authInitialzed = false;
// let app = initializeApp(firebaseConfig);
// let auth = null;

// if(!authInitialzed){
//     try {
//         auth = initializeAuth(app, {
//             persistence: getReactNativePersistence(AsyncStorage),
//         });
//     } catch (error) {
//         console.info(error);   
//         authInitialzed = true;
//     }

    
// }

// // if (!getApps().length) {
// //     try {
// //         console.info('initialze auth in authService');
// //         app = initializeApp(firebaseConfig);
// //         auth = initializeAuth(app, {
// //             persistence: getReactNativePersistence(AsyncStorage),
// //         });
// //     } catch (error) {
// //         console.log("Error initializing app: " + error);
// //     }
// // } else {
// //     console.info('cached auth in authService');
// //     app = getApp();
// //     auth = getAuth(app);
// // }

// const userSerice = new UserProfileService();

// export const signOutUser = () => {
//     return new Promise((resolve, reject) => {
//         return signOut(auth)
//             .then(r => {
//                 console.info('signed out of firebase');
//                 resolve();
//             })
//             .catch(r => {
//                 console.error('unable to sign out', r);
//                 reject(r);
//             });
//     });
// }

// export const getFirebaseAuth = () => {
//     return auth;
// }

// // return signOut(auth)
// //         .then(r => {
// //             console.info('signed out of firebase');
// //             resolve();
// //         })
// //         .catch(r => {
// //             console.error('unable to sign out', r);
// //             reject(r);
// //     });

// export const login = (email, password) => {
//     return new Promise((resolve, reject) => {
//         console.info('firebase sign in starting', email, password)

//         return signInWithEmailAndPassword(auth, email, password)
//             .then(user => {
//                 if (user) {
//                     console.info('logged in', user.user.uid)
//                     userSerice.fetch(user.user.uid)
//                         .then(profile => {
//                             user.profile = profile
//                             resolve(user);
//                         })
//                         .catch((error) => {
//                             console.error('firebase user error', error);
//                         });

//                 } else {
//                     console.info('logged out')
//                     resolve(null);
//                 }
//             })
//             .catch((error) => {
//                 console.error(error.message)
//                 if (error.message.includes("auth/invalid-email")) {
//                     reject(new Error('please enter a valid email address'))
//                 }
//                 else {
//                     reject(new Error('unable to sign in'))
//                 }
//             });
//     })
// }

// export const forgot = (email) => {
//     return new Promise((resolve, reject) => {
//         console.info('firebase request password reset', email)

//         return sendPasswordResetEmail(auth, email)
//             .then(user => {
//                 console.info('sent password reset email', user)
//                 resolve(user);
//             })
//             .catch((error) => {
//                 reject(new Error('unable to reset password'))
//             });
//     })
// }