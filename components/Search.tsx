'use client'

import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { createQuery } from '@/utils/query'

const Search = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const [search, setSearch] = useState(searchParams.get('search') || '')

  const createQueryString = useCallback(
    (newParams: { name: string; value: string }[]) =>
      createQuery(newParams, searchParams),
    [searchParams]
  )

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(
        `${pathname}?${createQueryString([
          {
            name: 'search',
            value: search,
          },
        ])}`
      )
    }
  }

  return (
    <div className="w-full">
      <input
        type="text"
        name="first-name"
        id="first-name"
        placeholder="Search"
        autoComplete="given-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={search}
        onChange={handleChanges}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Search
