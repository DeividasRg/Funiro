import BtnComp from "./BtnComp";

function LandingHeader() {
  return (
    <div className="w-[643px] h-[443px] bg-main absolute top-50 right-40 shadow-sm">
      <div className="p-20 flex flex-col text-left gap-y-3">
        <h2 className="font-bold tracking-widest text-zinc-700">New Arrival</h2>
        <p className="text-5xl text-wrap leading-[1.1] text-secondary-mainfont-bold">
          Discover Our <br /> New Collection
        </p>
        <p className="font-bold text-base mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          illum magnam ipsum corrupti.
        </p>
        <BtnComp additionalStyles="w-[40%] py-5 mt-10" type="main">
          Buy Now
        </BtnComp>
      </div>
    </div>
  );
}

export default LandingHeader;
