import { cn } from "@/utils/utils";
import React from "react";

type BtnCompPropss = {
  children: React.ReactNode;
  type: "main" | "secondary" | "addition" | "custom";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  additionalStyles?: string;
};

function BtnComp({ children, type, onClick, additionalStyles }: BtnCompPropss) {
  const styles = () => {
    switch (type) {
      case "main":
        return "border-secondary-main border font-bold text-white bg-secondary-main px-12 py-3 hover:cursor-pointer hover:text-secondary-main hover:bg-white hover:border hover:border-secondary-main transition";
      case "secondary":
        return "font-bold text-secondary-main bg-white px-12 py-2 hover:cursor-pointer";
      case "addition":
        return "border-2 border-secondary-main mx-auto px-18 py-2 text-secondary-main font-bold hover:bg-main hover:cursor-pointer transition";
      case "custom":
        return "";
      default:
        return "text-red-500";
    }
  };

  return (
    <button onClick={onClick} className={cn(styles(), additionalStyles)}>
      {children}
    </button>
  );
}

export default BtnComp;
