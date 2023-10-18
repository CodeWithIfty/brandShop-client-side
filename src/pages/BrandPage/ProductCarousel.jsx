import { Carousel } from "flowbite-react";
const ProductCarousel = ({ products }) => {
  return (
    <Carousel slideInterval={2000}>
      {products?.map(({ _id,product_img, product_name }) => (
        <img
        key={_id}
          alt="..."
          src={product_img}
        />
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
