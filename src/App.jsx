import { useState } from 'react'
import priceCard from './Components/PlanCard'
import './App.css'

function App() {
  return (
    <>
      <div className="ex">
      {priceCard()}
      </div>
        
    </>
  )
}

export default App
