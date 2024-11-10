import { Provider } from "@/entities";
import { Input, Button } from "@nextui-org/react";
import updateProvider from "@/actions/providers/update";
import DeleteProviderButton from "./DeleteButton";
import DeleteProvider from "./DeleteProvider";

function FormUpdateProvider({ provider }: { provider: Provider }) {
  const { providerId } = provider;
  const updateProviderWithId = updateProvider.bind(null, providerId);
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
      <DeleteProvider>
        <h1 className="text-2xl text-white text-center">
          ¿ Estas seguro de eliminar al proveedor {provider.providerName} ?
        </h1>
        <DeleteProviderButton provider={provider} />
      </DeleteProvider>
    </form>
  );
}

export default FormUpdateProvider;
