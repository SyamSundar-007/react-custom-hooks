import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useIsOnline } from './customhooks/Online'
import { useMouseposition } from './customhooks/Mouseposition'
import { useInterval } from './customhooks/UseInterval'
import { useDebounce } from './customhooks/Debounce'

function App() {
  const [count, setCount] = useState(0)
  const isOnline  = useIsOnline()
  const mousePositon = useMouseposition()
  const [value, setValue] = useState("")

  const debouncValue = useDebounce(value, 2000)

   useInterval(()=>{
    setCount(c=>c+1)

   }, 1000)

  return ( 
    <div>
      <div style={{
        // position:"relative",
        overflow:"hidden"
      }}>
  <div>{isOnline ? "You are Online": "Your Network lost"}</div>
  <div style={{
    fontSize:"3rem",
    fontWeight:"700"
  }}>Your Mouse position X {mousePositon.x} Y{mousePositon.y}</div>
  <div style={{ 
      width:"32px",
      height:"32px",
      position:"absolute",
      transform:" translate(-50%,-50%)",
      backgroundColor:"white",
      // background: "linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)",
      borderRadius:"900px",
      backfaceVisibility:"hidden",
      cursor:"pointer",
      pointerEvents: "none",
      mixBlendMode:"difference",
      left: `${mousePositon.x}px`, 
      top: `${mousePositon.y}px` 
    }} onmouseenter="cursor.hidden = false" onmouseleave="cursor.hidden=true"></div>

      <div>Time is at {count}</div>
      </div>
  <div>
    <label>Type any Value to see Debounced result Below</label>
    <input onChange={(e)=>{
      setValue(e.target.value)
    }} type='text'></input>
    <div>{debouncValue}</div>
  </div>


  </div>
)
}

export default App
