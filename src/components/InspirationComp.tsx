import Image from "next/image";
import BtnComp from "./BtnComp";
import SwiperComp from "./SwiperComp";
import inspirationImg from "../../public/Rectangle 24.png";

function InspirationComp() {
  return (
    <section className="flex items-center bg-main h-[600px] justify-between gap-x-6">
      <Rooms />
      <Inspiration />
      <SwiperComp />
    </section>
  );
}

export default InspirationComp;

const Inspiration = () => {
  return (
    <div className="relative ml-10 min-w-[400px] flex justify-end">
      <Image src={inspirationImg} alt="inspiration" height={500} />
      <div className="flex flex-col text-left justify-center gap-y-1  h-30 w-40 bg-white/70 absolute bottom-10 left-20 pl-5 hover:bg-white/90 transition">
        <p className="text-zinc-900/50">01 - Bed Room</p>
        <p className="font-bold text-2xl">Inner Peace</p>
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <div className="space-y-3 pl-40 min-w-[700px]">
      <h1 className="font-bold text-5xl">
        50+ Beautiful rooms
        <br /> inspiration
      </h1>
      <p>
        Our designer already made a lot of beautiful <br /> prototipe of rooms
        that inspire you
      </p>
      <BtnComp type="main">Explore More</BtnComp>
    </div>
  );
};
