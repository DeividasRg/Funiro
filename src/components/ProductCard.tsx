"use client";
import CircleComponent from "./CircleComponent";
import { CiShare2 } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import BtnComp from "./BtnComp";
import Link from "next/link";
import Image from "next/image";
import { TShortProduct } from "@/utils/schema";

function ProductCard({ data }: { data: TShortProduct }) {
  return (
    <Link href={`/shop/${data.id}`}>
      <div className="group basis-1/4 h-[400px] bg-zinc-200 shadow relative">
        <HoverComponent />
        <Image
          src={data.previewImage}
          width={200}
          height={200}
          alt={data.name}
          className="w-full h-[260px]"
        />

        {data.isDiscounted && (
          <CircleComponent type="discount">
            {data.discountPercentage}
          </CircleComponent>
        )}
        {data.isNew && <CircleComponent type="new">New</CircleComponent>}
        <div className="text-left p-4 space-y-1">
          <p className="font-bold text-base">{data.name}</p>
          <p className="text-zinc-900/50">{data.shortSynopsis}</p>
          <div className="mt-4 flex justify-between items-center">
            <p className="font-bold">${data.price}</p>

            {data.isDiscounted && (
              <p className="text-zinc-900/50 line-through">
                ${data.priceWithoutDiscount}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

const HoverComponent = () => {
  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    action: "addToCart" | "share" | "compare" | "like"
  ) => {
    e.stopPropagation();
    e.preventDefault();

    switch (action) {
      case "addToCart":
        console.log("Add to cart clicked!");
        break;
      case "share":
        console.log("Share clicked!");
        break;
      case "compare":
        console.log("Compare clicked!");
        break;
      case "like":
        console.log("Like clicked!");
        break;
      default:
        break;
    }
  };

  return (
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-99">
      <div className="flex flex-col gap-y-5 items-center justify-center">
        <BtnComp
          type="secondary"
          onClick={(e) => handleButtonClick(e, "addToCart")}
        >
          Add to cart
        </BtnComp>

        <div className="flex items-center justify-center text-white gap-x-3 ">
          <button
            onClick={(e) => handleButtonClick(e, "share")}
            className="hover:cursor-pointer flex items-center gap-x-2"
          >
            <span>
              <CiShare2 />
            </span>
            Share
          </button>
          <button
            onClick={(e) => handleButtonClick(e, "compare")}
            className="hover:cursor-pointer flex items-center gap-x-2"
          >
            <span>
              <IoIosGitCompare />
            </span>
            Compare
          </button>
          <button
            onClick={(e) => handleButtonClick(e, "like")}
            className="hover:cursor-pointer flex items-center gap-x-2"
          >
            <span>
              <CiHeart />
            </span>
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
