"use client";
import { useSelector } from "react-redux";
import BtnComp from "./BtnComp";
import ProductCard from "./ProductCard";
import { TShortProduct } from "@/utils/types";
import { selectFilterState } from "@/app/slices/FilterSlice";
import { useMemo, useState } from "react";
import { current } from "@reduxjs/toolkit";

type ProductsProps = {
  renderProducts?: number;
  renderShowMore?: boolean;
  data: TShortProduct[];
  applyFilters?: boolean;
  renderPagination?: boolean;
  pageSize?: number;
};

function Products({
  renderShowMore = false,
  renderProducts = 0,
  data,
  applyFilters = false,
  renderPagination = false,
  pageSize = 4,
}: ProductsProps) {
  const { showDiscountedOnly } = useSelector(selectFilterState);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    if (!applyFilters) return data;
    if (showDiscountedOnly) return data.filter((p) => p.isDiscounted);
    return data;
  }, [data, applyFilters, showDiscountedOnly]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, currentPage, pageSize]);

  const goNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-60 mt-10">
        {(renderPagination ? paginatedData : filteredData).map(
          (product, index) => {
            if (renderProducts !== 0 && index > renderProducts - 1) return;
            return <ProductCard key={product.id} data={product} />;
          }
        )}
      </div>
      {renderShowMore && <BtnComp type="addition">Show More</BtnComp>}
      {renderPagination && (
        <div className="flex items-center justify-center gap-x-10 mt-10">
          <BtnComp
            onClick={goPrev}
            type="main"
            additionalStyles={`px-7 ${currentPage === 1 ? "opacity-0" : ""}`}
          >
            Previous
          </BtnComp>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <BtnComp
            onClick={goNext}
            type="main"
            additionalStyles={`px-10
              ${currentPage === totalPages ? "opacity-0" : ""}
            `}
          >
            Next
          </BtnComp>
        </div>
      )}
    </>
  );
}

export default Products;
