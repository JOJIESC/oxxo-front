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
    <form
      action={updateManagerWithId}
      className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2"
    >
      <h1>Actualizar Manager</h1>
      <Input
        required={true}
        isRequired
        label="Nombre"
        name="managerFullName"
        placeholder="Nombre"
        defaultValue={manager.managerFullName}
      />
      <Input
        required={true}
        isRequired
        label="Email"
        name="managerEmail"
        placeholder="Email"
        defaultValue={manager.managerEmail}
      />
      <Input
        required={true}
        isRequired
        label="Telefono"
        name="managerPhoneNumber"
        placeholder="Telefono"
        defaultValue={manager.managerPhoneNumber}
      />
      <Input
        required={true}
        isRequired
        label="Salario"
        name="managerSalary"
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
