import { db } from '../config'
import { collection, getDocs, or, query, where } from 'firebase/firestore'

export default async function z2getCollection(
  collectionName: string,
  search: string = ''
) {
  const collectionRef = collection(db, collectionName)

  let q = query(collectionRef)

  if (search.length) {
    q = query(
      collectionRef,
      or(where('name', '==', search), where('lowercaseName', '==', search))
    )
  }

  let result = null
  let error = null

  try {
    result = await getDocs(q)
  } catch (e) {
    error = e
  }

  return { result, error }
}
