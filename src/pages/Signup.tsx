import DropDown from "../components/dropDown";
import InputField from "../components/inputField";
const Signup = () => {
  const dropdownData = {
    type1: ["Programme", "Option 2", "Option 3"],
    type2: ["Education", "Option B", "Option C"],
    type3: ["Item X", "Item Y", "Item Z"],
    type4: ["Choice 1", "Choice 2", "Choice 3"],
  };
  return (
    <div className=" h-[95vh] flex items-center justify-center">
      <div className="w-[355px] h-[500px] md:w-[763px] md:h-[500px] flex flex-col md:flex-row">
        <div className=" w-full md:w-[60%]  h-full bg-[#D3DDE9] rounded-l-2xl p-7 rounded-r-2xl md:rounded-r-[0px]">
          <h3 className="text-xl text-[#140DBD]">BUHREC</h3>
          <div className="flex flex-col justify-center items-center mt-2 md:mt-0">
            <form action="" className=" md:w-[85%]">
              <h3 className="text-[20px] text-center md:text-[23px] text-[#140DBD] font-bold mb-2">
                Sign Up
              </h3>
              <div className="flex flex-col gap-3 bg-[#140DBD] py-7 px-9 rounded-lg">
                <InputField thing={`profile`} placeholder={`fullname`} />
                <InputField thing={`email`} placeholder={`favourakinlesi@gmail.com`}/>
                <DropDown options={dropdownData.type1} thing={"book"} />
                <DropDown options={dropdownData.type2} thing={"education"} />
                <InputField thing={`password`} placeholder={`password`} />

                <div className="flex items-center justify-center mt-2">
                  <button className="border-[2px] border-white px-10 py-1 rounded-3xl flex items-center justify-center">
                    <span className="text-[17px] text-white flex items-center justify-center">
                      Signup
                    </span>
                  </button>
                </div>
              </div>
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
