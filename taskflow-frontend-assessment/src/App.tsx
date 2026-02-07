import { Routes,Route,Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import UserDashboard from "./pages/UserDashboard";
import AdminLayout from "./layouts/AdminLayout";
import ManagerLayout from "./layouts/ManagerLayout";
import UserLayout from "./layouts/UserLayout";

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<AdminLayout><AdminDashboard/></AdminLayout>}/>
      <Route path="/manager" element={<ManagerLayout><ManagerDashboard/></ManagerLayout>}/>
      <Route path="/user" element={<UserLayout><UserDashboard/></UserLayout>}/>
    </Routes>
  );
}
