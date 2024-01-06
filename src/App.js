import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navigation from "./Components/Navigation";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("#042743");

  const showAlert = (message, title) => {
    setAlert({
      title: title,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const closeAlert = () => {
    setAlert(null);
  };
  const changeHandler = (event) => {
    setColor(event.target.value);
  };

  const toogleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("light mode has been enabled", "success");
      document.title = "App Light-Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = color;
      // 042743;
      document.body.style.color = "white";
      document.title = "Text Editor Dark-Mode";

      showAlert(color + "mode has been enabled", "success");
    }
  };
  return (
    <div>
      <Navigation
        title="TextUtils"
        mode={mode}
        onClick={toogleMode}
        color={color}
        changeHandler={changeHandler}
      />

      <div className="container my-3">
        <Routes>
          <Route
            path="/text-editor"
            element={
              <Textform
                heading="Enter Text to Analyze"
                mode={mode}
                showAlert={showAlert}
                color={color}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} color={color} />} />
          <Route path="/" element={<Home mode={mode} />} />
        </Routes>
        <Alert alert={alert} closeAlert={closeAlert} />
      </div>
    </div>
  );
}
export default App;
