import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./views/Signup/SignUp";
import LogIn from "./views/Login/LogIn";
import DashBoard from "./views/Dashboard/DashBoard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/DashBoad" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
