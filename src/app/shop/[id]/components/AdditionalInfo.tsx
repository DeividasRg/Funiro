import { TProduct } from "@/utils/schema";
import { cn } from "@/utils/utils";
import Image from "next/image";

const sections = [
  { id: 1, title: "Description" },
  { id: 2, title: "Additional Information" },
  { id: 3, title: "Reviews" },
];

type AdditionalInfoProps = {
  changeSelectedSectionId: (id: number) => void;
  selectedSectionId: number;
  product: TProduct;
};

function AdditionalInfo({
  changeSelectedSectionId,
  selectedSectionId,
  product,
}: AdditionalInfoProps) {
  return (
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
                  "text-zinc-900": section.id === selectedSectionId,
                },
                {
                  "hover:cursor-pointer hover:text-compliment transition":
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
        {product.showCaseImages.map((image) => (
          <div className="relative w-[300px] h-[200px]" key={image.id}>
            <Image src={image.url} fill alt="Additional" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdditionalInfo;
