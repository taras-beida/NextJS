import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'

const firebaseConfig = {
  apiKey: process.env.FIREBAE_API_KEY,
  authDomain: process.env.FIREBAE_AUTH_DOMAIN,
  projectId: process.env.FIREBAE_PROJECT_ID,
  storageBucket: process.env.FIREBAE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBAE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBAE_APP_ID,
}

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
