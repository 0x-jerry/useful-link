import React, { FC, useRef } from 'react'
import { useKeydown } from '../hooks/useKeydown'
import { isWin } from '../utils'
import { KeysSymbol } from './KeySymbol'
import styles from './SearchBox.module.css'

export interface SearchProps {
  doSearch: (val: string) => any
  clear?: (val: '') => any
}
export const SearchBox: FC<SearchProps> = (props) => {
  const inputEl = useRef<HTMLInputElement>(null)

  useKeydown('meta, k | ctrl, k', (e) => {
    e.preventDefault()
    inputEl.current?.focus()
  })

  useKeydown('esc', () => {
    inputEl.current?.blur()
    props.clear?.('')
  })

  const shortcut = isWin() ? 'CTRL K' : '⌘ K'

  return (
    <div className={styles.searchBox}>
      <input
        ref={inputEl}
        className="outline-none"
        type="text"
        onChange={(e) => props.doSearch?.(e.target.value)}
      />
      <KeysSymbol className="pl-1" keys={shortcut} />
    </div>
  )
}
