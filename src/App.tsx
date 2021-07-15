import React, { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-red-500">
      <span>{count}</span>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  )
}
