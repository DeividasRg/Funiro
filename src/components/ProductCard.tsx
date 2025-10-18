import Image, { StaticImageData } from "next/image";
import CircleComponent from "./CircleComponent";
import { CiShare2 } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import BtnComp from "./BtnComp";

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
  return (
    <div className="group basis-1/4 h-[400px] bg-zinc-200 shadow relative">
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-99">
        <div className="space-y-5">
          <BtnComp type="secondary">Add to cart</BtnComp>
          <div className="flex items-center justify-center text-white gap-x-3 ">
            <button className="hover:cursor-pointer flex items-center gap-x-2">
              <span>
                <CiShare2 />
              </span>
              Share
            </button>
            <button className="hover:cursor-pointer flex items-center gap-x-2">
              <span>
                <IoIosGitCompare />
              </span>
              Compare
            </button>
            <button className="hover:cursor-pointer flex items-center gap-x-2">
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
  );
}

export default ProductCard;
