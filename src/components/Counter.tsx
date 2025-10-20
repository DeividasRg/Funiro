"use client";

type CounterProps = {
  maximumValue: number;
  increaseValue: () => void;
  decreaseValue: () => void;
  count: number;
};

function Counter({
  maximumValue,
  increaseValue,
  decreaseValue,
  count,
}: CounterProps) {
  const increaseValueChecked = () => {
    if (count < maximumValue) {
      increaseValue();
    }
  };

  return (
    <div className="flex items-center gap-x-4 border border-zinc-900/30 rounded-xl p-4 text-base">
      <button
        onClick={decreaseValue}
        className="hover:cursor-pointer active:scale-70  transition"
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={increaseValueChecked}
        className="hover:cursor-pointer active:scale-70  transition"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
