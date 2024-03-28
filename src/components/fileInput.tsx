import { FC, useRef } from "react";
interface dropDownProp {
  onChange: Function;
}

const FileInput: FC<dropDownProp> = ({ onChange }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event: { target: { files: any } }) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      // Check if the file is a PDF
      if (file.type === "application/pdf") {
        onChange(file);
      } else {
        console.log("errrrr");
        alert("Please select a PDF file.");
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="px-8 py-7 border border-black border-dashed rounded-xl w-[145px] flex justify-center items-center flex-col">
        <img src="src/assets/upload.svg" alt="upload" className="w-[55px]" />
        <label htmlFor="fileInput" onClick={handleClick}>
          <div style={{ cursor: "pointer" }}>
            Browse 
          </div>
        </label>
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
