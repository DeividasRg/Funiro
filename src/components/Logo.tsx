import Image from "next/image";
import logo from "../../public/Logo.svg";
import Link from "next/link";

function Logo({ needText = true }) {
  return (
    <Link href="/" className="flex items-center gap-x-1 font-bold text-xl">
      <Image alt="Funiro logo" src={logo} />
      {needText && <h1 className="text-main">Funiro</h1>}{" "}
    </Link>
  );
}

export default Logo;
