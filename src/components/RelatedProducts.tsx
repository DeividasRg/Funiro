import Products from "@/components/Products";

function RelatedProducts() {
  return (
    <div className="my-10 text-center space-y-10">
      <div className="w-full border-b border-zinc-900/20" />
      <h1 className="text-3xl mt-10 text-center">Related Products</h1>
      <Products renderProducts={4} renderShowMore={true} />
    </div>
  );
}

export default RelatedProducts;
