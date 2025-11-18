import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import RegisterPanel from "./components/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPanel />} />
        <Route path="/register" element={<RegisterPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
