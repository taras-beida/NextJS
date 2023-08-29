import { db } from '../config'
import { doc, setDoc } from 'firebase/firestore'

export default async function setData(
  collectionName: string,
  id: string,
  data: any
) {
  let result = null
  let error = null

  try {
    result = await setDoc(doc(db, collectionName, id), data)
  } catch (e) {
    error = e
  }

  return { result, error }
}
