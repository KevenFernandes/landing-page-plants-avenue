import { ArrowRightIcon } from "lucide-react";
import { CustomLink } from "../CustomLink";
import { Container } from "../Container";
import { TitleSection } from "../TitleSection";
import Image from "next/image";

export function MidBanner() {
  return (
    <section className="bg-primary">
      <Container>
        <div className="flex justify-evenly gap-6 h-60 py-6 sm:items-center">
          <div className="flex flex-col gap-4">
            <div className="w-40 sm:w-60 ">
              <TitleSection
                variant="ghost"
                size="xl"
                text="Cultive Plantas Para Uma Vida Melhor"
                weight="semibold"
              />
            </div>
            <div className="sm:hidden">
              <CustomLink
                href="#"
                buttonText="Leia Mais"
                icon={ArrowRightIcon}
              />
            </div>
          </div>
          <div className="relative self-end sm:self-center h-full">
            <div className="flex w-48 max-h-48 rounded-full overflow-hidden">
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
          <div className="hidden sm:flex flex-col gap-3 self-end">
            <p className="text-light/60 text-xs sm:text-sm  max-w-60 sm:max-w-75">
              Cultivar plantas aumenta o bem-estar e contribui para um ambiente
              mais saudável, promovendo uma vida mais plena.
            </p>
            <CustomLink href="#" buttonText="Leia Mais" icon={ArrowRightIcon} />
          </div>
        </div>
      </Container>
    </section>
  );
}
