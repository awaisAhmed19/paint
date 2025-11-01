import ToolButton from './components/ToolButton.jsx'
import BrushOptions from './components/options/BrushOptions.jsx'
import CurvedLineOptions from './components/options/CurvedLineOptions.jsx'
import ElipseOptions from './components/options/ElipseOptions.jsx'
import EraserOptions from './components/options/EraserOptions.jsx'
import LineOptions from './components/options/LineOptions.jsx'
import MagnificationOptions from './components/options/MagnificationOptions.jsx'
import PolygonOptions from './components/options/PolygonOptions.jsx'
import RectOptions from './components/options/RectOptions.jsx'
import RoundedRectOptions from './components/options/RoundedRectOptions.jsx'


export default function CanvasContainer(){
  return (
    <>
    <div className="container-2">
      <div className="sidebar" id="side-bar">
        <div className="sidebar-floating-top" placeholder="Tools">
          <button className="sidebar-close-button"></button>
          Tools
        </div>
        <div className="toolbar">
        <ToolButton
          className="tools"
          id="brush"
          toolName="brush"
          ToolPanel={BrushOptions}
          targetId=".optionWindow"
          isActive={activeTool === "brush"}
          onToggle={setActiveTool}
        />

          <ToolButton
            className="tools"
            hx-get="/clear"
            targetId=".optionWindow"
            id="rectlasso"
          />
          <ToolButton
            className="tools"
            hx-get="/clear"
            targetId=".optionWindow"
            id="lasso"
          />
          <ToolButton
            className="tools"
            hx-get="/EraserOptions.html"
            targetId=".optionWindow"
            id="eraser"
          />
          <ToolButton
            className="tools"
            hx-get="/clear"
            targetId=".optionWindow"
            id="floodfill"
          />
          <ToolButton
            className="tools"
            hx-get="/clear"
            targetId=".optionWindow"
            id="eyedrop"
          />
          <ToolButton
            className="tools"
            hx-get="/MagnificationOptions.html"
            targetId=".optionWindow"
            id="magnification"
          />
          <ToolButton
            className="tools"
            hx-get="/clear"
            targetId=".optionWindow"
            id="pencil"
          />
          <ToolButton
            className="tools"
            hx-get="/BrushOptions.html"
            targetId=".optionWindow"
            id="brush"
          />
          <ToolButton
            className="tools"
            hx-get="/AirBrushOptions.html"
            targetId=".optionWindow"
            id="airbrush"
          />
          <ToolButton
            className="tools"
            hx-get="/clear"
            targetId=".optionWindow"
            id="text"
          />
          <ToolButton
            className="tools"
            hx-get="/LineOptions.html"
            targetId=".optionWindow"
            id="line"
          />
          <ToolButton
            className="tools"
            hx-get="/CurvedLineOptions.html"
            targetId=".optionWindow"
            id="curveline"
          />
          <ToolButton
            className="tools"
            hx-get="/RectOptions.html"
            targetId=".optionWindow"
            id="rectshape"
          />
          <ToolButton
            className="tools"
            hx-get="/PolygonOptions.html"
            targetId=".optionWindow"
            id="polygonshape"
          />
          <ToolButton
            className="tools"
            hx-get="/ElipseTool.html"
            targetId=".optionWindow"
            id="ellipse"
          />
          <ToolButton
            className="tools"
            hx-get="/RoundedRectTool.html"
            targetId=".optionWindow"
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

  </>
  );
}

