import Image from "next/image";
import perlaLogo from "../../../public/assets/PerlaLogo.png";
export const Logo = () => {
  return (
    <div className="md:px-12 px-28">
      <Image src={perlaLogo} width={190} height={40} />
    </div>
  );
};
