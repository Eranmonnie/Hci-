import { FC } from "react";

interface dropDownProp {
  options: Array<string>;
  thing: string;
  value:string
  onChange:Function;
}

const DropDown: FC<dropDownProp> = ({ options, thing, value, onChange }) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };
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
        <select value={value} onChange={handleChange} className="w-full h-full border-none bg-transparent outline-none px-2 appearance-none focus:ring-[#140DBD] bg-no-repeat bg-right">
          {options.map((option:string, index:number) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DropDown;
