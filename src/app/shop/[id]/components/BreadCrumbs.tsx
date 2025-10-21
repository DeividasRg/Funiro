import { TProduct } from "@/utils/types";

type BreadCrumbsProps = {
  product: TProduct;
};

function BreadCrumbs({ product }: BreadCrumbsProps) {
  return (
    <div className="flex items-center justify-start p-10 gap-x-5 bg-main">
      <p className="text-zinc-900/50">Home</p>
      <p className="font-bold">&gt;</p>
      <p className="text-zinc-900/50">Shop</p>
      <p className="">&gt;</p>
      <p>|</p>
      <p className="font-bold">{product.name}</p>
    </div>
  );
}

export default BreadCrumbs;
