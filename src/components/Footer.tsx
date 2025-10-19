import { navLinks } from "@/utils/constants";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full h-[405px] border border-zinc-900/5 ">
      <div className="flex justify-around p-10 border-b border-zinc-900/10">
        <div className="space-y-10">
          <h1 className="font-bold text-xl">Funiro</h1>
          <p className="text-zinc-900/50">
            400 University Drive Suite 200 Coral <br />
            Gabbies,
            <br /> FL 33134 USA
          </p>
        </div>
        <div className="flex flex-col space-y-10">
          <h1 className="text-zinc-900/50">Links</h1>
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href} className="font-bold">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-10">
          <h1 className="text-zinc-900/50">Help</h1>
          <Link href="/" className="font-bold">
            Payment Options
          </Link>
          <Link href="/" className="font-bold">
            Returns
          </Link>
          <Link href="/" className="font-bold">
            Privacy Policies
          </Link>
        </div>
        <div className="flex flex-col space-y-10">
          <h1 className="text-zinc-900/50">Help</h1>
          <div className="flex gap-x-2">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b outline-0"
            />
            <button className="font-bold border-b hover:cursor-pointer hover:text-zinc-900/60 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-10 pl-2">
        <p>2025 furino. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
