import React from "react";

type BtnCompPropss = {
  children: React.ReactNode;
  type: "main" | "secondary";
};

function BtnComp({ children, type }: BtnCompPropss) {
  const styles =
    type === "secondary"
      ? "font-bold text-secondary-main bg-white px-12 py-2 hover:cursor-pointer"
      : "border-secondary-main border font-bold text-white bg-secondary-main px-12 py-3 hover:cursor-pointer hover:text-secondary-mainhover:bg-white hover:border hover:border-secondary-main transition";

  return <button className={styles}>{children}</button>;
}

export default BtnComp;
