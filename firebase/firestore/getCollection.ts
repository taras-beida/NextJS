import { db } from '../config'
import {
  collection,
  getDocs,
  or,
  orderBy,
  query,
  where,
} from 'firebase/firestore'

export default async function z2getCollection(
  collectionName: string,
  search: string = '',
  sorting?: {
    sortBy: string
    sortOrder: 'asc' | 'desc'
  }
) {
  const collectionRef = collection(db, collectionName)

  let q = query(collectionRef)

  if (search.length) {
    q = query(
      q,
      or(where('name', '==', search), where('lowercaseName', '==', search))
    )
  }

  if (sorting && sorting.sortBy.length) {
    q = query(q, orderBy(sorting.sortBy, sorting.sortOrder))
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
