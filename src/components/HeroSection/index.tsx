import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../Button";
import { Container } from "../Container";
import clsx from "clsx";

export function HeroSection() {
  return (
    <section className="bg-hero">
      <Container>
        <div className="flex gap-6 md:gap-20 pt-30 text-white relative">
          <div className="w-120 h-120 bg-green-300/10 absolute rounded-full blur-3xl bottom-10 -left-90 z-0"></div>
          <div className="w-full md:pt-9 flex flex-col gap-4 z-10 relative pb-8">
            <h1 className="text-2xl md:text-6xl font-playfair">
              Traga a Natureza para Perto de Você
            </h1>
            <p className="text-sm md:text-base max-w-120 text-white/60">
              Melhore o seu espaço com nossas plantas de interior e ervas.
              Experimente o efeito calmante da vegetação, direto na sua casa.
            </p>
            <Button buttonText="Descubra agora" icon={ArrowRightIcon} />
          </div>
          <div className="max-w-50 md:max-w-100 md:h-120 flex justify-center relative">
            <div
              className={clsx(
                "w-15 h-15 md:w-20 md:h-20",
                "bg-primary rounded-full",
                "border-2 border-white flex items-center",
                "justify-center flex-col font-serif",
                "absolute bottom-[50%] translate-y-[50%]",
                "-left-7 md:-left-9",
              )}
            >
              <span className="text-xs md:text-sm opacity-60">Preço</span>
              <span className="text-base md:text-lg">$8</span>
            </div>
            <div className="overflow-hidden w-full flex justify-center">
              <Image
                src={
                  "https://media.istockphoto.com/id/104266222/pt/foto/dracaena-vermelho-isolado-no-fundo-branco.jpg?s=612x612&w=is&k=20&c=3ypp_7Ht-XviQto9BXO8cC3sXtWoPBfWBXkBvi_hIoQ="
                }
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
