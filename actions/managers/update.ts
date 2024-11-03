"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function updateManager(
  managerId: string,
  formData: FormData
) {
  let manager: any = {};
  for (const key of formData.keys()) {
    manager[key] = formData.get(key);
  }

  manager["managerSalary"] = +manager["managerSalary"];
  if (!manager?.location) delete manager?.location;
  manager.location = +manager.location;

  const response = await fetch(`${API_URL}/managers/${managerId}`, {
    method: "PATCH",
    body: JSON.stringify(manager),
    headers: {
      ...authHeaders(),
    },
  });
  const data = await response.json();
  console.log(data);
  if (response.status === 200) {
    revalidateTag("dashboard:managers");
    revalidateTag(`dashboard:managers/${managerId}`);
    redirect("/dashboard/managers");
  }
}
