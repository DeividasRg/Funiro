import Image from "next/image";
import shopImg from "@/../public/shop.png";
import FilterComp from "@/components/FilterComp";
import { mockData } from "@/utils/constants";
import ProductCard from "@/components/ProductCard";
import { CiTrophy } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";

function Page() {
  return (
    <main className="w-full">
      <HeaderPicture />
      <FilterComp />
      <Products />
      <InfoBanner />
    </main>
  );
}

export default Page;

const InfoBanner = () => {
  const size = 50;
  return (
    <section className="bg-main flex items-center justify-around py-15 mt-10 px-10">
      <div className="flex gap-x-2">
        <CiTrophy size={size} />
        <div>
          <h1 className="font-bold text-xl">High Quality</h1>
          <p className="text-zinc-900/60">Crafted from top materials</p>
        </div>
      </div>
      <div className="flex gap-x-2">
        <CiCircleCheck size={size} />
        <div>
          <h1 className="font-bold text-xl">Warranty Protection</h1>
          <p className="text-zinc-900/60">Over 2 years</p>
        </div>
      </div>
      <div className="flex gap-x-2">
        <CiBoxes size={size} />
        <div>
          <h1 className="font-bold text-xl">Free Shipping</h1>
          <p className="text-zinc-900/60">Order over ﹩150</p>
        </div>
      </div>
      <div className="flex gap-x-2">
        <CiHeadphones size={size} />
        <div>
          <h1 className="font-bold text-xl">24 / 7 Support</h1>
          <p className="text-zinc-900/60">Dedicated support</p>
        </div>
      </div>
    </section>
  );
};

const Products = () => {
  return (
    <section>
      <div className="grid grid-cols-4 gap-4 px-60 mt-10 ">
        {mockData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {mockData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-x-10 mt-10">
        <button className="bg-secondary-main px-4 py-3 rounded-xl">1</button>
        <button className="bg-main px-4 py-3 rounded-xl hover:cursor-pointer hover:bg-secondary-main transition">
          2
        </button>
        <button className="bg-main px-4 py-3 rounded-xl hover:cursor-pointer hover:bg-secondary-main transition">
          3
        </button>
        <button className="bg-main px-4 py-3 rounded-xl hover:cursor-pointer hover:bg-secondary-main transition">
          Next
        </button>
      </div>
    </section>
  );
};

const HeaderPicture = () => {
  return (
    <div className="w-full relative">
      <Image
        src={shopImg}
        alt="shop"
        width={shopImg.width}
        height={shopImg.height}
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-2">
        <h1 className="font-bold text-5xl">Shop</h1>
        <p className="text-base">
          <span className="font-bold">Home &gt;</span> Shop
        </p>
      </div>
    </div>
  );
};
