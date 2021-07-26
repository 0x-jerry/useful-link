import React, { FC } from 'react'
import styles from './KeySymbol.module.css'

export interface KeySymbolOption {
  code?: string
}

export const KeySymbol: FC<KeySymbolOption> = (props) => {
  return <span className={styles.symbol}>{props.code || props.children}</span>
}

export const KeysSymbol: FC<{ keys: string[] | string }> = (props) => {
  const keys = Array.isArray(props.keys)
    ? props.keys
    : props.keys
        .split(/[,+]/g)
        .map((n) => n.trim())
        .filter((n) => !!n)

  const keyComps = keys.map((key, idx) => <KeySymbol code={key} key={idx} />)

  return <>{keyComps}</>
}
