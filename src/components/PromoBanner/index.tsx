import { Container } from "../Container";
import { Banner } from "../Banner";

export function PromoBanner() {
  return (
    <section>
      <Container>
        <div className="my-10 md:my-20 flex flex-col sm:flex-row gap-6">
          <Banner
            subtitle="Grande Promoção"
            title="Plantas de Interior"
            hrefLink="#"
            srcImage="/interior-planta.png"
          />
          <Banner
            subtitle="Top Produtos"
            title="Ervas Aromáticas"
            hrefLink="#"
            srcImage="/medicinal-planta.png"
          />
        </div>
      </Container>
    </section>
  );
}
