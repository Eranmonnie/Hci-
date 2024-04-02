import { useModal } from "@/hooks/use-modal-store";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Nav = () => {
  const [logIn, useLogin] = useState(false);
  const {onOpen} = useModal();
  return (
    <>
      <nav className="flex justify-between bg-[#140DBD] py-1 pl-7 pr-[10%]">
        <Link to={`/`}>
        <span className="text-2xl text-white font-bold"  >BUHREC</span>
        </Link>
        {logIn ? (
          <div className="flex justify-center items-center gap-4">
            <span className="text-white text-sm">Bayo Balogun</span>
            <img src="src/assets/imageprofile.png" alt="pp" />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4">
             <Button variant={`login`} className=" bg-blue-700" onClick={()=>onOpen("login")}>Login</Button>
            <Button  variant={`login`} className=" bg-red-700"  onClick={()=>onOpen("signup")}>Signup</Button>
            
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
