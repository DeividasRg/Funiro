type CircleComponentProps = {
  children?: React.ReactNode;
  type: "discount" | "new";
};

function CircleComponent({ children, type }: CircleComponentProps) {
  const color = type === "discount" ? "bg-[#E97171]" : "bg-[#2EC1AC]";

  return (
    <div
      className={`flex items-center justify-center text-white rounded-full aspect-square w-[50px] absolute top-7 right-8 ${color}`}
    >
      {type === "discount" ? `- ${children}%` : children}
    </div>
  );
}

export default CircleComponent;
