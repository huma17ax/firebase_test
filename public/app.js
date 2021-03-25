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

var database = firebase.database().ref('test/sample')

function sendToDB() {
    const inputbox = document.getElementById('text-input')
    database.push({message: inputbox.value})
    console.log('push')
    inputbox.value = ''
    database.child('test_child').set({testArray: [0,1,2,3,4]})
}

database.on('child_added', function (snapshot) {
    const val = snapshot.val()
    console.log(val)
    const message = document.getElementById('message')
    message.innerHTML = val.message
})

function login() {
    console.log('login')
    firebase.auth().signInAnonymously()
        .then(() => {
            console.log('signin success')
        })
        .catch((error) => {
            console.log(error)
        })
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user)
        const authInfo = document.getElementById('authInfo')
        authInfo.innerHTML = user.uid
    }
})

function logout() {
    console.log('logout')
    firebase.auth().signOut()
        .then(() => {
            console.log('signout success')
            document.getElementById('authInfo').innerHTML = ''
        })
        .catch((error) => {
            console.log(error)
        })
}

function userDelete() {
    console.log('user delete')
    const user = firebase.auth().currentUser
    if (!user) {
        console.log('error!!!  you didnot signin.')
        return
    }
    user.delete()
        .then(() => {
            console.log('user delete success')
            document.getElementById('authInfo').innerHTML = ''
        })
        .catch((error) => {
            console.log(error)
        })
}