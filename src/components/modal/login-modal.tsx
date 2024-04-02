import { useState } from "react";
import InputField from "@/components/inputField";
import { useModal } from "@/hooks/use-modal-store";
import { X } from "lucide-react";

const LoginModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalopen = isOpen && type == "login";

  const handelClose = () => {
    setFormData({
      email: "",
      password: "",
    });
    onClose();
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
          <div className="flex flex-col justify-center items-center mt-7 md:mt-14">
            <form onSubmit={handleSubmit} className="w-[67%] ">
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
        </div>
      </div>
    </dialog>
  );
};

export default LoginModal;
