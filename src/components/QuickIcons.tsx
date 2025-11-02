"use client";
import { showDialog } from "@/app/slices/GlobalDialogSlice";
import { SlUser, SlMagnifier, SlHeart, SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";

function QuickIcons() {
  const dispatch = useDispatch();
  return (
    <div className="flex space-x-8">
      <button className="hover:cursor-pointer">
        <SlUser size={20} />
      </button>
      <button className="hover:cursor-pointer">
        <SlMagnifier size={20} />
      </button>
      <button className="hover:cursor-pointer">
        <SlHeart size={20} />
      </button>
      <button
        onClick={() => dispatch(showDialog())}
        className="hover:cursor-pointer"
      >
        <SlBasket size={20} />
      </button>
    </div>
  );
}

export default QuickIcons;
