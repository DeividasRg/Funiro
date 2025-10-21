import ProductCard from "./ProductCard";
import { TShortProduct } from "@/utils/types";

type ProductsProps = {
  renderProducts?: number;
  renderShowMore?: boolean;
  data: TShortProduct[];
};

function Products({
  renderShowMore = false,
  renderProducts = 0,
  data,
}: ProductsProps) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-60 mt-10">
        {data.map((product, index) => {
          if (renderProducts !== 0 && index > renderProducts - 1) return;
          return <ProductCard key={product.id} data={product} />;
        })}
      </div>
      {renderShowMore && (
        <button className="border-2 border-secondary-main mx-auto px-18 py-2 text-secondary-main font-bold hover:bg-main hover:cursor-pointer transition">
          Show More
        </button>
      )}
    </>
  );
}

export default Products;
