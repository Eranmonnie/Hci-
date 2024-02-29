import { FC } from "react";

interface inputProps {
  thing: string;
  placeholder: string;
}

const InputField: FC<inputProps> = ({ thing, placeholder }) => {
  return (
    <>
      <div className="flex h-11 items-center justify-center border border-[#140DBD] bg-white rounded-md">
        <div className="w-[20%] h-full flex justify-center items-center border-r border-r-[#140DBD]">
          <img
            src={`src/assets/${thing}.svg`}
            alt={`${thing}`}
            className="w-[20px] h-[20px]"
          />
        </div>
        <input
          type={thing}
          name={thing}
          id={thing}
          placeholder={`${placeholder}`}
          className="w-full h-full border-none bg-transparent outline-none  p-3"
        />
      </div>
    </>
  );
};

export default InputField;
