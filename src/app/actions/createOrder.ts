"use server";

import { CheckoutFormSchema } from "@/utils/schema";

export async function createOrder(rawData: unknown) {
  const parsed = CheckoutFormSchema.safeParse(rawData);

  if (!parsed.success) {
    console.error(parsed.error);
    throw new Error("Invalid form data");
  }

  console.log(parsed.data);
}
