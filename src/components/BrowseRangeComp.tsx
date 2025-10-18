import dining from "../../public/dining.png";
import living from "../../public/living.png";
import bedroom from "../../public/bedroom.png";
import Image from "next/image";

const images = [
  {
    src: dining,
    alt: "Dining Room",
  },
  {
    src: bedroom,
    alt: "Bedroom",
  },
  {
    src: living,
    alt: "Living Room",
  },
];

function BrowseRangeComp() {
  return (
    <>
      <section className="text-center space-y-1">
        <h1 className="font-extrabold text-2xl tracking-wider">
          Browse The Range
        </h1>
        <p className="tracking-wider text-zinc-900/70">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </section>
      <section className="flex justify-center items-center gap-x-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[350px] h-[450px] text-center space-y-3"
          >
            <Image
              src={image.src}
              alt={image.alt}
              quality={80}
              className="rounded-lg shadow-lg hover:shadow-xl hover:scale-101 transition"
            />
            <h2 className=" font-bold text-base text-zinc-900/80">
              {image.alt}
            </h2>
          </div>
        ))}
      </section>
    </>
  );
}

export default BrowseRangeComp;
