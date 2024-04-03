import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import DashboardPath from "@/components/dashboard-path";
// import { ModalProvider } from "./components/providers/modal-providers";

function App() {
  return (
    <>
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:id" element={<DashboardPath />} />
        <Route path="/dashboard/projects/:id" element={<Dashboard />} />
        <Route path="/dashboard/certificates/:id" element={<Dashboard />} />
        <Route path="/dashboard/students/:id" element={<Dashboard />} />
        <Route path="/dashboard/unreviewed/:id" element={<Dashboard />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
