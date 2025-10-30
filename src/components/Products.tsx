"use client";
import { useDispatch, useSelector } from "react-redux";
import BtnComp from "./BtnComp";
import ProductCard from "./ProductCard";
import { selectFilterState } from "@/app/slices/FilterSlice";
import { useEffect, useMemo } from "react";
import {
  selectPaginationState,
  setCurrentPage,
  updatePagination,
} from "@/app/slices/PaginationSlice";
import { filterData } from "@/utils/utils";
import { TShortProduct } from "@/utils/schema";
import { useGetShortProductsQuery } from "@/app/slices/SupabaseApi";

type ProductsProps = {
  renderProducts?: number;
  renderShowMore?: boolean;
  applyFilters?: boolean;
  renderPagination?: boolean;
};

function Products({
  renderShowMore = false,
  renderProducts = 0,
  applyFilters = false,
  renderPagination = false,
}: ProductsProps) {
  const dispatch = useDispatch();
  const { showDiscountedOnly, sort, customFilter } =
    useSelector(selectFilterState);
  const { paginatedData, currentPage, totalPages, pageSize } = useSelector(
    selectPaginationState
  );
  const { data = [], isLoading, error } = useGetShortProductsQuery();

  const filteredData = useMemo(
    () =>
      applyFilters
        ? filterData(showDiscountedOnly, data, customFilter, sort)
        : data,
    [data, applyFilters, showDiscountedOnly, sort, customFilter]
  );

  useEffect(() => {
    if (filteredData.length > 0) {
      dispatch(updatePagination({ data: filteredData }));
    }
  }, [filteredData, dispatch, pageSize, currentPage]);

  const updatePage = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
    dispatch(updatePagination({ data: filteredData }));
  };

  const goNext = () => updatePage(Math.min(currentPage + 1, totalPages));
  const goPrev = () => updatePage(Math.max(currentPage - 1, 1));

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
        <Pagination
          goPrev={goPrev}
          goNext={goNext}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
}

export default Products;

function Pagination({
  goPrev,
  goNext,
  currentPage,
  totalPages,
}: {
  goPrev: () => void;
  goNext: () => void;
  currentPage: number;
  totalPages: number;
}) {
  return (
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
  );
}
