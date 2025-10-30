"use client";
import useProduct from "@/hooks/useProduct";
import RelatedProducts from "./components/RelatedProducts";
import AdditionalInfo from "./components/AdditionalInfo";
import ProductInfo from "./components/ProductInfo";
import PictureSelect from "./components/PictureSelect";
import BreadCrumbs from "./components/BreadCrumbs";
import { useGetProductByIdQuery } from "@/app/slices/SupabaseApi";
import React, { Usable } from "react";

export default function Page({ params }: { params: Usable<unknown> }) {
  const { id } = React.use(params) as { id: string };
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  const {
    selectedPictureId,
    selectedSizeId,
    selectedColorId,
    count,
    selectedSectionId,
    changeSelectedSectionId,
    increaseValue,
    decreaseValue,
    changeImage,
    changeColorId,
    changeSize,
  } = useProduct(product);

  if (isLoading)
    return (
      <main className="animate-pulse p-20">
        <div className="h-6 w-40 bg-gray-300 rounded mb-8" /> {/* Breadcrumb */}
        <div className="flex gap-x-10">
          <div className="w-96 h-96 bg-gray-300 rounded" />{" "}
          {/* Product Image */}
          <div className="flex flex-col gap-4 w-80">
            <div className="h-6 w-full bg-gray-300 rounded" />
            <div className="h-6 w-2/3 bg-gray-300 rounded" />
            <div className="h-10 w-32 bg-gray-300 rounded" />
            <div className="h-10 w-40 bg-gray-300 rounded" />
          </div>
        </div>
      </main>
    );
  if (error || !product) return <p>Error</p>;

  return (
    <main>
      <BreadCrumbs product={product} />
      <InfoWrapper>
        <PictureSelect
          selectedPictureId={selectedPictureId}
          changeImage={changeImage}
          product={product}
        />
        <ProductInfo
          changeSize={changeSize}
          changeColorId={changeColorId}
          selectedSizeId={selectedSizeId}
          selectedColorId={selectedColorId}
          count={count}
          increaseValue={increaseValue}
          decreaseValue={decreaseValue}
          product={product}
        />
      </InfoWrapper>

      <AdditionalInfo
        changeSelectedSectionId={changeSelectedSectionId}
        selectedSectionId={selectedSectionId}
        product={product}
      />
      <RelatedProducts />
    </main>
  );
}

const InfoWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex py-10 gap-x-10 pl-20">{children}</div>;
};
