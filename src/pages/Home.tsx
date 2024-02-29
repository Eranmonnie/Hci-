import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <div className="">
        <Nav />
        <div className="bg-[#140DBD] pt-20 pb-10 px-[10%] flex justify-between h-[580px] border-t border-t-[#D3DDE9]">
          <div className=" pt-14">
            <div className=" mb-4">
              <span className="text-5xl text-white font-bold">WELCOME TO </span>
              <span className="text-5xl font-bold">BUHREC</span>
            </div>

            <p className=" w-96 text-[20px] text-white mb-9">
              Your site for marking your proposal papers and getting accurate
              corrections
            </p>

            <button className="bg-white border-none px-5 py-1.5 rounded-lg flex items-center justify-center">
              <span className="text-[14px]">SUBMIT A PROPOSAL</span>
            </button>
          </div>

          <div className="hidden md:inline">
            <img src="src/assets/landing.png" alt="" />
          </div>
        </div>

        <div className="flex justify-center items-center h-screen absolute top-0 z-[-1] bg-[#D3DDE9]">
          <img src="src/assets/circle.svg" alt="circle" />
        </div>

        <div className=" mt-60 bg-[#D3DDE9]">
          <h3 className="text-center text-[#140DBD] text-2xl font-semibold">
            ABOUT
          </h3>
        </div>
      </div>
    </>
  );
};

export default Home;
