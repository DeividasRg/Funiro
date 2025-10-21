import { TProduct } from "@/utils/types";
import Image from "next/image";

type PictureSelectProps = {
  selectedPictureId: number;
  changeImage: (id: number) => void;
  product: TProduct;
};

function PictureSelect({
  selectedPictureId,
  changeImage,
  product,
}: PictureSelectProps) {
  return (
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
          src={product.images.find((img) => img.id === selectedPictureId)!.url}
          alt="Selected"
          width={750}
          height={750}
        />
      </div>
    </div>
  );
}

export default PictureSelect;
