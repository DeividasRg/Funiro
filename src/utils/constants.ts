import syltherineImg from "../../public/image 1.png";
import leviosaImg from "../../public/image 2.png";
import lolitoImg from "../../public/image 3.png";
import respiraImg from "../../public/image 4.png";
import muggoImg from "../../public/image 6.png";
import pingkyImg from "../../public/image 7.png";
import pottyImg from "../../public/image 8.png";
import grifoImg from "../../public/Image 5.png";

export const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const mockData = [
  {
    id: "1",
    name: "Syltherine",
    shortSynopsis: "Stylish cafe chair",
    price: 42,
    priceWithoutDiscount: 65,
    isDiscounted: true,
    discountPercentage: 30,
    isNew: false,
    previewImage: syltherineImg,
  },
  {
    id: "2",
    name: "Leviosa",
    shortSynopsis: "Stylish cafe chair",
    price: 42,
    priceWithoutDiscount: null,
    isDiscounted: false,
    discountPercentage: null,
    isNew: false,
    previewImage: leviosaImg,
  },
  {
    id: "3",
    name: "Lolito",
    shortSynopsis: "Luxury big sofa",
    price: 300,
    priceWithoutDiscount: 150,
    isDiscounted: true,
    discountPercentage: 50,
    isNew: false,
    previewImage: lolitoImg,
  },
  {
    id: "4",
    name: "Respira",
    shortSynopsis: "Outdoor bar table and stool",
    price: 20,
    priceWithoutDiscount: null,
    isDiscounted: false,
    discountPercentage: null,
    isNew: false,
    previewImage: respiraImg,
  },
  {
    id: "5",
    name: "Grifo",
    shortSynopsis: "Night lamp",
    price: 20,
    priceWithoutDiscount: null,
    isDiscounted: false,
    discountPercentage: null,
    isNew: false,
    previewImage: grifoImg,
  },
  {
    id: "6",
    name: "Muggo",
    shortSynopsis: "Small mug",
    price: 10,
    priceWithoutDiscount: null,
    isDiscounted: false,
    discountPercentage: null,
    isNew: true,
    previewImage: muggoImg,
  },
  {
    id: "7",
    name: "Pinkgy",
    shortSynopsis: "Cute bed set",
    price: 500,
    priceWithoutDiscount: 250,
    isDiscounted: true,
    discountPercentage: 50,
    isNew: false,
    previewImage: pingkyImg,
  },
  {
    id: "8",
    name: "Potty",
    shortSynopsis: "Minimalist pot",
    price: 200,
    priceWithoutDiscount: null,
    isDiscounted: false,
    discountPercentage: null,
    isNew: true,
    previewImage: pottyImg,
  },
];
