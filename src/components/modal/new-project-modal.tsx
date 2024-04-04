import React, { useState } from "react";
import InputField from "@/components/inputField";
import FileInput from "@/components/fileInput";
import { useModal } from "@/hooks/use-modal-store";
import { Plus, X } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";
import DropDown from "../dropDown";
import { Button } from "../ui/button";

const NewProjectModal = () => {
  const { isOpen, type, onClose } = useModal();
  const isModalopen = isOpen && type == "upload";
  const [isLoading, setIsloading] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    type: "Type",
    level: "Level",
    dicipline: "",
    image: {},
  });

  const dropdownData = {
    type: ["Type", "proposal", "review"],
    level: ["Level", "ug", " pg "],
  };

  const handelClose = () => {
    setFormData({
      projectName: "",
      type: "Type",
      level: "Level",
      dicipline: "",
      image: {},
    });
    onClose();
  };

  const handleChange = (fieldName: string, value: string | object) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsloading(true);
    // api call
    console.log(formData);
    setIsloading(false);
  };

  return (
    <Dialog open={isModalopen} onOpenChange={handelClose}>
      <DialogContent className="w-full flex flex-col">
        <div className="flex flex-col justify-center items-center ">
          <form onSubmit={handleSubmit}>
            <div className="bg-[#140DBD] py-3 px-9 rounded-2xl w-[400px]">
              <h3 className="text-[20px] text-center md:text-[23px] text-white font-bold mb-5">
                New Project
              </h3>
              <div className="flex flex-col gap-5">
                <InputField
                  thing={`title`}
                  placeholder="Project name"
                  value={formData.projectName}
                  onChange={(value: string) =>
                    handleChange("projectName", value)
                  }
                />
                <DropDown
                  options={dropdownData.type}
                  thing={"book"}
                  value={formData.type}
                  onChange={(value: any) => handleChange("Programme", value)}
                />
                <DropDown
                  options={dropdownData.level}
                  thing={"book"}
                  value={formData.level}
                  onChange={(value: any) => handleChange("level", value)}
                />
                <InputField
                  thing={`dicipline`}
                  placeholder="dicipline"
                  value={formData.dicipline}
                  onChange={(value: string) => handleChange("dicipline", value)}
                />
              </div>
              <FileInput
                onChange={(value: Object) => handleChange("image", value)}
              />

              <div className="flex items-center justify-center mt-2 bg-[#140DBD]">
                <Button
                  variant={`login`}
                  className=" bg-red-700 w-[80px] px-2 py-1 "
                  disabled={isLoading}
                >
                  <span className="text-[17px] text-white font-bold flex items-center gap-1">
                    Add
                    <Plus className="border-2 border-white rounded-2xl w-5 h-5" />
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

export default NewProjectModal;
