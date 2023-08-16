import { db } from '../config'
import { collection, getDocs } from 'firebase/firestore'

export default async function getCollection(collectionName: string) {
  let collectionRef = collection(db, collectionName)

  let result = null
  let error = null

  try {
    result = await getDocs(collectionRef)
  } catch (e) {
    error = e
  }

  return { result, error }
}
