import { useState } from "react";
import DropDown from "@/components/dropDown";
import InputField from "../inputField";
import { useModal } from "@/hooks/use-modal-store";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
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
    <Dialog open={isModalopen} onOpenChange={handelClose}>
      <DialogContent className="w-full flex flex-col">
       
        <div className="flex flex-col justify-center items-center mt-2 md:mt-0 ">
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
                <Button  variant={`login`} className="  bg-red-700 px-10 py-1 text-white">
                  <span className="text-[17px]  font-bold text-center">
                    Signup
                  </span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;
