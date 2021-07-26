import React, { FC, useEffect, useState } from 'react'
import { configs } from './configs'
import { ILink } from './configs/links'
import Fuse from 'fuse.js'
import { SearchBox } from './components/SearchBox'
import { KeysSymbol, KeySymbol } from './components/KeySymbol'

const Card: FC<ILink> = (props) => {
  return <div>{props.title}</div>
}

export function App() {
  return (
    <div className="text-red-500">
      <KeysSymbol keys={['⌘', 'K']} />
      <SearchBox />
    </div>
  )
}
