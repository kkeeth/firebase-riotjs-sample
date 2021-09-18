import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERId,
  appId: process.env.APPID,
}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
export const messagesRef = database.ref('messages')

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text })
}