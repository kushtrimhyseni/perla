import Image from "next/image";
import bannerImage from "../../../public/assets/bannerImage.webp";
export const HeroBanner = () => {
  return (
    <div className="w-full">
      <Image
        src={bannerImage}
        width={1920}
        height={420}
        className="w-full object-cover h-[380px] md:h-[530px] md:max-h-[530px]"
      />
    </div>
  );
};
