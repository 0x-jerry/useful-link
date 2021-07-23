import React, { FC, useRef } from 'react'
import { useKeydown } from '../hooks/useKeydown'
import { useStore } from '../hooks/useStore'
import { icons } from '../Icons'

export interface SearchProps {}

const useSearchBoxStore = (props: SearchProps) => {
  return useStore(
    { input: '' },
    {
      search(store, value: string) {
        store.input = value
      },
    }
  )
}

export const SearchBox: FC<SearchProps> = (props) => {
  const [data, actions] = useSearchBoxStore(props)
  const inputEl = useRef<HTMLInputElement>(null)

  useKeydown('meta, k', () => {
    inputEl.current?.focus()
  })

  useKeydown('esc', () => {
    inputEl.current?.blur()
  })

  const doSearch = () => {
    console.log('hello search')
  }

  return (
    <>
      <div className="border-b border-gray-300 focus-within:border-bg-gray-500 transition-colors inline-flex items-center hover:border-gray-500">
        <input
          ref={inputEl}
          className="outline-none"
          type="text"
          onChange={(e) => actions.search(e.target.value)}
        />
        <icons.search className="cursor-pointer" onClick={doSearch} />
      </div>
      <div className="search-content">{JSON.stringify(data)}</div>
    </>
  )
}
