import { IoMdOptions } from "react-icons/io";

function FilterComp() {
  return (
    <div className="bg-main w-full h-[80px] -translate-y-2">
      <div className="flex items-center justify-around h-full">
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-2">
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
  );
}

export default FilterComp;
