"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
import { revalidateTag } from "next/cache";

export default async function createManager(
  managerId: string,
  formData: FormData
) {
  let manager: any = {};
  for (const key of formData.keys()) {
    manager[key] = formData.get(key);
  }

  const response = await fetch(`${API_URL}/managers/${managerId}`, {
    method: "DELETE",
    headers: {
      ...authHeaders(),
    },
  });
  console.log(response.status);
  revalidateTag("dashboard:managers");
}
