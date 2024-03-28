import { useState } from "react";
import InputField from "../components/inputField";


const Login = () => {

    const [formData, setFormData] = useState({
      email: '',
      password: ''
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
      console.log('Form data:', formData);
    };


  return (
    <div className=" h-[95vh] flex items-center justify-center bg-[]">
      <div className="w-[355px] h-[400px]  md:w-[763px] md:h-[500px] flex flex-col md:flex-row">
        <div className=" w-full md:w-[60%]  h-full bg-[#D3DDE9] rounded-l-2xl p-8 rounded-r-2xl md:rounded-r-[0px]">
          <h3 className="text-xl text-[#140DBD]">BUHREC</h3>
          <div className="flex flex-col justify-center items-center mt-7 md:mt-20">
            <form  onSubmit={handleSubmit} className="w-[70] md:w-[65%]">
              <h3 className="text-[20px] text-center md:text-[23px] text-[#140DBD] font-bold mb-5">
                Sign In to Your Acount
              </h3>
              <div className="flex flex-col gap-5">
                <InputField thing={`email`} placeholder="favourakinlesi@gmail.com"  value={formData.email} onChange={(value: string) => handleChange('email', value)} />
                <InputField thing={`password`} placeholder="password" value={formData.password} onChange={(value: string) => handleChange('password', value)} />
              </div>
              <h5 className="text-right text-[11px] mt-1">forgot password ?</h5>

              <div className="flex items-center justify-center mt-2 bg-[#D3DDE9]">
                <button className="border-[1px] border-[#140DBD] px-10 py-1 rounded-3xl flex items-center justify-center">
                  <span className="text-[17px] text-[#140DBD] flex items-center justify-center">
                    Login
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className=" hidden md:inline w-0 md:w-[40%] h-full bg-[#140DBD] rounded-r-2xl py-44 px-10">
          <div className="flex flex-col gap-5">
            <h4 className="text-center text-xl text-white">
              Fill up your personal information!
            </h4>
            
            <div className="flex items-center justify-center mt-2">
              <button className="border-[2px] border-white px-10 py-1 rounded-3xl flex items-center justify-center">
                <span className="text-[17px] text-white flex items-center justify-center">
                  Signup
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
