import { supabase } from "@/lib/supabase";
import {
  TProduct,
  TShortProduct,
  productSchema,
  shortProductSchema,
} from "@/utils/schema";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { z } from "zod";

export const supabaseApi = createApi({
  reducerPath: "supabaseApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getShortProducts: builder.query<TShortProduct[], void>({
      async queryFn() {
        const { data, error } = await supabase
          .from("Products")
          .select(
            "id,name,shortSynopsis,price,priceWithoutDiscount,isDiscounted,discountPercentage,isNew,previewImage"
          );

        if (error) {
          return {
            error: { status: 500, statusText: error.message, data: null },
          };
        }

        try {
          const parsedData = z.array(shortProductSchema).parse(data);
          return { data: parsedData };
        } catch (err) {
          return {
            error: {
              status: 500,
              statusText: "Invalid product data",
              data: err,
            },
          };
        }
      },
      providesTags: ["Products"],
    }),
    getProductById: builder.query<TProduct, string>({
      async queryFn(id: string) {
        const { data, error } = await supabase
          .from("Products")
          .select(
            "id,name,shortSynopsis,price,priceWithoutDiscount,isDiscounted,discountPercentage,isNew,previewImage,rating,maxCount,category,tags:Tags(id,tag),colors:Colors(id,color),availableSizes:Sizes(id,size),showCaseImages:Images(id,url,title),shortDescription,longDescription"
          )
          .eq("id", id)
          .single();

        if (error) {
          return {
            error: { status: 500, statusText: error.message, data: null },
          };
        }

        try {
          const parsedData = productSchema.parse(data);
          return { data: parsedData };
        } catch (err) {
          return {
            error: {
              status: 500,
              statusText: "Invalid product data",
              data: err,
            },
          };
        }
      },
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),
  }),
});

export const { useGetShortProductsQuery, useGetProductByIdQuery } = supabaseApi;
