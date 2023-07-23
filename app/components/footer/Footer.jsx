import { LeftContent } from "./LeftContent";
import { RightContent } from "./RightContent";

export const Footer = () => {
  return (
    <div className="max-h-screen w-full flex-grow p-4 bg-[#10102b] bg-footer-bg bg-no-repeat flex flex-col gap-8 lg:flex-row justify-center lg:justify-around items-center">
      <LeftContent />
      <RightContent />
    </div>
  );
};
