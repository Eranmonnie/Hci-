import React, { useState } from "react";
import InputField from "@/components/inputField";
import FileInput from "@/components/fileInput";
import { useModal } from "@/hooks/use-modal-store";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";

const NewProjectModal = () => {
  const { isOpen, type, onClose } = useModal();
  const isModalopen = isOpen && type == "upload";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handelClose = () => {
    setFormData({
      email: "",
      password: "",
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
    console.log(formData);
  };

  return (
    <Dialog open={isModalopen} onOpenChange={handelClose}>
      <DialogContent className="w-full flex flex-col">      
            <div className="flex flex-col justify-center items-center ">
              <form onSubmit={handleSubmit} >
                <div className="bg-[#140DBD] py-7 px-9 rounded-2xl w-[400px]">
                  <h3 className="text-[20px] text-center md:text-[23px] text-white font-bold mb-5">
                    Login to Your Acount
                  </h3>
                  <div className="flex flex-col gap-5">
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
                      onChange={(value: string) =>
                        handleChange("password", value)
                      }
                    />
                  </div>
                  <h5 className="text-right text-[11px] mt-1">
                    forgot password ?
                  </h5>

                  <div className="flex items-center justify-center mt-2 bg-[#140DBD]">
                    <button className="border-[2px] border-white px-10 py-1 rounded-3xl flex items-center justify-center">
                      <span className="text-[17px] text-white font-bold flex items-center justify-center">
                        Login
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
      </DialogContent>
    </Dialog>
    // <dialog open={isModalopen}>
    //   <div className="fixed inset-0 mx-auto my-52 w-[40%]   p-7 border border-black ">
    //         <button
    //           onClick={handelClose}
    //           className="bg-rose-500 text-white p-1 rounded-full shadow-sm flex justify-center items-center w-6 h-6 "
    //           type="button"
    //         >
    //           <X className="w-4 h-4" />
    //         </button>
    //     <div>
    //       <div className="   ">
    //         <form
    //           onSubmit={handelSubmit}
    //           className="  flex flex-row gap-10 items-center justify-center"
    //         >
    //           <div className="flex flex-col w-[50%]">
    //             <InputField
    //               thing={`email`}
    //               placeholder="favourakinlesi@gmail.com"
    //               value={formData.email}
    //               onChange={(value: string) => handleChange("email", value)}
    //             />
    //             <InputField
    //               thing={`password`}
    //               placeholder="password"
    //               value={formData.password}
    //               onChange={(value: string) => handleChange("password", value)}
    //             />
    //             <InputField
    //               thing={`password`}
    //               placeholder="password"
    //               value={formData.password}
    //               onChange={(value: string) => handleChange("password", value)}
    //             />
    //             <InputField
    //               thing={`password`}
    //               placeholder="password"
    //               value={formData.password}
    //               onChange={(value: string) => handleChange("password", value)}
    //             />
    //             <InputField
    //               thing={`password`}
    //               placeholder="password"
    //               value={formData.password}
    //               onChange={(value: string) => handleChange("password", value)}
    //             />
    //           </div>

    //           <div className="flex flex-col gap-5 justify-center items-center px-28 pt-14 pb-[2%] bg-white w-[40%] h-[225px] rounded-xl">
    //             <FileInput
    //               onChange={(value: Object) =>
    //                 handleChange("assignment", value)
    //               }
    //             />
    //             <h6 className=" text-[11px] text-center">Dashboard DOCUMENT</h6>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </dialog>
  );
};

export default NewProjectModal;
