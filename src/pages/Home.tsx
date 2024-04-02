// import { useState } from "react";
import { ModalProvider } from "@/components/providers/modal-providers";
import { AboutComp } from "../components/aboutComp";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { useModal } from "@/hooks/use-modal-store";


const Home = () => {
  const { isOpen, type } = useModal();

  return (
    <>
      <div className=" ">

      {isOpen && type == "signup" ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
        ):""}

      {isOpen && type == "login" ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
        ):""}
        <Nav />
        
        <ModalProvider />
        
        <div className="w-full bg-[#140DBD] pt-20 pb-10 px-[10%] flex justify-between h-[580px] border-t border-t-[#D3DDE9]">
          <div className=" pt-14">
            <div className=" mb-4">
              <span className="text-5xl text-white font-bold">WELCOME TO </span>
              <span className="text-5xl font-bold">BUHREC</span>
            </div>

            <p className=" text-[20px] text-white mb-9">
              Your site for marking your proposal papers and getting accurate
              corrections
            </p>

            <button className="bg-white border-none px-5 py-1.5 rounded-lg flex items-center justify-center">
              <Link to={`/upload`}>
                <span className="text-[14px] text-[#140DBD]">
                  SUBMIT A PROPOSAL
                </span>
              </Link>
            </button>
          </div>

          <div className="hidden md:inline">
            <img src="src/assets/landing.png" alt="image" />
          </div>
        </div>

        <div className=" px-10  bg-[#D3DDE9] pb-20">
          <h3 className="text-center text-[#140DBD] text-2xl font-semibold mb-5">
            ABOUT
          </h3>

          <div className="mb-20">
            <div className="flex justify-start mb-10">
              <AboutComp
                intro={`Brief history`}
                data={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Cursus vitae congue mauris rhoncus aenean. Risus sed vulputate odio ut enim.
            Pretium aenean pharetra magna ac placerat vestibulum.
            Ornare arcu dui vivamus arcu. Odio ut enim blandit volutpat maecenas volutpat blandit.
            Id eu nisl nunc mi ipsum faucibus. Nunc id cursus metus aliquam eleifend.
            Viverra maecenas accumsan lacus vel facilisis volutpat est velit`}
              />
            </div>

            <div className="flex justify-end mb-10">
              <AboutComp
                intro={`Brief history`}
                data={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Cursus vitae congue mauris rhoncus aenean. Risus sed vulputate odio ut enim.
            Pretium aenean pharetra magna ac placerat vestibulum.
            Ornare arcu dui vivamus arcu. Odio ut enim blandit volutpat maecenas volutpat blandit.
            Id eu nisl nunc mi ipsum faucibus. Nunc id cursus metus aliquam eleifend.
            Viverra maecenas accumsan lacus vel facilisis volutpat est velit`}
              />
            </div>

            <div className="flex justify-start mb-10">
              <AboutComp
                intro={`Brief history`}
                data={`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Cursus vitae congue mauris rhoncus aenean. Risus sed vulputate odio ut enim.
            Pretium aenean pharetra magna ac placerat vestibulum.
            Ornare arcu dui vivamus arcu. Odio ut enim blandit volutpat maecenas volutpat blandit.
            Id eu nisl nunc mi ipsum faucibus. Nunc id cursus metus aliquam eleifend.
            Viverra maecenas accumsan lacus vel facilisis volutpat est velit`}
              />
            </div>
          </div>

          {/*  */}

          <div className="flex items-center justify-center">
            <div className="px-8 pt-2 pb-5 w-[400px] bg-white rounded-xl">
              <h5 className="text-center mb-5 text-xl font-bold Roboto">
                CONTACT US
              </h5>
              <form action="">
                <input
                  name="contact"
                  id="contact"
                  type="text"
                  placeholder=""
                  className="w-full h-40 mb-5 border border-[#140DBD] outline-none"
                ></input>
                <div className="flex items-center justify-center">
                  <button className="px-6 py-0.5 border border-[#140DBD] text-sm text-[#140DBD] rounded-3xl">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*  */}
        </div>

        <div className="w-full h-48 bg-[#140DBD]"></div>
      </div>
    </>
  );
};

export default Home;
