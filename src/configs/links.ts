import { IRawLink, rawLinks } from './rawLink'

export interface ILink extends IRawLink {
  id: number
}

export const links: ILink[] = rawLinks.map((l, idx) => ({ ...l, id: idx }))
