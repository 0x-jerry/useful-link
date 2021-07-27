import React, { FC } from 'react'
import { ILink } from '../configs/links'
import { icons } from '../Icons'
import styles from './LinkCard.module.css'

export interface LinkCardProps extends ILink {
  className?: string
}

const LinkTags: FC<LinkCardProps> = (props) => {
  const links = Object.entries(props.links).map(([key, link]) => {
    // @ts-ignore
    const render = icons[key]

    return (
      <a
        className={styles.link}
        target="_blank"
        title={link}
        href={link}
        rel="noreferrer"
        key={key}
      >
        {render?.({})}
      </a>
    )
  })

  const tags = props.tags.map((tag) => {
    const render = icons[tag]

    return (
      render && (
        <span className={styles.tag} key={tag} title={tag}>
          {render({})}
        </span>
      )
    )
  })

  return (
    <div className="flex">
      <div className="flex">{tags}</div>
      <div className="flex flex-1 justify-end">{links}</div>
    </div>
  )
}

export const LinkCard: FC<LinkCardProps> = (props) => {
  const { className, ...link } = props

  const classes = [styles.cardBox, className || ''].join(' ')

  return (
    <div className={classes}>
      <LinkTags {...link} />
      <div className="text-lg">{props.title}</div>
      <div className="text-gray-500">{props.desc}</div>
    </div>
  )
}
