import Brands from "./Brands";

export default function BrandSection() {
  return (
    <div className="max-w-7xl  pt-4 mx-auto">
      <div className="p-3 px-1 flex flex-col gap-10">
        <div className="flex items-center flex-col justify-center space-y-5 ">
          <h1 className="font-semibold font-[font-serif] text-5xl">
            Our <span className="text-[#FF6600]">Brands</span>
          </h1>
          <p className=" w-[35ch] text-gray-600/70 px-3 dark-text sm:w-7/12 justify-center text-center">
            Here is Our All Brands
          </p>
          <hr className="sm:w-14 w-40  border-[#FF6600] border-2 " />
        </div>
        <div className=" mx-auto">
          <Brands />
        </div>
      </div>
    </div>
  );
}
