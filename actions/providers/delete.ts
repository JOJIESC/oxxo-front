"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteProvider(
  providerId: string,
  formData: FormData
) {
  let Provider: any = {};
  for (const key of formData.keys()) {
    Provider[key] = formData.get(key);
  }

  const response = await fetch(`${API_URL}/providers/${providerId}`, {
    method: "DELETE",
    headers: {
      ...authHeaders(),
    },
  });
  console.log(response.status);
  if (response.status === 200) {
    revalidateTag("dashboard:providers");
    redirect("/dashboard/providers");
  }
}
