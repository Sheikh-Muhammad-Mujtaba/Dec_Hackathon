import { productData } from "./data";
import ProductCard from "./ProductCard";

const products = productData;

const Card = () => (
    <div className="flex flex-wrap justify-center items-center gap-[16px] md:gap-[20px] ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );

export default Card;
