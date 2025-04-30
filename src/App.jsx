import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks")

    if (savedClicks !== null) {
      return savedClicks;
    }
    return 0
  })

  useEffect(() => {
    window.localStorage.setItem("saved clicks", clicks);
  }, [clicks]);

  return (
    <>
      <div className="card">
        <button onClick={() => setClicks(clicks + 1)}>
          You clicked {clicks} times
        </button>
        <button onClick={() => setClicks(0)}>Reset</button>
      </div>
      
    </>
  )
}

export default App
