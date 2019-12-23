import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBVE2AUgXf2YG_pt843aZ1mLrLhLTGTGPs",
    authDomain: "todo-react15.firebaseapp.com",
    databaseURL: "https://todo-react15.firebaseio.com",
    projectId: "todo-react15",
    storageBucket: "todo-react15.appspot.com",
    messagingSenderId: "571600532719",
    appId: "1:571600532719:web:a79e8632c744a16492171a",
    measurementId: "G-519EREJ773"
};
class Firebase{
    constructor(){
        firebase.initializeApp(firebaseConfig);
        this.firestore=firebase.firestore()
        this.auth=firebase.auth();
        // this.auth.signInWithEmailAndPassword
    }
    DoSignInWithEmailAndPassword(email,password){
        return this.auth.signInWithEmailAndPassword(email,password)
    }
}

export default new Firebase();
