import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  // Dodaj ostale config vrednosti
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
