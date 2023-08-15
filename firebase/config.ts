import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'

const firebaseConfig = {
  apiKey: String(process.env.NEXT_PUBLIC_FIREBAE_API_KEY),
  authDomain: String(process.env.NEXT_PUBLIC_FIREBAE_AUTH_DOMAIN),
  projectId: String(process.env.NEXT_PUBLIC_FIREBAE_PROJECT_ID),
  storageBucket: String(process.env.NEXT_PUBLIC_FIREBAE_STORAGE_BUCKET),
  messagingSenderId: String(
    process.env.NEXT_PUBLIC_FIREBAE_MESSAGING_SENDER_ID
  ),
  appId: String(process.env.NEXT_PUBLIC_FIREBAE_APP_ID),
}

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
