import { useState } from "react"
import "./App.css"
import LightToggle from "./components/LightToggle"
import LottoNumbers from "./components/LottoNumbers"
import ClickCounter from "./components/ClickCounter"
import Hola from "./components/Hola"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [count, setCount] = useState(0)
  const [lottoNumber, setLottoNumber] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7,
  ])
  const [holaa,setHola]=useState("")
  const handleLightToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleCounter = () => {
    setCount(count => count + 1)
  }

  const handleLottoNumbers = () => {
    const randomNumbers = Array.from(
      { length: 7 },
      () => Math.floor(Math.random() * 50) + 1
    )
    setLottoNumber(randomNumbers)
  }

  const handleHola = () => {
    setHola("Hola Elmer")
  }

  return (
    <>
      <h2>Light Toggle</h2>
      <LightToggle onLightToggle={handleLightToggle}></LightToggle>
      <div
        style={
          isDarkMode
            ? {
                backgroundColor: "white",
                color: "#333",
              }
            : {
                backgroundColor: "#242424",
                color: "white",
              }
        }
      >
        Change this background color using the style attribute
      </div>
      <h2>Lotto Numbers</h2>
      <LottoNumbers onLottoNumbers={handleLottoNumbers} />
      <div className="output">{lottoNumber.join(" ,")}</div>

      <h2>Click Counter</h2>
      <ClickCounter onCounter={handleCounter} />
      <div className="output">{count}</div>

      <h2>Greetings:</h2>
      <Hola onHola={handleHola} />
      <div className="output">{holaa}</div>
    </>
  )
}

export default App