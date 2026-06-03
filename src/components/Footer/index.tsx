import { SendHorizonalIcon } from "lucide-react";
import { Container } from "../Container";
import { TitleSection } from "../TitleSection";
import { Facebook } from "../svgs/Facebook";
import { Youtube } from "../svgs/Youtube";
import { Email } from "../svgs/Email";
import Link from "next/link";
import clsx from "clsx";

export function Footer() {
  return (
    <footer className="bg-primary text-light/60">
      <Container>
        <div className="">
          <header className="md:text-center flex justify-center my-10 ">
            <div className="max-w-90 flex flex-col gap-4">
              <TitleSection
                variant="ghost"
                size="lg"
                text="Fique por dentro de ofertas especiais, dicas de cultivo e mais."
              />

              <form action="" className="flex gap-2 w-full">
                <input
                  type="text"
                  className="bg-white/10 px-4 w-full"
                  placeholder="Enter your email"
                />

                <button className="bg-secondary p-2 cursor-pointer">
                  <span className="-rotate-45 block ">
                    <SendHorizonalIcon size={28} />
                  </span>
                </button>
              </form>
            </div>
          </header>

          <div className="border-y-2 border-white/40 text-sm flex flex-col sm:flex-row items-center">
            <div
              className={clsx(
                "flex flex-col justify-center text-center py-6 basis-0",
                "sm:px-4 sm:py-0 sm:text-left sm:gap-5",
              )}
            >
              <span>123 Hello Street, CA 90214, LA</span>
              <div className="flex flex-col">
                <a href="#">+6287165320 </a>
                <a href="#">plants.ave@gmail.com</a>
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col gap-2 flex-1 text-center border-y-2",
                "border-white/20 py-4 max-w-[80%]",
                "sm:my-6 sm:py-0 sm:border-y-transparent sm:border-x-2 sm:px-4",
              )}
            >
              <span className="font-bold text-lg text-light">
                Plants Avenue
              </span>
              <p>
                Cuidar de plantas enriquece seu espaço com vida. Seja um pequeno
                jardim de ervas ou uma selva exuberante, nutrir suas plantas
                recompensa você com verde e serenidade.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="w-8 h-8 flex bg-white rounded-full p-1">
                  <Email />
                </a>
                <a href="#" className="w-8 h-8 flex bg-white rounded-full p-1">
                  <Facebook />
                </a>
                <a href="#" className="w-8 h-8 flex ">
                  <Youtube />
                </a>
              </div>
            </div>
            <div
              className={clsx(
                "py-6 w-full flex justify-between",
                "font-bold max-w-[80%]",
                "sm:flex-col sm:basis-0 sm:px-6",
              )}
            >
              <Link href="#">Home</Link>
              <Link href="#">Shop</Link>
              <Link href="#">About</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>
          <span className="flex justify-center text-sm py-4">
            © 2024 Plants Avenue. All Rights Reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
