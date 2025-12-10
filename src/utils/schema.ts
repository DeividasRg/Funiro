import z from "zod";
import { countryOptions, paymentValues } from "./constants";

export const shortProductSchema = z.object({
  id: z.string(),
  name: z.string().nonempty("Product name cannot be empty"),
  shortSynopsis: z.string().nonempty("Synpsis cannot be empty"),
  price: z.number().gt(0, "Price must be greater than 0"),
  priceWithoutDiscount: z.union([
    z.number().gt(0, "Price without discount must be greater than 0"),
    z.null(),
  ]),
  isDiscounted: z.boolean().nonoptional(),
  discountPercentage: z.union([
    z
      .number()
      .min(1, "Discount Percentage must be 1 or higher")
      .max(100, "Price discount cannot be more than 100"),
    z.null(),
  ]),
  isNew: z.boolean().nonoptional(),
  previewImage: z.url("Preview image must be a valid URL"),
  maxCount: z.number().min(1),
});

export const productSchema = shortProductSchema.extend({
  rating: z.number().max(5).min(1),
  category: z.string().nonempty("Category cannot be empty"),
  tags: z
    .array(
      z.object({
        id: z.string(),
        tag: z.string(),
      })
    )
    .nonempty(),
  colors: z.array(
    z.object({
      id: z.uuid("color id is not a uuid").nonempty(),
      color: z.string().nonempty(),
    })
  ),
  availableSizes: z.array(
    z.object({
      id: z.uuid("size id is not a uuid").nonempty(),
      size: z.string().nonempty(),
    })
  ),
  showCaseImages: z.array(
    z.object({
      id: z.uuid("image id is not a uuid").nonempty(),
      url: z.string().nonempty(),
      title: z.string(),
    })
  ),
  shortDescription: z.string().nonempty(),
  longDescription: z.string().nonempty(),
});

export const CheckoutFormSchema = z.object({
  companyName: z
    .string()
    .max(30, "Company Name can consist of 30 characters")
    .optional(),
  country: z.enum(countryOptions),
  email: z.email().nonempty("Email is required"),
  firstName: z
    .string("")
    .max(30, "First Name can consist of 30 characters")
    .nonempty("First Name is required"),
  lastName: z
    .string()
    .max(30, "Last name can consist of 30 characters")
    .nonempty("Last Name is required"),
  paymentMethod: z.enum(paymentValues, "Select one of the payment methods"),
  phone: z
    .string()
    .nonempty("Phone number is required")
    .min(7, "Too short")
    .max(20, "Too long"),
  streetAddress: z.string().max(200).nonempty("Street address is required"),
  zipCode: z.string().max(100).nonempty("Zip code is required"),
});

export type TCheckoutForm = z.infer<typeof CheckoutFormSchema>;
export const shortProductsSchema = z.array(shortProductSchema);
export type TShortProduct = z.infer<typeof shortProductSchema>;
export type TProduct = z.infer<typeof productSchema>;
