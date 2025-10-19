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
    id: 1,
    name: "Syltherine",
    shortDescription: "Stylish cafe chair",
    price: "$42.00",
    priceWithoutDiscount: "$65.00",
    isDiscounted: true,
    discounterPercentage: 30,
    isNew: false,
    image: syltherineImg,
  },
  {
    id: 2,
    name: "Leviosa",
    shortDescription: "Stylish cafe chair",
    price: "$42.00",
    priceWithoutDiscount: null,
    isDiscounted: false,
    discounterPercentage: null,
    isNew: false,
    image: leviosaImg,
  },
  {
    id: 3,
    name: "Lolito",
    shortDescription: "Luxury big sofa",
    price: "$300.00",
    priceWithoutDiscount: "$150.00",
    isDiscounted: true,
    discounterPercentage: 50,
    isNew: false,
    image: lolitoImg,
  },
  {
    id: 4,
    name: "Respira",
    shortDescription: "Outdoor bar table and stool",
    price: "$20.00",
    priceWithoutDiscount: null,
    isDiscounted: false,
    discounterPercentage: null,
    isNew: false,
    image: respiraImg,
  },
  {
    id: 5,
    name: "Grifo",
    shortDescription: "Night lamp",
    price: "$20.00",
    priceWithoutDiscount: null,
    isDiscounted: false,
    discounterPercentage: null,
    isNew: false,
    image: grifoImg,
  },
  {
    id: 6,
    name: "Muggo",
    shortDescription: "Small mug",
    price: "$10.00",
    priceWithoutDiscount: null,
    isDiscounted: false,
    discounterPercentage: null,
    isNew: true,
    image: muggoImg,
  },
  {
    id: 7,
    name: "Pinkgy",
    shortDescription: "Cute bed set",
    price: "$500.00",
    priceWithoutDiscount: "$250.00",
    isDiscounted: true,
    discounterPercentage: 50,
    isNew: false,
    image: pingkyImg,
  },
  {
    id: 8,
    name: "Potty",
    shortDescription: "Minimalist pot",
    price: "$200.00",
    priceWithoutDiscount: null,
    isDiscounted: false,
    discounterPercentage: null,
    isNew: true,
    image: pottyImg,
  },
];
