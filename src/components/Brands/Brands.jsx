import { Link } from "react-router-dom";
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
      img: "https://i.ibb.co/56drWXc/580b57fbd9996e24bc43c0e3.png",
      name: "Coca-Cola",
    },
    {
      img: "https://i.ibb.co/30gwF6j/571-5714853-clipart1132388-circle-mcdonalds-logo-png-transparent-png.png",
      name: "Macdonald's",
    },
    {
      img: "https://i.ibb.co/j4cbqGD/2034px-Starbucks-Corporation-Logo-2011-svg.png",
      name: "Starbucks",
    },
    {
      img: "https://i.ibb.co/gm0zrvm/ddcogmf-77342029-de40-4b3b-afda-fd224cddaa68.png",
      name: "PepsiCo",
    },
    {
      img: "https://i.ibb.co/HxR4xh8/df58399762267930359bdc4bfbc7a9a2.jpg",
      name: "Nestlé",
    },
    {
      img: "https://i.ibb.co/3TFTySP/png-clipart-kellogg-s-frosted-flakes-rice-krispies-business-nyse-k-business-removebg-preview-1.png",
      name: "Kellogg's",
    },
  ];
  return (
    <motion.div
      variants={container}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="show"
      className="grid xl:grid-cols-6 py-10 lg:grid-cols-3 grid-cols-2   md:gap-10 gap-5"
    >
      {brands.map((item, i) => {
        return (
          <Link key={i} to={`/brand/${item.name}`}>
            <Brand variants={items} name={item.name} img={item.img} />
          </Link>
        );
      })}
    </motion.div>
  );
}
