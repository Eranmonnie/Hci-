import { useEffect, useState } from "react";
import FileInput from "../components/fileInput";
import InputField from "../components/inputField";
import SideNav from "@/components/sideNav";
import DataTable from "@/components/dataTable";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ModalProvider } from "@/components/providers/modal-providers";
const Dashboard = () => {
  const params = useParams();
  const navigate = useNavigate();
  // const { isOpen, type } = useModal();
  useEffect(() => {
    if (!params?.id) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="w-full h-screen">
        <nav className="flex justify-between bg-[#140DBD] py-1 pl-7 pr-[10%]">
          <Link to={`/`}>
            <span className="text-2xl text-white font-bold">BUHREC</span>
          </Link>
        </nav>

        <ModalProvider />

        <div className="flex h-full">
          <SideNav accountType={params?.id} />
          {/* /role */}
          <div className="w-full">
            {/* //data about part of dashboard  */}
            <DataTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
