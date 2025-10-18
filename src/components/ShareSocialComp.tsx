import GalleryComp from "./GalleryComp";

function ShareSocialComp() {
  return (
    <>
      <div className="text-center -mb-10">
        <p className="text-zinc-900/70 text-base">Share your setup with</p>
        <h1 className="text-4xl font-bold">#FurniroFurniture</h1>
      </div>
      <section className="w-full h-[600px] overflow-hidden  shadow-3xl bg-zinc-100/40 shadow border border-zinc-900/10">
        <div className="scale-90">
          <GalleryComp />
        </div>
      </section>
    </>
  );
}

export default ShareSocialComp;
