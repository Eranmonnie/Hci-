import FileInput from "../components/fileInput";

const Upload = () => {
  const handleFileChange = (file: { files: any[] }) => {
    console.log("Selected file:", file);
    // Handle the selected file here, such as uploading it to a server
  };
  return (
    <>
      <div className="bg-[#D3DDE9] h-screen">
        <nav className="flex justify-between bg-[#D3DDE9] py-1 pl-7 ">
          <span className="text-2xl text-[#140DBD] font-bold">BUHREC</span>
        </nav>
        <form action="">
          <div className="flex justify-center items-center p-[10%] border-t border-t-[#140DBD]">
            <div className="flex flex-col gap-5 justify-center items-center px-28 pt-14 pb-[2%] bg-white w-[340px] rounded-xl">
              <FileInput onChange={handleFileChange} />
              <h6 className=" text-[11px] text-center">UPLOAD DOCUMENT</h6>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Upload;
