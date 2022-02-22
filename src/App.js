import './App.css';
import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/nishi-mohan-blog" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
