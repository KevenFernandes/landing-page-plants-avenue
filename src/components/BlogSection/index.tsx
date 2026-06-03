import Image from "next/image";
import { Container } from "../Container";
import { CustomLink } from "../CustomLink";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function BlogSection() {
  return (
    <section className="my-10">
      <Container>
        <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <div className="w-full sm:min-w-70 flex md:max-h-90 max-h-80">
            <Image
              src="/plantas/folhas-arvore.jpg"
              width={700}
              height={700}
              alt="imagem de folhas de planta"
              className="object-cover"
            />
          </div>
          <div className="px-4 pt-4 pb-6 sm:p-6 bg-[#ddd] flex flex-col gap-2 md:gap-6 md:justify-center">
            <Link href={"#"}>
              <h2 className="font-bold text-primary md:text-xl">
                Venha conosco aprender como cultivar suas plantas para que
                fiquem melhores e mais saudáveis
              </h2>
            </Link>
            <p className="text-sm">
              Junte-se a nós em uma jornada para aprender a arte de cultivar
              plantas mais saudáveis ​​e vibrantes. Estamos aqui para
              compartilhar dicas e conhecimentos que ajudarão você a nutrir seu
              jardim ao máximo de seu potencial. Venha conosco e vamos explorar
              maneiras simples, porém eficazes, de fazer suas plantas
              prosperarem naturalmente.
            </p>
            <CustomLink href="#" buttonText="Leia mais" icon={ArrowRightIcon} />
          </div>
        </div>
      </Container>
    </section>
  );
}
