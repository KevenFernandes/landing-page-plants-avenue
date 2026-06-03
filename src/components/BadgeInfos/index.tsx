import { IdCardIcon, MessageCircleHeartIcon, TruckIcon } from "lucide-react";
import { Badge } from "../Badge";
import { Container } from "../Container";

export function BadfeInfos() {
  return (
    <section className="bg-primary text-light/70 py-16">
      <Container>
        <div className="flex justify-between items-center relative">
          <Badge
            title="Frete Grátis"
            description="Para pedidos acima de $50"
            icon={TruckIcon}
          />
          <div className="w-10 h-px bg-white/60 rotate-90"></div>
          <Badge
            title="Pagamento Seguro"
            description="Pagamento 100% protegido"
            icon={IdCardIcon}
          />
          <div className="w-10 h-px bg-white/60 rotate-90"></div>
          <Badge
            title="Atendimento Amigável"
            description="Suporte ao cliente 24/7"
            icon={MessageCircleHeartIcon}
          />
        </div>
      </Container>
    </section>
  );
}
