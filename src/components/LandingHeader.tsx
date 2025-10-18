function LandingHeader() {
  return (
    <div className="w-[643px] h-[443px] bg-[#FFF3E3] absolute top-50 right-40 shadow-sm">
      <div className="p-20 flex flex-col text-left gap-y-3">
        <h2 className="font-bold tracking-widest text-zinc-700">New Arrival</h2>
        <p className="text-5xl text-wrap leading-[1.1] text-[#B88E2F] font-bold">
          Discover Our <br /> New Collection
        </p>
        <p className="font-bold text-base mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          illum magnam ipsum corrupti.
        </p>
        <button className="mt-10 bg-[#B88E2F] px-6 py-5 text-white font-bold w-[40%] hover:cursor-pointer hover:bg-[#b88f2fc6] transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default LandingHeader;
