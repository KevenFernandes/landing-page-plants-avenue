import clsx from "clsx";
import {
  ChevronRightIcon,
  HeartIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "lucide-react";
import Link from "next/link";
import { Email } from "../svgs/Email";
import { Facebook } from "../svgs/Facebook";
import { Instagram } from "../svgs/Instagram";

type MenuHamburgueProps = {
  showMenu: boolean;
  closeMenu: (value: boolean) => void;
};

export function MenuHamburgue({ showMenu, closeMenu }: MenuHamburgueProps) {
  return (
    <div
      className={clsx(
        "fixed top-0 right-0 w-0 min-h-screen",
        "bg-primary/80 backdrop-blur-2xl",
        "transition-all duration-500 text-light",
        "md:hidden",
        "overflow-hidden",
        showMenu && "w-full",
      )}
    >
      <div className={clsx("flex flex-col gap-8", !showMenu && "hidden")}>
        <div className="flex items-center justify-between px-4 py-6">
          <button
            onClick={() => closeMenu(false)}
            className="text-secondary flex relative cursor-pointer"
          >
            <ChevronRightIcon size={30} />
            <div className="absolute left-3">
              <ChevronRightIcon size={30} />
            </div>
          </button>
          <div className=" text-xl font-semibold tracking-wide">
            Plants Avenue
          </div>
          <div className="flex gap-2 [&_button]:cursor-pointer">
            <button>
              <HeartIcon size={22} />
            </button>
            <button>
              <ShoppingBagIcon size={22} />
            </button>
          </div>
        </div>
        <nav>
          <ul
            className={clsx(
              "flex flex-col gap-6",
              "[&_a]:w-full [&_a]:flex [&_a]:py-2",
              "[&_a]:justify-center uppercase text-sm",
              "text-lg font-playfair font-bold text-light",
            )}
          >
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>Shop</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"#"}>Blog</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-6 underline">
          <div className="flex flex-col items-center text-sm gap-2">
            <Link href={"#"}>Login</Link>
            <Link href={"#"}>Criar Conta</Link>
          </div>

          <div
            className={clsx(
              "flex gap-2 justify-center",
              "[&_a]:w-8 [&_a]:h-8 ",
              "[&_a]:bg-light [&_a]:rounded-full [&_a]:p-1",
            )}
          >
            <a href="">
              <Email />
            </a>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Instagram />
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          <input
            className="bg-white/20 px-2 py-2 text-sm"
            type="text"
            placeholder="Search"
          />
          <button className="cursor-pointer">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
