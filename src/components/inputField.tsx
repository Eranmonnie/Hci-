import { FC } from "react";

interface inputProps {
  thing: string;
}

const InputField: FC<inputProps> = ({ thing }) => {
  return (
    <>
      <div className="flex h-11 items-center justify-center border border-[#140DBD] bg-white rounded-md">
        <div className="w-[20%] h-full flex justify-center items-center border-r border-r-[#140DBD]">
          {thing == "email" ? (
            <svg
              width="29"
              height="24"
              viewBox="0 0 29 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px] h-[20px]"
            >
              <path
                d="M29 3C29 1.35 27.695 0 26.1 0H2.9C1.305 0 0 1.35 0 3V21C0 22.65 1.305 24 2.9 24H26.1C27.695 24 29 22.65 29 21V3ZM26.1 3L14.5 10.5L2.9 3H26.1ZM26.1 21H2.9V6L14.5 13.5L26.1 6V21Z"
                fill="#140DBD"
              />
            </svg>
          ) : (
            <svg
              width="26"
              height="31"
              viewBox="0 0 26 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px] h-[20px]"
            >
              <path
                d="M13 23.619C12.138 23.619 11.3114 23.308 10.7019 22.7543C10.0924 22.2006 9.75 21.4497 9.75 20.6667C9.75 19.0281 11.1962 17.7143 13 17.7143C13.862 17.7143 14.6886 18.0253 15.2981 18.579C15.9076 19.1327 16.25 19.8836 16.25 20.6667C16.25 21.4497 15.9076 22.2006 15.2981 22.7543C14.6886 23.308 13.862 23.619 13 23.619ZM22.75 28.0476V13.2857H3.25V28.0476H22.75ZM22.75 10.3333C23.612 10.3333 24.4386 10.6444 25.0481 11.1981C25.6576 11.7517 26 12.5027 26 13.2857V28.0476C26 28.8306 25.6576 29.5816 25.0481 30.1353C24.4386 30.6889 23.612 31 22.75 31H3.25C2.38805 31 1.5614 30.6889 0.951903 30.1353C0.34241 29.5816 0 28.8306 0 28.0476V13.2857C0 11.6471 1.44625 10.3333 3.25 10.3333H4.875V7.38095C4.875 5.4234 5.73102 3.54603 7.25476 2.16183C8.77849 0.777634 10.8451 0 13 0C14.067 0 15.1235 0.190914 16.1093 0.561842C17.0951 0.932769 17.9908 1.47645 18.7452 2.16183C19.4997 2.84722 20.0982 3.66089 20.5065 4.55638C20.9148 5.45188 21.125 6.41167 21.125 7.38095V10.3333H22.75ZM13 2.95238C11.7071 2.95238 10.4671 3.41896 9.55285 4.24948C8.63861 5.08 8.125 6.20642 8.125 7.38095V10.3333H17.875V7.38095C17.875 6.20642 17.3614 5.08 16.4471 4.24948C15.5329 3.41896 14.2929 2.95238 13 2.95238Z"
                fill="#140DBD"
              />
            </svg>
          )}
        </div>
        <input
          type={thing}
          name={thing}
          id={thing}
          placeholder={
            thing == "email" ? `favourakinlesi@bmail.com` : `password`
          }
          className="w-full h-full border-none bg-transparent outline-none  p-3"
        />
      </div>
    </>
  );
};

export default InputField;
