"use client";
import image1 from "@/../public/Group 106.png";
import image2 from "@/../public/Group 107.png";
import useProduct from "@/hooks/useProduct";
import RelatedProducts from "./components/RelatedProducts";
import AdditionalInfo from "./components/AdditionalInfo";
import ProductInfo from "./components/ProductInfo";
import PictureSelect from "./components/PictureSelect";
import BreadCrumbs from "./components/BreadCrumbs";

type PageProps = {
  params: {
    id: string;
  };
};

const product = {
  id: "S589JX0D",
  name: "Asgaard Sofa",
  shortSynopsis: "A very comfa sofa",
  rating: 4.5,
  price: 500,
  priceWithoutDiscount: null,
  isDiscounted: false,
  discountPercentage: null,
  isNew: false,
  previewImage: image1,
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

export default function Page({ params }: PageProps) {
  const {
    selectedPictureId,
    selectedSizeId,
    selectedColorId,
    count,
    selectedSectionId,
    changeSelectedSectionId,
    increaseValue,
    decreaseValue,
    changeImage,
    changeColorId,
    changeSize,
  } = useProduct();
  return (
    <main>
      <BreadCrumbs product={product} />
      <InfoWrapper>
        <PictureSelect
          selectedPictureId={selectedPictureId}
          changeImage={changeImage}
          product={product}
        />
        <ProductInfo
          changeSize={changeSize}
          changeColorId={changeColorId}
          selectedSizeId={selectedSizeId}
          selectedColorId={selectedColorId}
          count={count}
          increaseValue={increaseValue}
          decreaseValue={decreaseValue}
          product={product}
        />
      </InfoWrapper>

      <AdditionalInfo
        changeSelectedSectionId={changeSelectedSectionId}
        selectedSectionId={selectedSectionId}
        product={product}
      />
      <RelatedProducts />
    </main>
  );
}

const InfoWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex py-10 gap-x-10 pl-20">{children}</div>;
};
