import { useState } from "react";
import sideNav from "@/components/sideNav";
import FileInput from "../components/fileInput";
import InputField from "../components/inputField";
import SideNav from "@/components/sideNav";
import Nav from "@/components/nav";
import DataTable from "@/components/dataTable";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    assignment: {},
  });

  const handleChange = (fieldName: string, value: string | object) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handelSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="w-full h-full">
        <Nav />
        <div className="flex h-full">
          <SideNav />
          <div className="w-full">
            <DataTable />
          </div>
        </div>
      </div>
      {/* <div className="bg-[#D3DDE9] h-screen">
        <nav className="flex justify-between bg-[#D3DDE9] py-1 pl-7 mb-10 border-b border-b-[#140DBD]">
          <span className="text-2xl text-[#140DBD] font-bold">BUHREC</span>
        </nav>

        <div className="flex justify-center items-center  ">
          <form
            onSubmit={handelSubmit}
            className=" w-[40%] flex flex-row gap-10 items-center justify-center p-7 border border-black"
          >
            <div className="flex flex-col w-[50%]">
            <InputField
              thing={`email`}
              placeholder="favourakinlesi@gmail.com"
              value={formData.email}
              onChange={(value: string) => handleChange("email", value)}
            />
            <InputField
              thing={`password`}
              placeholder="password"
              value={formData.password}
              onChange={(value: string) => handleChange("password", value)}
            />
            <InputField
              thing={`password`}
              placeholder="password"
              value={formData.password}
              onChange={(value: string) => handleChange("password", value)}
            />
            <InputField
              thing={`password`}
              placeholder="password"
              value={formData.password}
              onChange={(value: string) => handleChange("password", value)}
            />
            <InputField
              thing={`password`}
              placeholder="password"
              value={formData.password}
              onChange={(value: string) => handleChange("password", value)}
            />
            </div>
            
            
              <div className="flex flex-col gap-5 justify-center items-center px-28 pt-14 pb-[2%] bg-white w-[40%] h-[225px] rounded-xl">
                <FileInput
                  onChange={(value: Object) =>
                    handleChange("assignment", value)
                  }
                />
                <h6 className=" text-[11px] text-center">Dashboard DOCUMENT</h6>
              </div>
          
            
          </form>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
