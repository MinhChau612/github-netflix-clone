// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCKR4JFjsdfmBByGvYaQG0zjjxUYLON_g",
    authDomain: "netflixclone-28acd.firebaseapp.com",
    projectId: "netflixclone-28acd",
    storageBucket: "netflixclone-28acd.appspot.com",
    messagingSenderId: "269319089342",
    appId: "1:269319089342:web:ac66fc16f75070bfa902ef"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password); // Gọi hàm createUserWithEmailAndPassword và chờ kết quả trả về
        const user = res.user; // Lấy đối tượng người dùng từ kết quả trả về
        await addDoc(collection(db, 'users'), {
            uid: user.uid, // Truy cập thuộc tính uid của đối tượng người dùng
            name,
            authProvider: 'local',
            email
        });
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
};


const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, login, signup, logout }