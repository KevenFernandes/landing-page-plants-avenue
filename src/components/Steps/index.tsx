import { Container } from "../Container";
import { StepArticle } from "../StepArticle";
import { Humidity } from "../svgs/Humidity";
import { Pesticide } from "../svgs/Pesticide";
import { Scisccors } from "../svgs/Scisccors";
import { TitleSection } from "../TitleSection";

export function Steps() {
  return (
    <section className="my-15">
      <Container>
        <div>
          <header className="text-center">
            <TitleSection
              weight="semibold"
              text="Passos para começar a cuidar das suas plantas"
            />
            <h3 className="font-playfair text-sm font-semibold md:text-base">
              A solução certa para o cuidado de plantas verdes e inteligentes.
            </h3>
          </header>
          <div className="my-8 flex flex-col sm:flex-row gap-8">
            <StepArticle
              title="Controle de Umidade"
              description="O controle eficaz da umidade é essencial para o cuidado
                  adequado das plantas, garantindo crescimento ideal e saúde
                  geral."
            >
              <Humidity />
            </StepArticle>

            <StepArticle
              title="Antecipação de Pragas"
              description="Implementar medidas proativas de prevenção de pragas é essencial para salvaguardar e promover o bem-estar das plantas."
            >
              <Pesticide />
            </StepArticle>

            <StepArticle
              title="Poda de Ervas Daninhas"
              description="Implementar medidas proativas de prevenção de pragas é essencial para salvaguardar e promover o bem-estar das plantas."
            >
              <div className="-rotate-45">
                <Scisccors />
              </div>
            </StepArticle>
          </div>
        </div>
      </Container>
    </section>
  );
}
