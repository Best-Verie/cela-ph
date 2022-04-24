import "./App.css";

// import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
// import { Para } from "./pages/para";
function App() {
  return (
    <div className="App">
      <HomePage />
    </div>

    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="dashboard" element={<Para />} />
    // </Routes>
  );
}

export default App;
