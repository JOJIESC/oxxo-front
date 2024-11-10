import { Provider } from "@/entities";
import { Input, Button } from "@nextui-org/react";
import updateProvider from "@/actions/providers/update";

function FormUpdateProvider({ provider }: { provider: Provider }) {
  const { providerId } = provider;
  const updateProviderWithId = updateProvider.bind(null, provider.providerId);
  return (
    <form action={updateProviderWithId} className="flex flex-wrap gap-3 ml-10">
      <h1 className="text-2xl">Actualizar proveedor</h1>
      <Input
        defaultValue={provider.providerName}
        label="Nombre"
        placeholder="Coca-Cola"
        name="providerName"
      />
      <Input
        defaultValue={provider.providerEmail}
        label="Correo"
        placeholder="coca@mail.com"
        name="providerEmail"
      />
      <Input
        defaultValue={provider.providerPhoneNumber}
        label="Número"
        placeholder="xxx-xxx-xxxx"
        name="providerPhoneNumber"
      />
      <Button type="submit" color="primary">
        Actualizar
      </Button>
    </form>
  );
}

export default FormUpdateProvider;
