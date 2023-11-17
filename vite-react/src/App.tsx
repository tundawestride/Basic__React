import React, { useState } from 'react'
import './App.css'
import WScounter from './components/WScounter/WScounter'
import WSEffectDemo from './components/WSEffectDemo.tsx/WSEffectDemo'

type Props = {}

export default function App({ }: Props) {

  const [count, setCount] = useState(0)

  return (
    <div>App WS
      <WScounter />
      <br></br>
      <hr></hr>
      <br></br>
      <WSEffectDemo />
    </div>
  )
}