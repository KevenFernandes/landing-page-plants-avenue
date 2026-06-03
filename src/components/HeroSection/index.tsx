import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { CustomLink } from "../CustomLink";
import { Container } from "../Container";
import clsx from "clsx";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-hero">
      <Container>
        <div className="flex gap-6 md:gap-20 pt-30 text-light relative">
          <div className="w-120 h-120 bg-green-300/10 absolute rounded-full blur-3xl bottom-10 -left-90 z-0"></div>
          <div className="w-full md:pt-9 flex flex-col gap-4 z-10 relative pb-8">
            <h1 className="text-4xl md:text-6xl font-playfair">
              Traga a Natureza para Perto de Você
            </h1>
            <p className="text-sm md:text-base max-w-120 text-light/60">
              Melhore o seu espaço com nossas plantas de interior e ervas.
              Experimente o efeito calmante da vegetação, direto na sua casa.
            </p>
            <CustomLink
              href="#"
              buttonText="Descubra agora"
              icon={ArrowRightIcon}
            />
          </div>
          <div className="max-w-50 md:max-w-100 md:h-120 flex justify-center relative">
            <Link
              href={"#"}
              className={clsx(
                "w-15 h-15 md:w-20 md:h-20",
                "bg-primary rounded-full",
                "border-2 border-white flex items-center",
                "justify-center flex-col",
                "absolute bottom-[50%] translate-y-[50%]",
                "-left-7 md:-left-9",
              )}
            >
              <span className="text-xs md:text-sm opacity-60">Preço</span>
              <span className="text-base md:text-lg">$8</span>
            </Link>
            <div className="overflow-hidden w-full flex justify-center ">
              <Image
                src="/plantas/planta-hero.jpg"
                width={700}
                height={700}
                alt="planta da sessao principal"
                className="rounded-t-full object-cover object-top"
              />
            </div>
          </div>
          <div className="w-120 h-120 bg-green-300/10 absolute rounded-full blur-3xl bottom-10 -right-90"></div>
        </div>
      </Container>
    </section>
  );
}
