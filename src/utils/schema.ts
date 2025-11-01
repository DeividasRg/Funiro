import z from "zod";

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
});

export const productSchema = shortProductSchema.extend({
  rating: z.number().max(5).min(1),
  maxCount: z.number().min(1),
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

export const shortProductsSchema = z.array(shortProductSchema);

export type TShortProduct = z.infer<typeof shortProductSchema>;
export type TProduct = z.infer<typeof productSchema>;
