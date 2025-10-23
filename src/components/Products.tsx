"use client";
import { useDispatch, useSelector } from "react-redux";
import BtnComp from "./BtnComp";
import ProductCard from "./ProductCard";
import { TShortProduct } from "@/utils/types";
import { selectFilterState } from "@/app/slices/FilterSlice";
import { useEffect, useMemo } from "react";
import {
  selectPaginationState,
  setCurrentPage,
  updatePagination,
} from "@/app/slices/PaginationSlice";

type ProductsProps = {
  renderProducts?: number;
  renderShowMore?: boolean;
  data: TShortProduct[];
  applyFilters?: boolean;
  renderPagination?: boolean;
};

function Products({
  renderShowMore = false,
  renderProducts = 0,
  data,
  applyFilters = false,
  renderPagination = false,
}: ProductsProps) {
  const dispatch = useDispatch();
  const { showDiscountedOnly, sort, customFilter } =
    useSelector(selectFilterState);
  const { paginatedData, currentPage, totalPages, pageSize } = useSelector(
    selectPaginationState
  );

  const filteredData = useMemo(() => {
    if (!applyFilters) return data;

    let result;
    if (showDiscountedOnly) {
      result = data.filter((p) => p.isDiscounted);
    } else {
      result = data;
    }

    if (customFilter.trim() !== "") {
      const keyword = customFilter.toLowerCase();
      result = [...result].filter((item) =>
        item.shortSynopsis.toLowerCase().includes(keyword)
      );
    }

    if (sort === "asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [data, applyFilters, showDiscountedOnly, sort, customFilter]);

  useEffect(() => {
    dispatch(updatePagination({ data: filteredData }));
  }, [filteredData, dispatch, pageSize, currentPage]);

  const goNext = () => {
    dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)));
    dispatch(updatePagination({ data: filteredData }));
  };

  const goPrev = () => {
    dispatch(setCurrentPage(Math.max(currentPage - 1, 1)));
    dispatch(updatePagination({ data: filteredData }));
  };

  return (
    <>
      {filteredData.length === 0 && (
        <p className="text-c  enter mt-10">Try filtering something else</p>
      )}
      <div className="grid grid-cols-4 gap-4 px-60 mt-10">
        {(renderPagination ? paginatedData : filteredData).map(
          (product: TShortProduct, index: number) => {
            if (renderProducts !== 0 && index > renderProducts - 1) return;
            return <ProductCard key={product.id} data={product} />;
          }
        )}
      </div>
      {renderShowMore && <BtnComp type="addition">Show More</BtnComp>}
      {renderPagination && totalPages > 1 && (
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
