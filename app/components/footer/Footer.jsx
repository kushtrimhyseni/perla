import { LeftContent } from "./LeftContent";
import { RightContent } from "./RightContent";

export const Footer = () => {
  return (
    <div className="max-h-screen w-full flex-grow p-4 bg-[#10102b] bg-footer-bg bg-no-repeat grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <LeftContent />
      <RightContent />
    </div>
  );
};
