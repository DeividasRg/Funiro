"use client";
import Image, { StaticImageData } from "next/image";
import CircleComponent from "./CircleComponent";
import { CiShare2 } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import BtnComp from "./BtnComp";
import Link from "next/link";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    shortDescription: string;
    price: string;
    priceWithoutDiscount: string | null;
    isNew: boolean;
    isDiscounted: boolean;
    discounterPercentage: number | null;
    image: string | StaticImageData;
  };
};

function ProductCard({ product }: ProductCardProps) {
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
    <Link href={`/shop/${product.id}`}>
      <div className="group basis-1/4 h-[400px] bg-zinc-200 shadow relative">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-99">
          <div className="space-y-5">
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
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-[260px]"
        />

        {product.isDiscounted && (
          <CircleComponent type="discount">
            {product.discounterPercentage}
          </CircleComponent>
        )}
        {product.isNew && <CircleComponent type="new">New</CircleComponent>}
        <div className="text-left p-4 space-y-1">
          <p className="font-bold text-base">{product.name}</p>
          <p className="text-zinc-900/50">{product.shortDescription}</p>
          <div className="mt-4 flex justify-between items-center">
            <p className="font-bold">{product.price}</p>

            {product.isDiscounted && (
              <p className="text-zinc-900/50 line-through">
                {product.priceWithoutDiscount}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
