"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteProduct(
  productId: string,
  formData: FormData
) {
  let product: any = {};
  for (const key of formData.keys()) {
    product[key] = formData.get(key);
  }

  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE",
    headers: {
      ...authHeaders(),
      "content-type": "application/json",
    },
  });
  if (response.status === 200) {
    revalidateTag("dashboard:products");
    redirect("/dashboard/products");
  }
}
