export const RightContent = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex flex-col">
      <span className="text-3xl text-[#a9a9ca] font-bold uppercase">
        perlaks@gmail.com
      </span>
      <span className="text-white mt-12 flex justify-end">
        All rights reserved @PERLA{" "}
        <span className="text-[#a9a9ca] ml-2">{year}</span>
      </span>
    </div>
  );
};
