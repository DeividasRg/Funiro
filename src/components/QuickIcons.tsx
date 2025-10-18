import { SlUser, SlMagnifier, SlHeart, SlBasket } from "react-icons/sl";

function QuickIcons() {
  return (
    <div className="flex space-x-8">
      <button className="hover:cursor-pointer">
        <SlUser size={20} />
      </button>
      <button className="hover:cursor-pointer">
        <SlMagnifier size={20} />
      </button>
      <button className="hover:cursor-pointer">
        <SlHeart size={20} />
      </button>
      <button className="hover:cursor-pointer">
        <SlBasket size={20} />
      </button>
    </div>
  );
}

export default QuickIcons;
