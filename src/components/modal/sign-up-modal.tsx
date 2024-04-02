import { useState } from "react";
import DropDown from "../dropDown";
import InputField from "../inputField";
// import { Link } from "react-router-dom";
import { useModal } from "@/hooks/use-modal-store";
import { X } from "lucide-react";
const SignupModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalopen = isOpen && type == "signup";

  const handelClose = () => {
    setFormData({
      fullname: "",
      email: "",
      password: "",
      Programme: "programme",
      Education: "Education",
    });
    onClose();
  };

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    Programme: "programme",
    Education: "Education",
  });

  const handleChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here with formData
    console.log("Form data:", formData);
  };

  const dropdownData = {
    type1: ["Programme", "Option 2", "Option 3"],
    type2: ["Education", "Option B", "Option C"],
    type3: ["Item X", "Item Y", "Item Z"],
    type4: ["Choice 1", "Choice 2", "Choice 3"],
  };

  return (
    <dialog open={isModalopen}>
      <div className="w-[200px] h-[350px] md:w-[650px] md:h-[500px]  fixed inset-0 mx-auto my-20 ">
        <div className=" w-full h-full bg-[#D3DDE9] rounded-2xl p-7 ">
          <div className="flex justify-between">
            <h3 className="text-xl text-[#140DBD]">BUHREC</h3>
            <button
              onClick={handelClose}
              className="bg-rose-500 text-white p-1 rounded-full shadow-sm flex justify-center items-center w-6 h-6 "
              type="button"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-2 md:mt-0">
            <form onSubmit={handleSubmit} className=" md:w-[85%]">
              <h3 className="text-[20px] text-center md:text-[23px] text-[#140DBD] font-bold mb-2">
                Sign Up
              </h3>
              <div className="flex flex-col gap-3 bg-[#140DBD] py-7 px-9 rounded-lg">
                <InputField
                  thing={`profile`}
                  placeholder={`fullname`}
                  value={formData.fullname}
                  onChange={(value: string) => handleChange("fullname", value)}
                />
                <InputField
                  thing={`email`}
                  placeholder={`favourakinlesi@gmail.com`}
                  value={formData.email}
                  onChange={(value: any) => handleChange("email", value)}
                />
                <DropDown
                  options={dropdownData.type1}
                  thing={"book"}
                  value={formData.Programme}
                  onChange={(value: any) => handleChange("Programme", value)}
                />
                <DropDown
                  options={dropdownData.type2}
                  thing={"education"}
                  value={formData.Education}
                  onChange={(value: any) => handleChange("Education", value)}
                />
                <InputField
                  thing={`password`}
                  placeholder={`password`}
                  value={formData.password}
                  onChange={(value: any) => handleChange("password", value)}
                />

                <div className="flex items-center justify-center mt-2">
                  <button className="border-[2px] border-white px-10 py-1 rounded-3xl flex items-center justify-center">
                    <span className="text-[17px] text-white font-bold flex items-center justify-center">
                      Signup
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default SignupModal;
