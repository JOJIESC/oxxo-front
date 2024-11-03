import { Manager } from "@/entities";
import updateManager from "@/actions/managers/update";
import { Button, Input } from "@nextui-org/react";
import SelectStore from "./SelectStore";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
export default async function FormUpdateManager({
  manager,
}: {
  manager: Manager;
}) {
  const updateManagerWithId = updateManager.bind(null, manager.managerId);
  const responseStores = await fetch(`${API_URL}/locations`, {
    headers: {
      ...authHeaders(),
    },
  });
  const stores = await responseStores.json();
  return (
    <form action={updateManagerWithId} className="bg-orange-400 rounded-md">
      <h1>Actualizar Manager</h1>
      <Input
        name="name"
        placeholder="Nombre"
        defaultValue={manager.managerFullName}
      />
      <Input
        name="email"
        placeholder="Email"
        defaultValue={manager.managerEmail}
      />
      <Input
        name="phone"
        placeholder="Telefono"
        defaultValue={manager.managerPhoneNumber}
      />
      <Input
        name="salary"
        placeholder="Salario"
        defaultValue={String(manager.managerSalary)}
      />
      <SelectStore
        store={stores}
        defaultStore={manager?.location?.locationId}
      />
      <Button color="primary" type="submit">
        Actualizar
      </Button>
    </form>
  );
}
