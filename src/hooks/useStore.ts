import { useReducer } from 'react'
import clone from 'clone'

type ActionFn<T> = (store: T, ...args: any[]) => T | void

type SliceArray<Arr> = Arr extends [any, ...infer Rest] ? [...Rest] : []

export interface UseStoreOption {
  /**
   * Clone `preState` before every dispatch called
   * @default true
   */
  clone?: boolean
}

/**
 *
 * @example
 *
 * ```ts
 * const initializer: Type = {
 *  count: 0
 * }
 *
 * const actions = {
 *  plus(store) {
 *    store.count ++
 *  },
 *  minus(store, count?:number) {
 *    store.count -= (count ?? 1)
 *  }
 * }
 *
 * const [store, actions] = useStore(initializer, actions)
 *
 * actions.plus()
 * actions.minus()
 * actions.minus(2)
 * ```
 *
 * @param initializer
 * @param actions
 * @returns
 */
export const useStore = <
  Store extends {},
  StoreActions extends { [type: string]: ActionFn<Store> }
>(
  initializer: Store,
  actions: StoreActions,
  options: UseStoreOption = { clone: true }
) => {
  type ActionType = {
    type: string
    payload: any[]
  }

  const reducer = (prevState: any, action: ActionType) => {
    const fn = actions[action.type]

    const cloneState = options.clone ? clone(prevState) : prevState

    const nextState = fn(cloneState, ...action.payload)

    return nextState || (options.clone ? cloneState : { ...cloneState })
  }

  const [state, dispatch] = useReducer(reducer, initializer)

  // @ts-ignore
  const actionMap: {
    [key in keyof StoreActions]: (...payload: SliceArray<Parameters<StoreActions[key]>>) => void
  } = {}

  for (const key of Object.keys(actions)) {
    // @ts-ignore
    actionMap[key] = (...payload: any[]) => dispatch({ type: key, payload })
  }

  return [state, actionMap] as const
}
