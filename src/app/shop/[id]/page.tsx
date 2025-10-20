"use client";
import Counter from "@/components/Counter";
import StarRating from "@/components/StarRating";
import { cn } from "@/utils/utils";
import Image from "next/image";
import { useState } from "react";

type PageProps = {
  params: {
    id: string;
  };
};

const mockImages = [
  {
    id: 1,
    url: "https://picsum.photos/id/237/300/200",
    title: "First",
    availableSizes: [{ id: 1, size: "S" }],
    colors: [
      { id: 1, color: "#F56" },
      { id: 2, color: "#65F" },
      { id: 3, color: "#5AF" },
    ],
  },
  {
    id: 2,
    url: "https://picsum.photos/id/238/300/200",
    title: "Second",
    availableSizes: [
      { id: 1, size: "S" },
      { id: 2, size: "M" },
    ],
    colors: [
      { id: 1, color: "#85F" },
      { id: 2, color: "#99F" },
      { id: 3, color: "#77F" },
    ],
  },
  {
    id: 3,
    url: "https://picsum.photos/id/239/300/200",
    title: "Third",
    availableSizes: [
      { id: 1, size: "S" },
      { id: 2, size: "M" },
      { id: 3, size: "L" },
    ],
    colors: [
      { id: 1, color: "#FFF" },
      { id: 2, color: "#F1F" },
      { id: 3, color: "#548" },
    ],
  },
];

export default function Page({ params }: PageProps) {
  const [selectedPictureId, setSelectedPictureId] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState(1);
  const [selectedColorId, setSelectedColorId] = useState(1);
  const [count, setCount] = useState(1);

  const increaseValue = () => {
    setCount(count + 1);
  };

  const decreaseValue = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const changeImage = (id: number) => {
    setSelectedPictureId(id);
    setSelectedSizeId(1);
    setSelectedColorId(1);
    setCount(1);
  };

  const changeSize = (id: number) => {
    setSelectedSizeId(id);
  };

  const changeColorId = (id: number) => {
    setSelectedColorId(id);
  };

  return (
    <main>
      <div className="flex items-center justify-start p-10 gap-x-5 bg-main">
        <p className="text-zinc-900/50">Home</p>
        <p className="font-bold">&gt;</p>
        <p className="text-zinc-900/50">Shop</p>
        <p className="">&gt;</p>
        <p>|</p>
        <p className="font-bold">Asgaard sofa</p>
      </div>
      <div className="flex py-10 gap-x-10 pl-20">
        <div className="flex">
          <div className="flex flex-col space-y-5 mr-5">
            {mockImages.map((image) => (
              <button
                key={image.id}
                onClick={() => changeImage(image.id)}
                className="border-[5px] rounded-xl border-main/0 hover:cursor-pointer hover:border-[5px] hover:border-main transition"
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
              </button>
            ))}
          </div>
          <div className="flex-none">
            <Image
              src={mockImages.find((img) => img.id === selectedPictureId)!.url}
              alt="Selected"
              width={750}
              height={750}
            />
          </div>
        </div>
        <div className="space-y-5">
          <div className="space-y-1">
            <h1 className="text-5xl">Asgaard sofa</h1>
            <p className="text-2xl font-bold text-zinc-900/40">$500</p>
          </div>
          <div className="flex items-center gap-x-4">
            <StarRating rating={3.1} /> <p className="text-zinc-900/50">|</p>
            <p className="text-zinc-900/50">5 Customer Reviews</p>
          </div>
          <p className="max-w-[450px] text-base">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stou-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="space-x-2 space-y-2">
            <p className="text-zinc-900/50">Size</p>
            {mockImages
              .find((img) => img.id === selectedPictureId)!
              .availableSizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => changeSize(size.id)}
                  className={cn(
                    "text-zinc-900, px-3 py-2 rounded-xl bg-main transition",
                    {
                      "bg-secondary-main text-white":
                        size.id === selectedSizeId,
                    },
                    {
                      "hover:cursor-pointer hover:bg-secondary-main hover:text-white":
                        size.id !== selectedSizeId,
                    }
                  )}
                >
                  {size.size}
                </button>
              ))}
          </div>
          <div className="space-x-2 space-y-2">
            <p className="text-zinc-900/50">Color</p>
            {mockImages
              .find((img) => img.id === selectedPictureId)!
              .colors.map((color) => (
                <button
                  style={{ backgroundColor: color.color }}
                  key={color.id}
                  onClick={() => changeColorId(color.id)}
                  className={cn(
                    `aspect-square w-8 rounded-full shadow`,
                    {
                      "scale-110 shadow-xl": color.id === selectedColorId,
                    },
                    {
                      "hover:cursor-pointer hover:scale-105 transition":
                        color.id !== selectedColorId,
                    }
                  )}
                />
              ))}
          </div>
          <div className="flex items-center gap-x-5">
            <Counter
              maximumValue={5}
              count={count}
              increaseValue={increaseValue}
              decreaseValue={decreaseValue}
            />
            <button className="font-bold border border-zinc-900 px-12 py-4 rounded-xl hover:bg-secondary-main hover:cursor-pointer hover:text-white transition">
              Add To Cart
            </button>
            <button className="font-bold border border-zinc-900 px-12 py-4 rounded-xl hover:bg-secondary-main hover:cursor-pointer hover:text-white transition">
              + Compare
            </button>
          </div>
          <div className="border-b mt-15 border-zinc-900/40" />
          <div className="text-zinc-900/40 flex justify-start gap-x-10">
            <div className="space-y-2">
              <p>SKU</p>
              <p>Category</p>
              <p>Tags</p>
            </div>
            <div className="space-y-2">
              <p>: SS001</p>
              <p>: Sofas</p>
              <p>: Sofa, Chair, Home, Shop</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
