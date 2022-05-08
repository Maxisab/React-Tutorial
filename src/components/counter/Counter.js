import { useState } from 'react'
import './Counter.css'
import CounterButtons from './CounterButtons'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    let newCount = count
    newCount++
    setCount(newCount)
  }

  const decrement = () => {
    let newCount = count
    newCount--
    setCount(newCount)
  }

  return (
    <div className='counter'>
      {/* PROPS */}
      <CounterButtons count={count} decrement={decrement} increment={increment}/>
    </div>
  )
}
export default Counter