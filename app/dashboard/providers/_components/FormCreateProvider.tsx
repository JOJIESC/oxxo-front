import createProvider from "@/actions/providers/create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateProvider() {
  return (
    <form action={createProvider} className="flex flex-col gap-5 flex-grow-0">
      <h1 className="text-2xl text-white text-center">Crear proveedor</h1>
      <Input label="Nombre" placeholder="Coca-Cola" name="providerName" />
      <Input label="Correo" placeholder="coca@mail.com" name="providerEmail" />
      <Input
        label="Número"
        placeholder="xxx-xxx-xxxx"
        name="providerPhoneNumber"
      />
      <Button type="submit" color="primary">
        Crear proveedor
      </Button>
    </form>
  );
}
