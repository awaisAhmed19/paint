import { useState } from 'react'
import './assets/styles/root.css'
import './assets/styles/container1.css'
import './assets/styles/container2.css'
import './assets/styles/container3.css'
import './assets/styles/container4.css'


import ToolButton from './components/ToolButton.jsx'
import MenuBar from './MenuBar.jsx';
import CanvasContainer from './CanvasContainer.jsx';


function PalleteContainer(){
return(<>
    <div className="container-3">
      <div className="pallete-preview">
        <div
          className="selectedcolor"
          id="selected-color"
          value="[0, 0, 0, 255]"
          style={{backgroundColor: "rgb(0, 0, 0)"}} 
        ></div>
        <div
          className="switchcolor"
          id="switch-color"
          value="[255, 255, 255, 255]"
          style={{backgroundColor: "rgb(255, 255, 255)"}}
        ></div>
      </div>
      <div className="pallete-layout">
        <ToolButton
          className="pallete-color"
          id="black-button"
          value="[0, 0, 0, 255]"
          style={{backgroundColor: "rgb(0, 0, 0)"}}
        />
        <ToolButton
          className="pallete-color"
          id="grey-button"
          value="[128, 128, 128, 255]"
          style={{backgroundColor: "rgb(128, 128, 128)"}}
        />
        <ToolButton
          className="pallete-color"
          id="maroon-button"
          value="[128, 0, 0, 255]"
          style={{backgroundColor: "rgb(128, 0, 0)"}}
        />
        <ToolButton
          className="pallete-color"
          id="dirty-yellow-button"
          value="[185, 155, 20, 255]"
          style={{backgroundColor: "rgb(185, 155, 20)"}}
        />
        <ToolButton
          className="pallete-color"
          id="green-button"
          value="[0, 128, 0, 255]"
          style={{backgroundColor: "rgb(0, 128, 0)"}}
        />
        <ToolButton
          className="pallete-color"
          id="teal-button"
          value="[0, 128, 128, 255]"
          style={{backgroundColor: "rgb(0, 128, 128)"}}
        />
        <ToolButton
          className="pallete-color"
          id="navyblue-button"
          value="[0, 0, 128, 255]"
          style={{backgroundColor: "rgb(0, 0, 128)"}}
        />
        <ToolButton
          className="pallete-color"
          id="purple-button"
          value="[128, 0, 128, 255]"
          style={{backgroundColor: "rgb(128, 0, 128)"}}
        />
        <ToolButton
          className="pallete-color"
          id="dirty-yellowish-button"
          value="[199, 151, 61, 255]"
          style={{backgroundColor: "rgb(199, 151, 61)"}}
        />
        <ToolButton
          className="pallete-color"
          id="greenish-blue-button"
          value="[0, 63, 63, 255]"
          style={{backgroundColor: "rgb(0, 63, 63)"}}
        />
        <ToolButton
          className="pallete-color"
          id="lightseagreen-button"
          value="[32, 178, 170, 255]"
          style={{backgroundColor: "rgb(32, 178, 170)"}}
        />
        <ToolButton
          className="pallete-color"
          id="royal-blue-button"
          value="[0, 65, 129, 255]"
          style={{backgroundColor: "rgb(0, 65, 129)"}}
        />
        <ToolButton
          className="pallete-color"
          id="deep-blue-button"
          value="[64, 0, 255, 255]"
          style={{backgroundColor: "rgb(64, 0, 255)"}}
        />
        <ToolButton
          className="pallete-color"
          id="brown-button"
          value="[128, 65, 1, 255]"
          style={{backgroundColor: "rgb(128, 65, 1)"}}
        />
        <ToolButton
          className="pallete-color"
          id="white-button"
          value="[255, 255, 255, 255]"
          style={{backgroundColor: "rgb(255, 255, 255)"}}
        />
        <ToolButton
          className="pallete-color"
          id="lightgray-button"
          value="[211, 211, 211, 255]"
          style={{backgroundColor: "rgb(211, 211, 211)"}}
        />
        <ToolButton
          className="pallete-color"
          id="red-button"
          value="[255, 0, 0, 255]"
          style={{backgroundColor: "rgb(255, 0, 0)"}}
        />
        <ToolButton
          className="pallete-color"
          id="yellow-button"
          value="[255, 255, 0, 255]"
          style={{backgroundColor: "rgb(255, 255, 0)"}}
        />
        <ToolButton
          className="pallete-color"
          id="lightgreen-button"
          value="[144, 238, 144, 255]"
          style={{backgroundColor: "rgb(144, 238, 144)"}}
        />
        <ToolButton
          className="pallete-color"
          id="lightblue-button"
          value="[173, 216, 230, 255]"
          style={{backgroundColor: "rgb(173, 216, 230)"}}
        />
        <ToolButton
          className="pallete-color"
          id="blue-button"
          value="[0, 0, 255, 255]"
          style={{backgroundColor: "rgb(0, 0, 255)"}}
        />
        <ToolButton
          className="pallete-color"
          id="pink-button"
          value="[255, 192, 203, 255]"
          style={{backgroundColor: "rgb(255, 192, 203)"}}
        />
        <ToolButton
          className="pallete-color"
          id="beige-button"
          value="[245, 245, 220, 255]"
          style={{backgroundColor: "rgb(245, 245, 220)"}}
        />
        <ToolButton
          className="pallete-color"
          id="sea-green-button"
          value="[1, 255, 129, 255]"
          style={{backgroundColor: "rgb(1, 255, 129)"}}
        />
        <ToolButton
          className="pallete-color"
          id="cyan-button"
          value="[0, 255, 255, 255]"
          style={{backgroundColor: "rgb(0, 255, 255)"}}
        />
        <ToolButton
          className="pallete-color"
          id="dull-blue-button"
          value="[128, 128, 255, 255]"
          style={{backgroundColor: "rgb(128, 128, 255)"}}
        />
        <ToolButton
          className="pallete-color"
          id="darkpink-button"
          value="[255, 0, 128, 255]"
          style={{backgroundColor: "rgb(255, 0, 128)"}}
        />
        <ToolButton
          className="pallete-color"
          id="mud-orange-button"
          value="[255, 129, 65, 255]"
          style={{backgroundColor: "rgb(255, 129, 65)"}}
        />
      </div>
    </div>
    </>
    );
}

function FooterContainer() {
  return (
    <>
      <div className="container-4">
        <div className="footer-note" id="foot-note"></div>
        <div id="coordinate_value" className="coordinates"></div>
        <div className="extra" id="dimensions"></div>
      </div>
    </>
  );
}

function App() {

  return (
    <>
      <MenuBar/>
      <CanvasContainer/>
      <PalleteContainer/>
      <FooterContainer/>
    </>
  );


}

export default App
