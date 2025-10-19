"use client";
import { selectPictures } from "@/app/slices/pictureSelectorSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  const pictures = useSelector(selectPictures);
  const [selectedId, setSelectedId] = useState(null);

  console.log(pictures);

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
      <div className="flex items-center justify-between">
        <div>picture select</div>
        <div>picture</div>
        <div>info</div>
      </div>
    </main>
  );
}
