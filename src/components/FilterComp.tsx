"use client";
import { IoMdOptions } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleShowExtra,
  setShowDiscountedOnly,
  selectFilterState,
} from "@/app/slices/FilterSlice";
import BtnComp from "./BtnComp";

function FilterComp() {
  const dispatch = useDispatch();
  const { showExtra, showDiscountedOnly } = useSelector(selectFilterState);

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
            <p>Showing 1-16 of 32 results</p>
          </div>
          <div className="flex items-center gap-x-3">
            <p>Show</p>
            <input
              type="number"
              className="bg-white outline-0 shadow-xs w-[50px] text-center p-2"
              placeholder="16"
            />
            <p>Sort By</p>
            <input
              type="text"
              className="bg-white outline-0 shadow-xs w-[100px] text-center p-2"
              placeholder="Default"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showExtra && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }} // start 20px above
            animate={{ height: "auto", opacity: 1, y: 0 }} // slide to normal position
            exit={{ height: 0, opacity: 0, y: -20 }} // slide back up
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-main w-full overflow-hidden -translate-y-2 border-t border-zinc-900/10 flex justify-start pl-10 py-5 "
          >
            <BtnComp
              type="custom"
              onClick={() => dispatch(setShowDiscountedOnly())}
              additionalStyles="p-2 border rounded-full border-zinc-900/40 bg-main"
            >
              Only Discounted
            </BtnComp>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FilterComp;
