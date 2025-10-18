import Logo from "./Logo";
import Navigation from "./Navigation";
import QuickIcons from "./QuickIcons";

function Header() {
  return (
    <header className="flex items-center justify-between py-5 px-8 bg-white sticky top-0 z-100 shadow-sm">
      <Logo />
      <Navigation />
      <QuickIcons />
    </header>
  );
}

export default Header;
