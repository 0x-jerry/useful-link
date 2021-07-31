import React from 'react'
import { ILink } from './configs/links'
import { SearchBox } from './components/SearchBox'
import { configs } from './configs'
import { useStore } from './hooks/useStore'
import { LinkCard } from './components/LinkCard'
import { Tags } from './components/Tags'
import { ICategory } from './configs/categories'

function useAppStore() {
  return useStore(
    {
      links: configs.links,
      currentCategory: configs.categories[0],
    },
    {
      updateLinks(store, links: ILink[]) {
        store.links = links
      },
      setCategory(store, current: ICategory) {
        store.currentCategory = current

        const links = configs.getLinks(current.title)
        store.links = links
      },
      updateCategory(store) {
        const category = store.currentCategory

        const links = configs.getLinks(category.title)
        store.links = links
      },
    }
  )
}

export function App() {
  const [data, actions] = useAppStore()

  const search = (val: string) => {
    if (!val) {
      actions.updateCategory()
      return
    }

    const res = configs.search(val, data.currentCategory.title)
    actions.updateLinks(res.map((n) => n.item))
  }

  const selectCategory = (category: ICategory) => {
    actions.setCategory(category)
  }

  const cards = data.links.map((link) => <LinkCard className="m-2" {...link} key={link.id} />)

  return (
    <div className="p-5">
      <div className="flex">
        <Tags className="mr-10" tags={configs.categories} onClick={selectCategory} />
        <SearchBox clearOnEsc doSearch={search} clear={search} />
      </div>
      <div className="grid grid-cols-4 py-2">{cards}</div>
    </div>
  )
}
