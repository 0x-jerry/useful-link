import { useEffect } from 'react'

interface KeyOption {
  key: KeyboardEvent['code']
  meta?: boolean
  ctrl?: boolean
  alt?: boolean
  shift?: boolean
}

export function useKeydown(listener: (e: KeyboardEvent) => any, opt: KeyOption) {
  useEffect(() => {
    console.log('hello')
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

    window.addEventListener('keydown', handler)

    return () => {
      console.log('hello end')
      window.removeEventListener('keydown', handler)
    }
  }, [listener, opt.alt, opt.ctrl, opt.key, opt.meta, opt.shift])
}
