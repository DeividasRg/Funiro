import React from "react";

type BtnCompPropss = {
  children: React.ReactNode;
  type: "main" | "secondary";
};

function BtnComp({ children, type }: BtnCompPropss) {
  const styles =
    type === "secondary"
      ? "font-bold text-[#B88E2F] bg-white px-12 py-2 hover:cursor-pointer"
      : "border-[#B88E2F] border font-bold text-white bg-[#B88E2F] px-12 py-3 hover:cursor-pointer hover:text-[#B88E2F] hover:bg-white hover:border hover:border-[#B88E2F] transition";

  return <button className={styles}>{children}</button>;
}

export default BtnComp;
