"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
import { s } from "framer-motion/client";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function createProduct(formData: FormData) {
  let product: any = {};
  for (const key of formData.keys()) {
    if (!key.includes("$ACTION_ID")) {
      product[key] = formData.get(key);
    }
  }
  product.productPrice = +product.productPrice;
  product.countSeal = +product.countSeal;

  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      ...authHeaders(),
      "content-type": "application/json",
    },
  });
  console.log(await response.json());
  if (response.status === 200) {
    revalidateTag("dashboard:products");
    redirect("/dashboard/products");
  }
}
