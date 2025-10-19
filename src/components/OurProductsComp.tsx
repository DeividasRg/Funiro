import { mockData } from "@/utils/constants";
import ProductCard from "./ProductCard";

function OurProductsComp() {
  return (
    <section className="flex flex-col gap-8 text-center">
      <div>
        <h1 className="font-extrabold text-3xl tracking-wider">Our Products</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 px-60">
        {mockData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className="border-2 border-secondary-main mx-auto px-18 py-2 text-secondary-main font-bold hover:bg-main hover:cursor-pointer transition">
        Show More
      </button>
    </section>
  );
}

export default OurProductsComp;
