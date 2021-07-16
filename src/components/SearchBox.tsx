import React, { FC } from 'react'
import { useStore } from '../hooks/useStore'

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

  return (
    <div className="search-box">
      <input type="text" onChange={(e) => actions.search(e.target.value)} />
      <div className="search-content">{JSON.stringify(data)}</div>
    </div>
  )
}
