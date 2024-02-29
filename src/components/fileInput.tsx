import { FC, useRef } from "react";
interface dropDownProp {
  onChange: Function;
}

const FileInput: FC<dropDownProp> = ({ onChange }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event: { target: { files: any } }) => {
    const file = event.target.files[0];
    if (file) {
      // Check if the file is a PDF
      if (file.type === "application/pdf") {
        onChange(file);
      } else {
        alert("Please select a PDF file.");
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="px-8 py-7 border border-black border-dashed rounded-xl">
        <img src="src/assets/upload.svg" alt="upload" className="w-[55px]" />
        <button onClick={handleClick}>Browse</button>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          accept=".pdf"
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};

export default FileInput;
