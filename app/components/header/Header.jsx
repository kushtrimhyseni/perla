import { Logo } from "./Logo";
import { SocialMedia } from "./SocialMedia";

export default function Header() {
  return (
    <div className="bg-[#10102b] p-4 md:p-0 w-full h-full md:h-16 lg:h-24 flex justify-between items-center">
      <Logo />
      <SocialMedia />
    </div>
  );
}
