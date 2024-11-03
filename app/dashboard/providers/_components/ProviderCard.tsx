import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card className="hover:scale-110 transition-transform hover:bg-gray-300 rounded-md">
      <CardHeader>{provider.providerName}</CardHeader>
      <Divider />
      <CardBody>
        <p>
          Correo electrónico: <b>{provider.providerEmail}</b>
        </p>
        <p>
          Número de teléfono: <b>{provider.providerPhoneNumber}</b>
        </p>
        {provider.products.length < 0 ? (
          <p>
            Tiene: <b>{provider.products.length}</b> productos
          </p>
        ) : (
          <p>No tiene productos</p>
        )}
      </CardBody>
    </Card>
  );
}

export default ProviderCard;
