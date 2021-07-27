import React, { FC } from 'react'
import styles from './KeySymbol.module.css'

export interface KeySymbolOption {
  code?: string
}

export const KeySymbol: FC<KeySymbolOption> = (props) => {
  return <span className={styles.symbol}>{props.code || props.children}</span>
}

export interface KeysSymbolOption {
  keys: string | string[]
  className?: string
}

export const KeysSymbol: FC<KeysSymbolOption> = (props) => {
  const keys = Array.isArray(props.keys)
    ? props.keys
    : props.keys
        .split(/[,+\s]/g)
        .map((n) => n.trim())
        .filter((n) => !!n)

  const keyComps = keys.map((key, idx) => <KeySymbol code={key} key={idx} />)

  return <span className={props.className}>{keyComps}</span>
}
