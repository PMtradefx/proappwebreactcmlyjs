import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import DashAdm from "./components/DashAdm";
import DashStu from "./components/DashStu";
import DashPro from "./components/DashPro";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashadm" element={<DashAdm />} />
        <Route path="/dashStu" element={<DashStu />} />
        <Route path="/dashPro" element={<DashPro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
