import CartDetails from "@/components/CartDetails";
import HeaderPicture from "@/components/HeaderPicture";
import InfoBanner from "@/components/InfoBanner";

function Page() {
  return (
    <main>
      <HeaderPicture topTitle="Cart" bottomRoute="Cart" />
      <CartDetails />
      <InfoBanner />
    </main>
  );
}

export default Page;
