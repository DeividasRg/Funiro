"use client";
import { IoMdOptions } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleShowExtra,
  setShowDiscountedOnly,
  selectFilterState,
  setNewSort,
  removeKeywordFromCustomFilter,
  addKeywordToCustomFilter,
} from "@/app/slices/FilterSlice";
import BtnComp from "./BtnComp";
import {
  selectPaginationState,
  setPageSize,
} from "@/app/slices/PaginationSlice";
import { TShortProduct } from "@/utils/types";
import { ChangeEvent } from "react";
import { customFiltersForFiltering } from "@/utils/constants";

type FilterCompProps = {
  data: TShortProduct[];
};

function FilterComp({ data }: FilterCompProps) {
  const dispatch = useDispatch();
  const { showExtra, showDiscountedOnly, sort, customFilter } =
    useSelector(selectFilterState);
  const { startIndex, pageSize } = useSelector(selectPaginationState);

  const setPageSizeInComponent = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPageSize(Number(e.target.value)));
  };

  const setSort = (e: ChangeEvent<HTMLSelectElement>) => {
    if (
      e.target.value === "default" ||
      e.target.value === "asc" ||
      e.target.value === "desc"
    ) {
      dispatch(setNewSort(e.target.value));
    }
  };

  const toggleKeyword = (key: string) => {
    if (customFilter === key) {
      dispatch(removeKeywordFromCustomFilter());
    }
    if (customFilter !== key) {
      dispatch(removeKeywordFromCustomFilter());
      dispatch(addKeywordToCustomFilter(key));
    }
  };

  return (
    <>
      <div className="bg-main w-full h-[80px] -translate-y-2">
        <div className="flex items-center justify-around h-full">
          <div className="flex items-center gap-x-5">
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={() => dispatch(toggleShowExtra())}
            >
              <IoMdOptions size={20} />
              <p>Filter</p>
            </div>
            <p>|</p>
            <p>
              Showing {startIndex + 1}-{startIndex + pageSize} results of{" "}
              {data.length}
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <p>Show Maximum</p>
            <select
              className="bg-white outline-0 shadow-xs w-[70px] text-center p-2 cursor-pointer"
              value={pageSize}
              onChange={(e) => setPageSizeInComponent(e)}
            >
              <option value="8">8</option>
              <option value="16">16</option>
            </select>
            <p>And Sorting By</p>
            <select
              className="bg-white outline-0 shadow-xs w-[150px] text-center p-2 cursor-pointer"
              value={sort}
              onChange={(e) => setSort(e)}
            >
              <option value="default">Default</option>
              <option value="asc">Price Ascending</option>
              <option value="desc">Price Descendings</option>
            </select>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showExtra && (
          <motion.div
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-main w-full border-t border-zinc-900/10 flex justify-between px-10 py-5 overflow-hidden -translate-y-2"
          >
            <BtnComp
              type="switch"
              onClick={() => dispatch(setShowDiscountedOnly())}
              additionalStyles={
                showDiscountedOnly
                  ? "bg-secondary-main text-white shadow-inner transition"
                  : ""
              }
            >
              Only Discounted
            </BtnComp>
            <div className="space-x-2">
              {customFiltersForFiltering.map((filter) => (
                <BtnComp
                  key={filter}
                  type="switch"
                  onClick={() => toggleKeyword(filter)}
                  additionalStyles={
                    customFilter === filter
                      ? "bg-secondary-main text-white shadow-inner transition"
                      : ""
                  }
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}s
                </BtnComp>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FilterComp;
