import { TProduct } from "@/utils/schema";
import { useEffect, useState } from "react";

function useProduct(product: TProduct | undefined) {
  const [selectedPictureId, setSelectedPictureId] = useState<
    string | undefined
  >();
  const [selectedSizeId, setSelectedSizeId] = useState<string | undefined>();
  const [selectedColorId, setSelectedColorId] = useState<string | undefined>();
  const [count, setCount] = useState(1);
  const [selectedSectionId, setSelectedSectionId] = useState<number>(1);

  useEffect(() => {
    if (!product) return;

    setSelectedPictureId(product.showCaseImages?.[0]?.id);
    setSelectedSizeId(product.availableSizes?.[0]?.id);
    setSelectedColorId(product.colors?.[0]?.id);
    setCount(1);
    setSelectedSectionId(1);
  }, [product]);
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

  const changeImage = (id: string) => {
    setSelectedPictureId(id);
  };

  const changeSize = (id: string) => {
    setSelectedSizeId(id);
  };

  const changeColorId = (id: string) => {
    setSelectedColorId(id);
  };

  return {
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
  };
}

export default useProduct;
