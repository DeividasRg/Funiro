import CheckoutDetails from "@/components/CheckoutDetails";
import HeaderPicture from "@/components/HeaderPicture";
import InfoBanner from "@/components/InfoBanner";
import { billingDetailsFormFields } from "@/utils/constants";

function CheckoutPage() {
  async function handleSubmit(formData: FormData) {
    "use server";
    console.log(formData);
  }

  return (
    <main>
      <HeaderPicture topTitle="Checkout" bottomRoute="Checkout" />
      <form
        className="flex justify-between px-80 mt-20 gap-x-50"
        action={handleSubmit}
      >
        <section>
          <h1 className="font-bold text-2xl">Billing details</h1>
          <div className="mt-10 space-y-5">
            <div className="flex gap-x-8">
              {billingDetailsFormFields
                .filter(
                  (field) =>
                    field.name === "firstName" || field.name === "lastName"
                )
                .map((field) => (
                  <div key={field.id} className="flex flex-col gap-y-2">
                    <label htmlFor={field.name} className="font-bold">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.type}
                      className="border border-black/30 rounded-sm py-4 px-3 focus:outline-none focus:border-black"
                    />
                  </div>
                ))}
            </div>
            <div>
              {billingDetailsFormFields
                .filter(
                  (field) =>
                    field.name !== "firstName" && field.name !== "lastName"
                )
                .map((field) => (
                  <div key={field.id} className="flex flex-col gap-y-2 mb-5">
                    <label htmlFor={field.name} className="font-bold">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        name={field.name}
                        className="border border-black/30 rounded-sm py-4 px-3 focus:outline-none focus:border-black"
                      >
                        {field.options?.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        name={field.name}
                        type={field.type}
                        className="border border-black/30 rounded-sm py-4 px-3 focus:outline-none focus:border-black"
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>
        <CheckoutDetails />
      </form>
      <InfoBanner />
    </main>
  );
}

export default CheckoutPage;
