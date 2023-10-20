import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ProductCarousel = ({ products }) => {
  return (
    <Carousel slideInterval={2000}>
      {products
        ?.slice(0, 3)
        .map(({ _id, product_img, product_name, product_description }) => (
          <div className="" key={_id}>
            <img alt="..." src={product_img} className=" h-[500px]" />
            <p className="legend flex flex-col ">
              <span className="text-3xl font-bold ">{product_name}</span>{" "}
              <span className="text-sm">{product_description.substring(0,300)}...</span>
            </p>
          </div>
        ))}
    </Carousel>
  );
};

export default ProductCarousel;
