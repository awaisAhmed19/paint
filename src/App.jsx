import { useState } from 'react'
import './App.css'
import './assets/root.css'
import './assets/container1.css'
import './assets/container2.css'
import './assets/container3.css'
import './assets/container4.css'
import './components/AirBrushOptions.jsx'
import Button from './Button.jsx';


function MenuBarContainer() {
  return (
    <>
      <div className="container-1">
        <div className="menubar">
          <Button
            className="menubar-btn"
            data-dropdown-id="file_toggle"
            hx-get="/FileMenu.html"
            hx-target="#dropdowncontainer"
            hx-swap="innerHTML"
          >
            File
          </Button>
          <Button
            className="menubar-btn"
            data-dropdown-id="edit_toggle"
            hx-get="/EditMenu.html"
            hx-target="#dropdowncontainer"
            hx-swap="innerHTML"
          >
            Edit
          </Button>
          <Button
            className="menubar-btn"
            data-dropdown-id="view_toggle"
            hx-get="/ViewMenu.html"
            hx-target="#dropdowncontainer"
            hx-swap="innerHTML"
          >
            View
          </Button>
          <Button
            className="menubar-btn"
            data-dropdown-id="layer_toggle"
            hx-get="/LayerMenu.html"
            hx-target="#dropdowncontainer"
            hx-swap="innerHTML"
          >
            Layer
          </Button>
          <Button
            className="menubar-btn"
            data-dropdown-id="image_toggle"
            hx-get="/ImageMenu.html"
            hx-target="#dropdowncontainer"
            hx-swap="innerHTML"
          >
            Image
          </Button>
          <Button
            className="menubar-btn"
            data-dropdown-id="colors_toggle"
            hx-get="/ColorMenu.html"
            hx-target="#dropdowncontainer"
            hx-swap="innerHTML"
          >
            Colors
          </Button>
          <Button
            className="menubar-btn"
            data-dropdown-id="help_toggle"
            hx-get="/HelpMenu.html"
            hx-target="#dropdowncontainer"
            hx-swap="innerHTML"
          >
            Help
          </Button>
        </div>
        <div className="dropdown-container" id="dropdowncontainer"></div>
      </div>
    </>
  );
}
function CanvasContainer(){
  return (<>

    <div className="container-2">
      <div className="sidebar" id="side-bar">
        <div className="sidebar-floating-top" placeholder="Tools">
          <Button className="sidebar-close-button"/>
          Tools
        </div>
        <div className="toolbar">
          <Button
            className="tools"
            hx-get="/clear"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="rectlasso"
          />
          <Button
            className="tools"
            hx-get="/clear"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="lasso"
          />
          <Button
            className="tools"
            hx-get="/EraserOptions.html"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="eraser"
          />
          <Button
            className="tools"
            hx-get="/clear"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="floodfill"
          />
          <Button
            className="tools"
            hx-get="/clear"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="eyedrop"
          />
          <Button
            className="tools"
            hx-get="/MagnificationOptions.html"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="magnification"
          />
          <Button
            className="tools"
            hx-get="/clear"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="pencil"
          />
          <Button
            className="tools"
            hx-get="/BrushOptions.html"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="brush"
          />
          <Button
            className="tools"
            hx-get="/AirBrushOptions.html"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="airbrush"
          />
          <Button
            className="tools"
            hx-get="/clear"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="text"
          />
          <Button
            className="tools"
            hx-get="/LineOptions.html"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="line"
          />
          <Button
            className="tools"
            hx-get="/CurvedLineOptions.html"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="curveline"
          />
          <Button
            className="tools"
            hx-get="/RectOptions.html"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="rectshape"
          />
          <Button
            className="tools"
            hx-get="/PolygonOptions.html"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="polygonshape"
          />
          <Button
            className="tools"
            hx-get="/ElipseTool.html"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="ellipse"
          />
          <Button
            className="tools"
            hx-get="/RoundedRectTool.html"
            hx-target=".optionWindow"
            hx-swap="innerHTML"
            id="rectelipse"
          />
        </div>
        <div className="optionWindow" id="optionWindow"></div>
      </div>

      <div className="canvasbackcontainer" id="canvas-back-container">
        <div className="canvascontainer" id="canvas-container">
          <canvas id="canvas" className="canvas"></canvas>
          <canvas
            id="canvasbuffer"
            style={{
              display: "none",
              zIndex: 3,
              position: "inherit",
              top: "3px",
              left: "3px",
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></canvas>
          <canvas
            id="selectionbuffer"
            style={{
                display: "none",
                zIndex: 99,          // ✅ only once
                position: "inherit",
                border: "none"
            }}
          ></canvas>
          <textarea id="textarea" className="hidden"></textarea>
          <img
            src="{{url_for('static',filename='./imgs/point.png')}}"
            className="resize-handle right"
            alt="right handle"
          />
          <img
            src="{{url_for('static',filename='./imgs/point.png')}}"
            className="resize-handle bottom"
            alt="bottom handle"
          />
          <img
            src="{{url_for('static',filename='./imgs/point.png')}}"
            className="resize-handle corner"
            alt="corner handle"
          />
        </div>
      </div>

      <div className="right-sidebar"></div>
    </div>

  </>);
}

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
        <Button
          className="pallete-color"
          id="black-button"
          value="[0, 0, 0, 255]"
          style={{backgroundColor: "rgb(0, 0, 0)"}}
        />
        <Button
          className="pallete-color"
          id="grey-button"
          value="[128, 128, 128, 255]"
          style={{backgroundColor: "rgb(128, 128, 128)"}}
        />
        <Button
          className="pallete-color"
          id="maroon-button"
          value="[128, 0, 0, 255]"
          style={{backgroundColor: "rgb(128, 0, 0)"}}
        />
        <Button
          className="pallete-color"
          id="dirty-yellow-button"
          value="[185, 155, 20, 255]"
          style={{backgroundColor: "rgb(185, 155, 20)"}}
        />
        <Button
          className="pallete-color"
          id="green-button"
          value="[0, 128, 0, 255]"
          style={{backgroundColor: "rgb(0, 128, 0)"}}
        />
        <Button
          className="pallete-color"
          id="teal-button"
          value="[0, 128, 128, 255]"
          style={{backgroundColor: "rgb(0, 128, 128)"}}
        />
        <Button
          className="pallete-color"
          id="navyblue-button"
          value="[0, 0, 128, 255]"
          style={{backgroundColor: "rgb(0, 0, 128)"}}
        />
        <Button
          className="pallete-color"
          id="purple-button"
          value="[128, 0, 128, 255]"
          style={{backgroundColor: "rgb(128, 0, 128)"}}
        />
        <Button
          className="pallete-color"
          id="dirty-yellowish-button"
          value="[199, 151, 61, 255]"
          style={{backgroundColor: "rgb(199, 151, 61)"}}
        />
        <Button
          className="pallete-color"
          id="greenish-blue-button"
          value="[0, 63, 63, 255]"
          style={{backgroundColor: "rgb(0, 63, 63)"}}
        />
        <Button
          className="pallete-color"
          id="lightseagreen-button"
          value="[32, 178, 170, 255]"
          style={{backgroundColor: "rgb(32, 178, 170)"}}
        />
        <Button
          className="pallete-color"
          id="royal-blue-button"
          value="[0, 65, 129, 255]"
          style={{backgroundColor: "rgb(0, 65, 129)"}}
        />
        <Button
          className="pallete-color"
          id="deep-blue-button"
          value="[64, 0, 255, 255]"
          style={{backgroundColor: "rgb(64, 0, 255)"}}
        />
        <Button
          className="pallete-color"
          id="brown-button"
          value="[128, 65, 1, 255]"
          style={{backgroundColor: "rgb(128, 65, 1)"}}
        />
        <Button
          className="pallete-color"
          id="white-button"
          value="[255, 255, 255, 255]"
          style={{backgroundColor: "rgb(255, 255, 255)"}}
        />
        <Button
          className="pallete-color"
          id="lightgray-button"
          value="[211, 211, 211, 255]"
          style={{backgroundColor: "rgb(211, 211, 211)"}}
        />
        <Button
          className="pallete-color"
          id="red-button"
          value="[255, 0, 0, 255]"
          style={{backgroundColor: "rgb(255, 0, 0)"}}
        />
        <Button
          className="pallete-color"
          id="yellow-button"
          value="[255, 255, 0, 255]"
          style={{backgroundColor: "rgb(255, 255, 0)"}}
        />
        <Button
          className="pallete-color"
          id="lightgreen-button"
          value="[144, 238, 144, 255]"
          style={{backgroundColor: "rgb(144, 238, 144)"}}
        />
        <Button
          className="pallete-color"
          id="lightblue-button"
          value="[173, 216, 230, 255]"
          style={{backgroundColor: "rgb(173, 216, 230)"}}
        />
        <Button
          className="pallete-color"
          id="blue-button"
          value="[0, 0, 255, 255]"
          style={{backgroundColor: "rgb(0, 0, 255)"}}
        />
        <Button
          className="pallete-color"
          id="pink-button"
          value="[255, 192, 203, 255]"
          style={{backgroundColor: "rgb(255, 192, 203)"}}
        />
        <Button
          className="pallete-color"
          id="beige-button"
          value="[245, 245, 220, 255]"
          style={{backgroundColor: "rgb(245, 245, 220)"}}
        />
        <Button
          className="pallete-color"
          id="sea-green-button"
          value="[1, 255, 129, 255]"
          style={{backgroundColor: "rgb(1, 255, 129)"}}
        />
        <Button
          className="pallete-color"
          id="cyan-button"
          value="[0, 255, 255, 255]"
          style={{backgroundColor: "rgb(0, 255, 255)"}}
        />
        <Button
          className="pallete-color"
          id="dull-blue-button"
          value="[128, 128, 255, 255]"
          style={{backgroundColor: "rgb(128, 128, 255)"}}
        />
        <Button
          className="pallete-color"
          id="darkpink-button"
          value="[255, 0, 128, 255]"
          style={{backgroundColor: "rgb(255, 0, 128)"}}
        />
        <Button
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
      <MenuBarContainer/>
      <CanvasContainer/>
      <PalleteContainer/>
      <FooterContainer/>
    </>
  );


}

export default App
