import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen
      setMousePosition ({
        x: e.clientX,
        y: e.clientY
      })
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return  render(mousePosition)
};

// This component should not receive any props
const PanelMouseLogger = ({}) => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <MousePosition render={(mousePosition) => <span>x: {mousePosition.x}</span>}/>
        <MousePosition render={(mousePosition) => <span>y: {mousePosition.y}</span>}/>
      </div>
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = ({}) => {
  return (
    <MousePosition render={(mousePosition) =>  <p>({mousePosition.x}, {mousePosition.y})</p>}/>

  )
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
