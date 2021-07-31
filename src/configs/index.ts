import { siteConfig } from './site'
import { categories } from './categories'
import { ILink, links } from './links'
import { hasIntersection } from '../utils'
import Fuse from 'fuse.js'

const searchOption: Fuse.IFuseOptions<ILink> = {
  includeScore: true,
  keys: [
    {
      name: 'title',
      weight: 10,
    },
    {
      name: 'desc',
      weight: 3,
    },
    {
      name: 'tags',
      weight: 2,
    },
  ],
}

const fuseCache: Record<string, Fuse<ILink> | null> = {
  all: new Fuse(links, searchOption),
}

const categoryLinksCache: Record<string, ILink[] | null> = {}

export const configs = {
  site: siteConfig,
  links,
  categories,
  getLinks(categoryTitle: string): ILink[] {
    const category = categories.find((t) => t.title === categoryTitle)

    const hit = categoryLinksCache[categoryTitle]

    if (hit) {
      return hit
    }

    if (!category) {
      return []
    }

    if (!category.tags.length) {
      categoryLinksCache[categoryTitle] = links

      return links
    }

    const cLinks = links.filter((l) => hasIntersection(l.tags, category.tags))
    categoryLinksCache[categoryTitle] = cLinks
    return cLinks
  },
  search(key: string, categoryTitle?: string) {
    let fuse = fuseCache.all!

    if (categoryTitle) {
      fuseCache[categoryTitle] ||= new Fuse(this.getLinks(categoryTitle), searchOption)

      fuse = fuseCache[categoryTitle]!
    }

    return fuse.search(key)
  },
}
