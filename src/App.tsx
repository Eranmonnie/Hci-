import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import { ModalProvider } from "./components/providers/modal-providers";

function App() {
  return (
    <>
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
