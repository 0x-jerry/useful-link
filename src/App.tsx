import React, { FC } from 'react'
import { ILink } from './configs/links'
import { SearchBox } from './components/SearchBox'

const Card: FC<ILink> = (props) => {
  return <div>{props.title}</div>
}

export function App() {
  return (
    <div className="p-5">
      <SearchBox />
    </div>
  )
}
