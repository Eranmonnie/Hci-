import { useModal } from "@/hooks/use-modal-store";
import { useState } from "react";
import { Button } from "./ui/button";

const Nav = () => {
  const [logIn, useLogin] = useState(false);
  const {onOpen} = useModal();
  return (
    <>
      <nav className="flex justify-between bg-[#140DBD] py-1 pl-7 pr-[10%]">
        <span className="text-2xl text-white font-bold">BUHREC</span>
        {logIn ? (
          <div className="flex justify-center items-center gap-4">
            <span className="text-white text-sm">Bayo Balogun</span>
            <img src="src/assets/imageprofile.png" alt="pp" />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4">
             <Button  onClick={()=>onOpen("login")}>Login</Button>
            <Button  onClick={()=>onOpen("signup")}>Signup</Button>
            
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
