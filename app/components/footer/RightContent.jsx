export const RightContent = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex flex-col items-center md:items-end">
      <span className="text-xl text-[#a9a9ca] font-bold">
        perlaks@gmail.com
      </span>
      <span className="text-[#a9a9ca] mt-4 flex justify-center md:justify-end">
        Powered by PERLA
      </span>
    </div>
  );
};
