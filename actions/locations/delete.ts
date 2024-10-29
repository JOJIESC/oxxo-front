"use server";

import { API_URL } from "@/constants";
import axios from "axios";
import { authHeaders } from "@/helpers/authHelpers";

export default async function deleteLocation(formData: FormData) {
  const locationId = formData.get("deleteValue");
  console.log("Location ID: " + locationId);
  if (!locationId) return;
  axios.delete(`${API_URL}/locations/${locationId}`, {
    headers: {
      ...authHeaders(),
    },
  });
}
