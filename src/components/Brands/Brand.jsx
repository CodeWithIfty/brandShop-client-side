import { motion } from "framer-motion";
export default function Brand({ name, img, variants }) {
  return (
    <motion.div
      variants={variants}
      className="relative w-48 h-48 cursor-pointer rounded-full overflow-hidden hover:shadow-lg transition duration-300"
    >
      <div className="w-full h-full absolute z-10 transition duration-300 ">
        <img src={img} alt={name} className="object-cover w-full h-full " />
      </div>
      <div className="flex items-center justify-center w-full h-full absolute z-20 hover:scale-150 transition duration-300 hover:bg-[#FF6600] hover:bg-opacity-50 text-[#FF6600]  hover:text-white ]">
        <span className=" text-2xl font-bold shadow-2xl ">{name}</span>
      </div>
    </motion.div>
  );
}
