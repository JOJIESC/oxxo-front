import { API_URL } from "@/constants";
import { Card } from "@nextui-org/react";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHelpers";
import ManagerCard from "../[id]/_components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";
import FormUpdateManager from "./_components/FormUpdateManager";
import UpdateManager from "./_components/UpdateManager";

export default async function ManagerPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(`${API_URL}/managers/${params.id}`, {
    headers: {
      ...authHeaders(),
    },
    method: "GET",
    next: {
      tags: [`dashboard:managers:${params.id}`],
    },
  });
  const data: Manager = await response.json();
  return (
    <div className="flex flex-col flex-grow-0 items-center justify-center">
      <ManagerCard manager={data} />
      <div className="bg-gray-300 shadow-sm rounded-md px-10 py-2">
        <UpdateManager>
          <FormUpdateManager manager={data} />
        </UpdateManager>
        <DeleteManagerButton managerId={data.managerId} />
      </div>
    </div>
  );
}
