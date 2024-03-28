import { FC } from "react";

interface aboutProps {
  intro: String;
  data: String;
}

export const AboutComp: FC<aboutProps> = ({ intro, data }) => {
  return (
    <div className="w-[50%]">
      <h3 className="text-lg mb-2">{intro}</h3>
      <p className="">{data}</p>
    </div>
  );
};
