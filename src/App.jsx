import React from 'react'
import useData from './useData'

function App() {
  const data = useData('Oklahoma');

  return (
    <div className="card">
      <p>Your City is : <span>{data?.name}</span></p> and your <p>Current Temperature: {data?.main?.temp} K</p>
    </div>
  )
}

export default App
