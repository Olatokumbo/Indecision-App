import * as firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "basic-df3c6.firebaseapp.com",
    databaseURL: "https://basic-df3c6.firebaseio.com",
    projectId: "basic-df3c6",
    storageBucket: "basic-df3c6.appspot.com",
    messagingSenderId: "240248434942",
    appId: "1:240248434942:web:a8f0648a3e6d93a34a35af",
    measurementId: "G-SKC8EHLJE5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();

// Sets the database
// database.ref().set({
//     name: "David",
//     age: 20,
//     isSingle: true, 
//     technology: {
//         software: {
//             flutter: true,
//             react: true,
//             php: false,
//             node: false
//         }
//     }
// }).then(() => {
//     console.log("Data has added to firebase");
// }).catch((err) => {
//     console.log(err);
// });

// database.ref("technology/hardware").set({
//     arduino: true,
//     raspberryPi: true,
//     orangePi: false,
//     jetson: false
// }).then(() => {
//     console.log("Firebase Update");
// }).catch((err) => {
//     console.log(err);
// });

// Removes entry from the database 
// database.ref("technology/hardware/orangePi")
//     .remove().then(() => {
//         console.log("Entry Deleted");
//     }).catch((err) => {
//         console.log(err);
//     });

// Updates the database
// database.ref().update({
//     name: "David Faith Odesola",
//     isSingle: null,
//     job: "Software Engineer",
//     "technology/hardware/d1mini":  true
// }).then(()=>{
//     console.log("Update Firebase");
// }).catch((err)=>{
//     console.log(err);
// })

// Reads data once
// database.ref().once("value")
// .then((snapshot)=>{
//     const value = snapshot.val();
//     console.log(value);
// }).catch((err)=>{
// console.log(err);
// });

// Subscribes for the data changes
// database.ref().on("value", (snapshot)=>{
//     console.log(snapshot.val());
// });

// Kills all subscriptions
// const onValueChange = database.ref().on("value", (snapshot)=>{
//     console.log(snapshot.val());
// });
// database.ref().off(onValueChange);






//   firebase.analytics();