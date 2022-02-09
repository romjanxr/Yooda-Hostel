import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Foods from "./Components/Foods/Foods";
import Header from "./Components/Header/Header";
import Students from "./Components/Students/Students";
import Distribution from "./Components/Distribution/Distribution";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Foods />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/students" element={<Students />} />
        <Route path="/distribution" element={<Distribution />} />
      </Routes>
    </div>
  );
}

export default App;
