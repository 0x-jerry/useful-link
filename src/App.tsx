import React from 'react'
import { ILink } from './configs/links'
import { SearchBox } from './components/SearchBox'
import { configs } from './configs'
import { useStore } from './hooks/useStore'
import { LinkCard } from './components/LinkCard'

function useAppStore() {
  return useStore(
    {
      links: configs.links,
    },
    {
      updateLinks(store, links: ILink[]) {
        store.links = links
      },
    }
  )
}

export function App() {
  const [data, actions] = useAppStore()

  const search = (val: string) => {
    if (!val) {
      actions.updateLinks(configs.links)
      return
    }

    const res = configs.search(val)
    actions.updateLinks(res.map((n) => n.item))
  }

  const cards = data.links.map((link) => <LinkCard className="m-2" {...link} key={link.id} />)

  return (
    <div className="p-5">
      <SearchBox clearOnEsc doSearch={search} clear={search} />
      <div className="grid grid-cols-4 py-2">{cards}</div>
    </div>
  )
}
