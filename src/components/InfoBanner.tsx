import { CiTrophy, CiCircleCheck, CiBoxes, CiHeadphones } from "react-icons/ci";

function InfoBanner() {
  const size = 50;

  return (
    <section className="bg-main flex items-center justify-around py-15 mt-10 px-10">
      <div className="flex gap-x-2">
        <CiTrophy size={size} />
        <div>
          <h1 className="font-bold text-xl">High Quality</h1>
          <p className="text-zinc-900//60">Crafted from top materials</p>
        </div>
      </div>
      <div className="flex gap-x-2">
        <CiCircleCheck size={size} />
        <div>
          <h1 className="font-bold text-xl">Warranty Protection</h1>
          <p className="text-zinc-900//60">Over 2 years</p>
        </div>
      </div>
      <div className="flex gap-x-2">
        <CiBoxes size={size} />
        <div>
          <h1 className="font-bold text-xl">Free Shipping</h1>
          <p className="text-zinc-900//60">Order over ﹩150</p>
        </div>
      </div>
      <div className="flex gap-x-2">
        <CiHeadphones size={size} />
        <div>
          <h1 className="font-bold text-xl">24 / 7 Support</h1>
          <p className="text-zinc-900//60">Dedicated support</p>
        </div>
      </div>
    </section>
  );
}

export default InfoBanner;
