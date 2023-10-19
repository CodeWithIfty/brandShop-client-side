import { Carousel } from "flowbite-react";
const ProductCarousel = ({ products }) => {
  return (
    <Carousel slideInterval={2000}>
      {products?.slice(0,3).map(({ _id, product_img, product_name }) => (
        <img key={_id} alt="..." src={product_img} className=" h-[500px]" />
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
