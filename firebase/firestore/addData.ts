import { db } from '../config'
import { addDoc, collection } from 'firebase/firestore'

export default async function addData(collectionName: string, data: any) {
  let result = null
  let error = null

  try {
    result = await addDoc(collection(db, collectionName), data)
  } catch (e) {
    error = e
  }

  return { result, error }
}
