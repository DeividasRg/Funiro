import syltherineImg from "../../public/image 1.png";
import leviosaImg from "../../public/image 2.png";
import lolitoImg from "../../public/image 3.png";
import respiraImg from "../../public/image 4.png";
import muggoImg from "../../public/image 6.png";
import pingkyImg from "../../public/image 7.png";
import pottyImg from "../../public/image 8.png";
import grifoImg from "../../public/Image 5.png";
import { TBillingDetailsField } from "./types";

export const countryOptions = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
] as const;

export const paymentMethods = [
  {
    id: 1,
    label: "Direct Bank Transfer",
    value: "directBankTransfer",
    additionalText:
      "Make sure payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
  {
    id: 2,
    label: "Cash On Delivery",
    value: "cashOnDelivery",
    additionalText:
      "Hand the cash directly to the courier once your order has arrived.",
  },
] as const;

export const paymentValues = paymentMethods.map((m) => m.value);

export const billingDetailsFormFields: TBillingDetailsField[] = [
  {
    id: 1,
    type: "text",
    name: "firstName",
    label: "First Name",
    parameters: { required: "First name is required" },
  },
  {
    id: 2,
    type: "text",
    name: "lastName",
    label: "Last Name",
    parameters: { required: "Last name is required" },
  },
  {
    id: 3,
    type: "text",
    name: "companyName",
    label: "Company Name (Optional)",
  },
  {
    id: 4,
    type: "select",
    name: "country",
    options: countryOptions,
    label: "Country / Region",
    parameters: { required: "Country is required" },
  },
  {
    id: 5,
    type: "text",
    name: "streetAddress",
    label: "Street Address",
    parameters: { required: "Street address is required" },
  },
  {
    id: 6,
    type: "text",
    name: "zipCode",
    label: "ZIP Code",
    parameters: { required: "Zip Code is required" },
  },
  {
    id: 7,
    type: "text",
    name: "phone",
    label: "Phone",
    parameters: { required: "Phone is required" },
  },
  {
    id: 8,
    type: "email",
    name: "email",
    label: "Email",
    parameters: { required: "Email is required" },
  },
];

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
    price: 150,
    priceWithoutDiscount: 300,
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
    price: 250,
    priceWithoutDiscount: 500,
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
  {
    id: "9",
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
    id: "10",
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
    id: "11",
    name: "Lolito",
    shortSynopsis: "Luxury big sofa",
    price: 150,
    priceWithoutDiscount: 300,
    isDiscounted: true,
    discountPercentage: 50,
    isNew: false,
    previewImage: lolitoImg,
  },
  {
    id: "12",
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
    id: "13",
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
    id: "14",
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
    id: "15",
    name: "Pinkgy",
    shortSynopsis: "Cute bed set",
    price: 250,
    priceWithoutDiscount: 500,
    isDiscounted: true,
    discountPercentage: 50,
    isNew: false,
    previewImage: pingkyImg,
  },
  {
    id: "16",
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

export const customFiltersForFiltering = [
  "sofa",
  "mug",
  "lamp",
  "chair",
  "table",
];
