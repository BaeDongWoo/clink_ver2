import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindId from "./components/FindId";
import FindPwd from "./components/FindPwd";
import Join from "./components/Join";
import Login from "./components/Login";
import Challenge from "./pages/Challenge";

function App() {
  return (
    <div className="App">
      <Challenge />

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Community1 />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/findId" element={<FindId />}></Route>
          <Route path="/findPwd" element={<FindPwd />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
