import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sample1 from "./pages/Sample1";
import Simulation from "./pages/Simulations";
import Aparatus from "./pages/Aparatus";
import Robotics from "./pages/Robotics";
import Competition from "./pages/Competition";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulations" element={<Sample1 />} />
          <Route path="/aparatus" element={<Aparatus />} />
          <Route path="/robotics" element = {<Robotics/>} />
          <Route path="/competitions" element = {<Competition/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;