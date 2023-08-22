import { ReadonlyURLSearchParams } from 'next/dist/client/components/navigation'

export const createQuery = (
  newParams: { name: string; value: string }[],
  searchParams: ReadonlyURLSearchParams
) => {
  const params = new URLSearchParams(Array.from(searchParams.entries()))
  newParams.forEach(({ name, value }) => params.set(name, value))
  return params.toString()
}
