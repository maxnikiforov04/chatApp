import "./index.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth/Auth";
import Chat from "./Chat/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Chat />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
