import React from "react";

type BtnCompPropss = {
  children: React.ReactNode;
  type: "main" | "secondary";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function BtnComp({ children, type, onClick }: BtnCompPropss) {
  const styles =
    type === "secondary"
      ? "font-bold text-secondary-main bg-white px-12 py-2 hover:cursor-pointer"
      : "border-secondary-main border font-bold text-white bg-secondary-main px-12 py-3 hover:cursor-pointer hover:text-secondary-mainhover:bg-white hover:border hover:border-secondary-main transition";

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}

export default BtnComp;
