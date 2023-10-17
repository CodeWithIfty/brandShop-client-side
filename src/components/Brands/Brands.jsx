import Brand from "./Brand";
import { motion } from "framer-motion";

export default function Brands() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
  };
  const items = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  const brands = [
    {
      img: "https://i.ibb.co/Ky1Vhdj/coca-cola.webp",
      name: "Coca-Cola",
    },
    {
      img: "https://i.ibb.co/HY21jBr/4342270a-4ead-11ec-9c1b-c6b8ef9d8663-mcdonalds4.jpg",
      name: "McDonald's",
    },
    {
      img: "https://i.ibb.co/5W87bBy/10710-pe-starbucks-packaging-87516.jpg",
      name: "Starbucks",
    },
    {
      img: "https://i.ibb.co/7VzRxyk/FRMSIG573-NP7-XJ3-KQWR33-H3-V64.jpg",
      name: "PepsiCo",
    },
    {
      img: "https://i.ibb.co/CwZWb6H/637861301570268886-Family2017joined.jpg",
      name: "Nestlé",
    },
    {
      img: "https://i.ibb.co/HHQvS9G/636428822665200914-IMG-Kellogg-s-2-1-50-II330-E-1.webp",
      name: "Kellogg's",
    },
  ];
  return (
    <motion.div
      variants={container}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-6 py-10  "
    >
      {brands.map((item, i) => {
        return (
          <Brand key={i} variants={items} name={item.name} img={item.img} />
        );
      })}
    </motion.div>
  );
}
