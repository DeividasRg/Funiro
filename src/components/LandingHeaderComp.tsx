import Image from "next/image";
import landingHeader from "../../public/landingHeader.png";
import LandingHeader from "@/components/LandingHeader";

function LandingHeaderComp() {
  return (
    <section className="relative w-screen h-[700px]">
      <Image
        src={landingHeader}
        alt="Landing Header"
        fill
        className="object-cover"
      />
      <LandingHeader />
    </section>
  );
}

export default LandingHeaderComp;
