import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TShortProduct } from "./schema";

export function filterData(
  showDiscountedOnly: boolean,
  data: TShortProduct[],
  customFilter: string,
  sort: string
) {
  let result;
  if (showDiscountedOnly) {
    result = data.filter((p) => p.isDiscounted);
  } else {
    result = data;
  }

  if (customFilter.trim() !== "") {
    const keyword = customFilter.toLowerCase();
    result = [...result].filter((item) =>
      item.shortSynopsis.toLowerCase().includes(keyword)
    );
  }

  if (sort === "asc") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    result = [...result].sort((a, b) => b.price - a.price);
  }

  return result;
}
