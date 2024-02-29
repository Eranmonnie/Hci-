const Nav = () => {
  return (
    <>
      <nav className="flex justify-between bg-[#140DBD] py-1 pl-7 pr-[10%]">
        <span className="text-2xl text-white font-bold">BUHREC</span>
        <div className="flex justify-center items-center gap-4">
          <span className="text-white text-sm">Bayo Balogun</span>
          <img src="src/assets/imageprofile.png" alt="pp" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
