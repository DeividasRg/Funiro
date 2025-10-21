import { useState } from "react";

function useProduct() {
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
