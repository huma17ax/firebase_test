// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAH9ssywaJCozKC2R0rc1986yq8dCRVcMQ",
    authDomain: "test-8fa97.firebaseapp.com",
    databaseURL: "https://test-8fa97-default-rtdb.firebaseio.com",
    projectId: "test-8fa97",
    storageBucket: "test-8fa97.appspot.com",
    messagingSenderId: "600001638444",
    appId: "1:600001638444:web:03cab0d172dcc83701e189",
    measurementId: "G-NW1NNQL1Q3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database().ref()

function sendToDB() {
    const inputbox = document.getElementById('text-input')
    database.push({message: inputbox.value})
    console.log('push')
    inputbox.value = ''
}