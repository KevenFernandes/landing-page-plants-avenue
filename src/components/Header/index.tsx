"use client";
import { HeartIcon, MenuIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "../Container";
import { LogoIcon } from "../LogoIcon";
import { useState } from "react";
import { MenuHamburgue } from "../MenuHamburgue";

export function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  console.log(showMenu);

  return (
    <header className="absolute top-0 w-full z-50">
      <Container>
        <div className="flex justify-between items-center py-6 text-light">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center">
              <LogoIcon />
            </div>
            <Link href="/" className="text-xl font-semibold tracking-wide">
              Plants Avenue
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-10">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Shop</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="hidden md:flex gap-2 [&_button]:cursor-pointer">
              <button>
                <HeartIcon size={20} />
              </button>
              <button>
                <ShoppingBagIcon size={20} />
              </button>
              <Link href="#">
                <UserIcon size={20} />
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="cursor-pointer"
                onClick={() => setShowMenu(true)}
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </Container>
      {<MenuHamburgue showMenu={showMenu} closeMenu={setShowMenu} />}
    </header>
  );
}
