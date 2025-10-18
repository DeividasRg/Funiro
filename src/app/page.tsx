import BrowseRangeComp from "@/components/BrowseRangeComp";
import InspirationComp from "@/components/InspirationComp";
import LandingHeaderComp from "@/components/LandingHeaderComp";
import OurProductsComp from "@/components/OurProductsComp";
import ShareSocialComp from "@/components/ShareSocialComp";

export default function Home() {
  return (
    <main className="space-y-20">
      <LandingHeaderComp />
      <BrowseRangeComp />
      <OurProductsComp />
      <InspirationComp />
      <ShareSocialComp />
    </main>
  );
}
