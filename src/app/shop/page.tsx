"use client";

import FilterComp from "@/components/FilterComp";
import Products from "@/components/Products";
import HeaderPicture from "@/components/HeaderPicture";
import InfoBanner from "@/components/InfoBanner";

function Page() {
  return (
    <main className="w-full">
      <HeaderPicture topTitle="Shop" bottomRoute="Shop" />
      <FilterComp />
      <ProductSection />
      <InfoBanner />
    </main>
  );
}

export default Page;

const ProductSection = () => {
  return (
    <section>
      <Products applyFilters={true} renderPagination={true} />
    </section>
  );
};
