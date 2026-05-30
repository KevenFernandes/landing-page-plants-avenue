import { ArrowRightIcon } from "lucide-react";
import { Button } from "../Button";
import { Container } from "../Container";
import { TitleSection } from "../TitleSection";
import Image from "next/image";

/*
6. Mid-Page Banner (Banner "Grow Plant")
Título: > Grow Plant For A Better Life (Cultive Plantas para uma Vida Melhor)

Texto: Cultivating plants enhances well-being and contributes to a healthier environment, fostering a more fulfilling life. 
(Cultivar plantas aumenta o bem-estar e contribui para um ambiente mais saudável, promovendo uma vida mais plena.)

Botão: Read More ➔ (Leia Mais) 
*/

export function MidBanner() {
  return (
    <section className="bg-primary">
      <Container>
        <div className="flex justify-between h-60 py-6">
          <div className="flex flex-col gap-4">
            <div className="max-w-50">
              <TitleSection
                variant="ghost"
                size="xl"
                text="Cultive Plantas Para Uma Vida Melhor"
                weight="semibold"
              />
            </div>
            <div className="sm:hidden">
              <Button buttonText="Leia Mais" icon={ArrowRightIcon} />
            </div>
          </div>
          <div className="relative self-end">
            <div className="flex w-45 h-45 rounded-full overflow-hidden">
              <Image
                src="/plantas/mid-banner1.jpg"
                width={500}
                height={500}
                alt="planta decorativa"
                className="object-cover object-bottom"
              />
            </div>
            <div className="absolute bottom-0 -left-15 flex w-25 h-25 rounded-full overflow-hidden border-3 border-primary">
              <Image
                src="/plantas/mid-banner2.jpg"
                width={500}
                height={500}
                alt="planta decorativa"
                className="object-cover object-bottom"
              />
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-white/60">
              Cultivar plantas aumenta o bem-estar e contribui para um ambiente
              mais saudável, promovendo uma vida mais plena.
            </p>
            <Button buttonText="Leia Mais" icon={ArrowRightIcon} />
          </div>
        </div>
      </Container>
    </section>
  );
}
