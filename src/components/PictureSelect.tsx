import { TProduct } from "@/utils/schema";
import Image from "next/image";

type PictureSelectProps = {
  selectedPictureId?: string;
  changeImage: (id: string) => void;
  product: TProduct;
};

function PictureSelect({
  selectedPictureId,
  changeImage,
  product,
}: PictureSelectProps) {
  if (product === undefined || product === null)
    return <p>No selected image</p>;

  const selectedPicture =
    product.showCaseImages.find((img) => img.id === selectedPictureId)?.url ||
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png";

  return (
    <div className="flex">
      <div className="flex flex-col space-y-5 mr-5">
        {product.showCaseImages.map((image) => (
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
        <div className="relative w-[700px] h-[500px]">
          <Image
            src={selectedPicture}
            alt="Selected"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default PictureSelect;
