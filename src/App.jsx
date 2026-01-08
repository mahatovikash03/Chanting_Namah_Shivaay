import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  // default background color
  const [bgColor, setBgColor] = useState("#afe1ecff");

  // function to change background
  const changeBackground = (color) => {
    setBgColor(color);
  };
  return (
    <>
      <div className="app"
      style={{ backgroundColor: bgColor }}>
      <h1>Chanting Namah Shivaay</h1>
      <img src="mahakal1.png" 
      alt="" className='image'/>
      <div className="card">
        <button className="but" onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Say "Namah Shivaay" and click on count to check how many times you chant "Namah Shivaay"
        </p>
      </div>
      <br />
      <p><b>Change Your Background-Color</b></p>
      <p><b>Choose from the available colors below to enhance your experience.</b></p>
      <div className="color-footer">
        <div className="box" onClick={() => changeBackground("#FF0000")}>Red</div>
        <div className="box" onClick={() => changeBackground("#00D4FF")}>Blue</div>
        <div className="box" onClick={() => changeBackground("#EEAECA")}>Vanila</div>
        <div className="box" onClick={() => changeBackground("#F7AB07")}>Yellow</div>
        <div className="box" onClick={() => changeBackground("#9400F7")}>Violet</div>
        <div className="box" onClick={() => changeBackground("#E4B5FF")}>L-Violet</div>
        <div className="box" onClick={() => changeBackground("#4B5B99")}>D-Gray</div>
        <div className="box" onClick={() => changeBackground("#57C785")}>Green</div>
        <div className="box" onClick={() => changeBackground("#008236")}>D-Green</div>
        <div className="box" onClick={() => changeBackground("#4D2A39")}>Brown</div>
      </div>
    </div>
    </>
  )
}

export default App
