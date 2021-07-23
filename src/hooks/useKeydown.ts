import { useEffect } from 'react'

interface KeyOption {
  key: KeyboardEvent['code']
  meta?: boolean
  ctrl?: boolean
  alt?: boolean
  shift?: boolean
}

type KeyboardEventListener = (e: KeyboardEvent) => any

const events: Set<KeyboardEventListener> = new Set()

window.addEventListener('keydown', (e) => {
  console.log(e)
  for (const evt of events) {
    evt(e)
  }
})

function _useKeydown(listener: (e: KeyboardEvent) => any, opt: KeyOption) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const hit =
        !!opt.meta === e.metaKey &&
        !!opt.alt === e.altKey &&
        !!opt.shift === e.shiftKey &&
        !!opt.ctrl === e.ctrlKey &&
        opt.key === e.key

      if (hit) {
        listener(e)
      }
    }

    events.add(handler)

    return () => {
      events.delete(handler)
    }
  }, [listener, opt.alt, opt.ctrl, opt.key, opt.meta, opt.shift])
}

const specialKeys = ['meta', 'ctrl', 'alt', 'shift'] as const

type SpecialKey = typeof specialKeys[number]

const isSpecialKey = (key: string): key is SpecialKey => specialKeys.includes(key as SpecialKey)

const shortKeyMap: Record<string, string> = {
  esc: 'Escape',
}

export function useKeydown(key: string, listener: KeyboardEventListener) {
  const opt: KeyOption = {
    key: '',
    meta: false,
    ctrl: false,
    alt: false,
    shift: false,
  }

  const keys = key
    .split(/[+,]/g)
    .filter((n) => !!n.trim())
    .map((n) => {
      const s = n.trim()
      return shortKeyMap[s] || s
    })

  for (const key of keys) {
    if (isSpecialKey(key)) {
      opt[key] = true
    } else {
      opt.key = key
    }
  }

  _useKeydown(listener, opt)
}
