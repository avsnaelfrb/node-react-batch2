import { useState } from 'react';
import './App.css';
import MainCard from './component/card.jsx'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainCard />
    </>
  )
}


