import React, { FC, useEffect, useState } from 'react'
import { configs } from './configs'
import { ILink } from './configs/links'
import Fuse from 'fuse.js'

const Card: FC<ILink> = (props) => {
  return <div>{props.title}</div>
}

export function App() {
  const [searcher, setSearcher] = useState('')
  const [result, setResult] = useState<Fuse.FuseResult<ILink>[]>([])

  useEffect(() => {
    const r = configs.search(searcher)
    setResult(r)
  }, [searcher])

  return (
    <div className="text-red-500">
      <input type="text" onInput={(e) => setSearcher((e.target as HTMLInputElement).value)} />
      <div>
        {result.map((r) => (
          <Card {...r.item} key={r.item.id}></Card>
        ))}
      </div>
    </div>
  )
}
