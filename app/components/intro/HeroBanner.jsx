import Image from "next/image";
import bannerImage from "../../../public/assets/bannerImage.webp";
export const HeroBanner = () => {
  return (
    <div className="w-full">
      <Image
        src={bannerImage}
        width={1920}
        height={420}
        className="w-full h-[410px] max-h-[420px]"
      />
    </div>
  );
};