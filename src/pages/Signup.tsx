import InputField from "../components/inputField";

const Signup = () => {
  return (
    <div className=" h-[95vh] flex items-center justify-center bg-[]">
      <div className="w-[355px] h-[500px]   md:w-[753px] md:h-[466px] flex flex-col md:flex-row">
        <div className=" w-full md:w-[60%]  h-full bg-[#D3DDE9] rounded-l-2xl p-7 rounded-r-2xl md:rounded-r-[0px]">
          <h3 className="text-xl text-[#140DBD]">BUHREC</h3>
          <div className="flex flex-col justify-center items-center mt-2 md:mt-0">
            <form action="" className="w-[70] md:w-[85%]">
              <h3 className="text-[20px] text-center md:text-[23px] text-[#140DBD] font-bold mb-2">
                Sign Up
              </h3>
              <div className="flex flex-col gap-2 bg-[#140DBD] py-7 px-10">
                <InputField thing={`email`} />
                <InputField thing={`password`} />
                <InputField thing={`password`} />
                <InputField thing={`password`} />
                <InputField thing={`password`} />

                <div className="flex items-center justify-center mt-2">
                  <button className="border-[2px] border-white px-10 py-1 rounded-3xl flex items-center justify-center">
                    <span className="text-[17px] text-white flex items-center justify-center">
                      Signup
                    </span>
                  </button>
                </div>

              </div>
              <h5 className="text-right text-[11px] mt-1">forgot password ?</h5>
            </form>
          </div>
        </div>

        <div className=" hidden md:inline w-0 md:w-[40%] h-full bg-[#140DBD] rounded-r-2xl py-40 px-7">
          <div className="flex flex-col gap-5">
            <h4 className="text-center text-xl text-white">
              Already have an account? Login here
            </h4>
            

            <div className="flex items-center justify-center mt-2">
              <button className="border-[2px] border-white px-10 py-1 rounded-3xl flex items-center justify-center">
                <span className="text-[17px] text-white flex items-center justify-center">
                  Login
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
