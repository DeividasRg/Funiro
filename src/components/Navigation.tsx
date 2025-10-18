"use client";
import { navLinks } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathName = usePathname();
  return (
    <nav>
      <ul className="flex items-center gap-x-15 text-zinc-600 text-base">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className={`${
                pathName === link.href
                  ? "font-bold text-zinc-900"
                  : "hover:text-zinc-900 transition"
              } `}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
