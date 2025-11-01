import Products from "./Products";

function OurProductsComp() {
  return (
    <section className="flex flex-col gap-8 text-center">
      <div>
        <h1 className="font-extrabold text-3xl tracking-wider">Our Products</h1>
      </div>
      <Products renderShowMore={true} />
    </section>
  );
}

export default OurProductsComp;
