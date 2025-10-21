import Counter from "@/components/Counter";
import StarRating from "@/components/StarRating";
import { TProduct } from "@/utils/types";
import { cn } from "@/utils/utils";

type ProductInfoProps = {
  changeSize: (id: number) => void;
  selectedSizeId: number;
  changeColorId: (id: number) => void;
  selectedColorId: number;
  count: number;
  increaseValue: () => void;
  decreaseValue: () => void;
  product: TProduct;
};

function ProductInfo({
  changeSize,
  changeColorId,
  selectedSizeId,
  selectedColorId,
  count,
  increaseValue,
  decreaseValue,
  product,
}: ProductInfoProps) {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h1 className="text-5xl">{product.name}</h1>
        <p className="text-2xl font-bold text-zinc-900/40">${product.price}</p>
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
  );
}

export default ProductInfo;
