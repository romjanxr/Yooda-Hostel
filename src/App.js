import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Foods from "./Components/Foods/Foods";
import Header from "./Components/Header/Header";
import Students from "./Components/Students/Students";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Foods />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
}

export default App;
