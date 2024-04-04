import { FC, useRef } from "react";
import { Input } from "./ui/input";
interface dropDownProp {
  onChange: Function;
}

const FileInput: FC<dropDownProp> = ({ onChange }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event: { target: { files: any } }) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === "application/pdf") {
        console.log(file)
        onChange(file);
      } else {
        console.log("errrrr");
        alert("Please select a PDF file.");
      }
    }
  };

  return (
    <>
      <div className=" py-5  ">
        <Input
          className="w-full"
          type="file"
          accept=".pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          placeholder="Email"
        />
      </div>
    </>
  );
};

export default FileInput;
