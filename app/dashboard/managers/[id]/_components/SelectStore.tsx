"use client";

import { Location } from "@/entities";
import { Select, SelectItem } from "@nextui-org/react";

function SelectStore({
  store,
  defaultStore,
}: {
  store: Location[];
  defaultStore: number;
}) {
  const disabledSotres = store
    .map((store: Location) => {
      if (store.manager !== undefined && store.locationId !== defaultStore)
        return String(store.locationId);
    })
    .filter((storeId) => storeId !== undefined);
  return (
    <Select
      name="location"
      label="location"
      defaultSelectedKeys={defaultStore ? [String(defaultStore)] : undefined}
      disabledKeys={disabledSotres}
    >
      {store.map((store: Location) => (
        <SelectItem key={String(store.locationId)}>
          {store.locationName}
        </SelectItem>
      ))}
    </Select>
  );
}

export default SelectStore;
