import { db } from '../config'
import { doc, updateDoc } from 'firebase/firestore'

export default async function updateData(
  collection: string,
  id: string,
  data: any
) {
  let result = null
  let error = null

  try {
    result = await updateDoc(doc(db, collection, id), data)
  } catch (e) {
    error = e
  }

  return { result, error }
}
