"use client";
import Counter from "@/components/Counter";
import StarRating from "@/components/StarRating";
import { cn } from "@/utils/utils";
import Image from "next/image";
import { useState } from "react";
import image1 from "@/../public/Group 106.png";
import image2 from "@/../public/Group 107.png";
import ProductCard from "@/components/ProductCard";
import { mockData } from "@/utils/constants";

type PageProps = {
  params: {
    id: string;
  };
};

const product = {
  id: "S589JX0D",
  name: "Asgaard Sofa",
  rating: 4.5,
  price: 500,
  maxCount: 5,
  category: "Sofas",
  tags: ["Sofa", "Chair", "Home", "Shop"],
  colors: [
    { id: 1, color: "#F56" },
    { id: 2, color: "#65F" },
    { id: 3, color: "#5AF" },
  ],
  availableSizes: [
    { id: 1, size: "S" },
    { id: 2, size: "M" },
    { id: 3, size: "L" },
  ],
  showCaseImages: [
    { url: image1, id: 87 },
    { url: image2, id: 58 },
  ],
  images: [
    {
      id: 1,
      url: "https://picsum.photos/id/237/300/200",
      title: "First",
    },
    {
      id: 2,
      url: "https://picsum.photos/id/238/300/200",
      title: "Second",
    },
    {
      id: 3,
      url: "https://picsum.photos/id/239/300/200",
      title: "Third",
    },
  ],
  shortDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, officiis perspiciatis laudantium consequuntur totam
            deserunt. Aut quaerat velit id, sunt ea perferendis debitis
            consequuntur explicabo expedita illo voluptatem ut harum.`,
  longDescription: `            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, officiis perspiciatis laudantium consequuntur totam
            deserunt. Aut quaerat velit id, sunt ea perferendis debitis
            consequuntur explicabo expedita illo voluptatem ut harum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
            officiis perspiciatis laudantium consequuntur totam deserunt. Aut
            quaerat velit id, sunt ea perferendis debitis consequuntur explicabo
            expedita illo voluptatem ut harum.`,
};

const sections = [
  { id: 1, title: "Description" },
  { id: 2, title: "Additional Information" },
  { id: 3, title: "Reviews" },
];

export default function Page({ params }: PageProps) {
  //needs rework
  const [selectedPictureId, setSelectedPictureId] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState(1);
  const [selectedColorId, setSelectedColorId] = useState(1);
  const [count, setCount] = useState(1);
  const [selectedSectionId, setSelectedSectionId] = useState(1);

  const changeSelectedSectionId = (id: number) => {
    setSelectedSectionId(id);
  };

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
        <p className="font-bold">{product.name}</p>
      </div>
      <div className="flex py-10 gap-x-10 pl-20">
        <div className="flex">
          <div className="flex flex-col space-y-5 mr-5">
            {product.images.map((image) => (
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
              src={
                product.images.find((img) => img.id === selectedPictureId)!.url
              }
              alt="Selected"
              width={750}
              height={750}
            />
          </div>
        </div>
        <div className="space-y-5">
          <div className="space-y-1">
            <h1 className="text-5xl">{product.name}</h1>
            <p className="text-2xl font-bold text-zinc-900/40">
              ${product.price}
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <StarRating rating={product.rating} />
            <p className="text-zinc-900/50">|</p>
            <p className="text-zinc-900/50">5 Customer Reviews</p>
          </div>
          <p className="max-w-[450px] text-base">{product.shortDescription}</p>
          <div className="space-x-2 space-y-2">
            <p className="text-zinc-900/50">Size</p>
            {product.availableSizes.map((size) => (
              <button
                key={size.id}
                onClick={() => changeSize(size.id)}
                className={cn(
                  "text-zinc-900, px-3 py-2 rounded-xl bg-main transition",
                  {
                    "bg-secondary-main text-white": size.id === selectedSizeId,
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
            {product.colors.map((color) => (
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
              maximumValue={product.maxCount}
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
          <div className="border-b mt-15 border-zinc-900/20" />
          <div className="text-zinc-900/40 flex justify-start gap-x-10">
            <div className="space-y-2">
              <p>SKU</p>
              <p>Category</p>
              <p>Tags</p>
            </div>
            <div className="space-y-2">
              <p>: {product.id}</p>
              <p>: {product.category}</p>
              <p>: {product.tags.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="w-full border-b border-zinc-900/20" />
        <div className="text-zinc-900/40 text-3xl flex justify-center gap-x-20 mt-10">
          {sections.map((section) => (
            <button
              onClick={() => changeSelectedSectionId(section.id)}
              key={section.id}
            >
              <h2
                className={cn(
                  {
                    "text-zinc-900 font-bold": section.id === selectedSectionId,
                  },
                  {
                    "hover:cursor-pointer hover:text-zinc-900 transition":
                      section.id !== selectedSectionId,
                  }
                )}
              >
                {section.title}
              </h2>
            </button>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-10 text-base space-y-5 text-zinc-900/50">
          <p>{product.shortDescription}</p>
          <p>{product.longDescription}</p>
        </div>
        <div className="flex justify-center gap-x-10 mt-10">
          {product.showCaseImages.map((image, index) => (
            <Image key={image.id} src={image.url} alt="Additional" />
          ))}
        </div>
      </div>
      <div className="my-10 text-center space-y-10">
        <div className="w-full border-b border-zinc-900/20" />
        <h1 className="text-3xl mt-10 text-center">Related Products</h1>
        <div className="grid grid-cols-4 gap-4 px-60 mt-10">
          {mockData.map((product, index) => {
            if (index > 3) return;
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <button className="border-2 border-secondary-main mx-auto px-18 py-2 text-secondary-main font-bold hover:bg-main hover:cursor-pointer transition">
          Show More
        </button>
      </div>
    </main>
  );
}
