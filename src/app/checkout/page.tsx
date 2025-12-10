import CheckoutForm from "@/components/CheckoutForm";
import HeaderPicture from "@/components/HeaderPicture";
import InfoBanner from "@/components/InfoBanner";

function CheckoutPage() {
  return (
    <main>
      <HeaderPicture topTitle="Checkout" bottomRoute="Checkout" />
      <CheckoutForm />
      <InfoBanner />
    </main>
  );
}

export default CheckoutPage;
