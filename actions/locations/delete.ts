"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteLocation(formData: FormData) {
  const locationId = formData.get("deleteValue");
  console.log("Location ID: " + locationId);
  if (!locationId) return;
  fetch(`${API_URL}/locations/${locationId}`, {
    headers: {
      ...authHeaders(),
    },
    method: "DELETE",
  });
  revalidateTag("dashboard:locations");
  redirect(`dashboard/?store=0`);
}
