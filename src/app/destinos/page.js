import DestinationQuote from "@/components/destinations/DestinationQuote";
import destinosData from "@/data/destinos";

export const metadata = {
  title: "Cotiza tu viaje | Destinos ANVIDA",
  description:
    "Cotiza tu estadía en Coveñas y Cartagena según las fechas de tu viaje.",
};

export default function DestinosPage() {
  return <DestinationQuote data={destinosData} />;
}
