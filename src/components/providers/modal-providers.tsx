import { useEffect, useState } from "react";
import SignupModal from "../modal/sign-up-modal";
import LoginModal from "../modal/login-modal";



export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <SignupModal/>
      <LoginModal/>
    </>
  );
};
