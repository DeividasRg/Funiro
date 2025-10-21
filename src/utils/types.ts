import { StaticImageData } from "next/image";

export type TProduct = TShortProduct & {
  rating: number;
  maxCount: number;
  category: string;
  tags: string[];
  colors: { id: number; color: string }[];
  availableSizes: { id: number; size: string }[];
  showCaseImages: { url: StaticImageData | string; id: number }[];
  images: { id: number; url: string; title: string }[];
  shortDescription: string;
  longDescription: string;
};

export type TShortProduct = {
  id: string;
  name: string;
  shortSynopsis: string;
  price: number;
  priceWithoutDiscount: number | null;
  isDiscounted: boolean;
  discountPercentage: number | null;
  isNew: boolean;
  previewImage: string | StaticImageData;
};
