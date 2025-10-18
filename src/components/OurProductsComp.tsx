import syltherineImg from "../../public/image 1.png";
import leviosaImg from "../../public/image 2.png";
import lolitoImg from "../../public/image 3.png";
import respiraImg from "../../public/image 4.png";
import muggoImg from "../../public/image 6.png";
import pingkyImg from "../../public/image 7.png";
import pottyImg from "../../public/image 8.png";
import grifoImg from "../../public/Image 5.png";
import ProductCard from "./ProductCard";

const mockData = [
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

function OurProductsComp() {
  return (
    <section className="flex flex-col gap-8 text-center">
      <div>
        <h1 className="font-extrabold text-3xl tracking-wider">Our Products</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 px-60">
        {mockData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className="border-2 border-[#B88E2F] mx-auto px-18 py-2 text-[#B88E2F] font-bold hover:bg-[#FFF3E3] hover:cursor-pointer transition">
        Show More
      </button>
    </section>
  );
}

export default OurProductsComp;
