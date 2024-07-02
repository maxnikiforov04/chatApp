import "./index.css";
import { Routes, Route } from "react-router-dom";
import Calc from "./Auth/Calc";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calc />}></Route>
    </Routes>
  );
}

export default App;
