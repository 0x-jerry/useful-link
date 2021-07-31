import classNames from 'classnames'
import React, { FC, useMemo, useState } from 'react'
import { ICategory } from '../configs/categories'
import { useKeydown } from '../hooks/useKeydown'
import { KeysSymbol } from './KeySymbol'
import styles from './Tags.module.css'

export interface TagProps<T = unknown> {
  title: string
  value: T
  onClick?: (val: T) => void
  checked?: boolean
  shortcut: string
}

export const Tag: FC<TagProps<any>> = (props) => {
  const style = classNames(styles.tag, props.checked && styles.on)

  return (
    <a className={style} onClick={() => props.onClick?.(props.value)}>
      <KeysSymbol className="mr-1" keys={props.shortcut} />
      <span>{props.title}</span>
    </a>
  )
}

export interface TagsProps {
  tags: ICategory[]
  onClick?: (val: ICategory) => void
  className?: string
}

export const Tags: FC<TagsProps> = (props) => {
  const [selectTitle, setTitle] = useState<string>(props.tags[0].title)

  const select = (val: ICategory) => {
    setTitle(val.title)
    props.onClick?.(val)
  }

  for (let idx = 1; idx <= props.tags.length; idx++) {
    useKeydown(idx.toString(), () => {
      select(props.tags[idx - 1])
    })
  }

  const tags = props.tags.map((tag, idx) => (
    <Tag
      key={tag.title}
      title={tag.title}
      value={tag}
      onClick={select}
      checked={tag.title === selectTitle}
      shortcut={(idx + 1).toString()}
    />
  ))

  return <span className={classNames('inline-block', props.className)}>{tags}</span>
}
