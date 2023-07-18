import { LeftContent } from "./LeftContent";
import { RightContent } from "./RightContent";

export const Footer = () => {
  return (
    <div className="flex-grow w-full p-4 bg-[#10102b] bg-footer-bg bg-no-repeat grid grid-cols-1 lg:grid-cols-2 place-items-center">
      <LeftContent />
      <RightContent />
    </div>
  );
};
