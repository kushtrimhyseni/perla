import { Facebook } from "./social-media/Facebook";
import { Instagram } from "./social-media/Instagram";
import { TikTok } from "./social-media/TikTok";

export const SocialMedia = () => {
  return (
    <div className="w-full flex justify-end md:justify-between items-end md:items-center max-w-[480px] h-full md:border-l-[1px] md:border-r-[1px] border-slate-400 mr-4 md:mt-0 md:mr-12 lg:mr-28">
      <span className="text-white font-normal text-xl lg:text-2xl pl-0 md:pl-12 hidden md:block">
        Join our community
      </span>
      <div className="flex gap-4 items-center pr-0 md:pr-12">
        <Facebook />
        <Instagram />
        <TikTok />
      </div>
    </div>
  );
};
