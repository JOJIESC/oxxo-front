"use server";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { Location } from "@/entities";
export async function createLocation(formData: FormData) {
  let location: any = {};
  let locationLatLng = [0, 0];
  for (const key of formData.keys()) {
    if (key.startsWith("$")) continue;
    const value = formData.get(key);
    console.log("Key: " + key);
    if (key === "locationLat" && value) {
      locationLatLng[0] = +value;
    } else if (key === "locationLng" && value) {
      locationLatLng[1] = +value;
    } else {
      location[key] = formData.get(key);
    }
  }
  location.locationLatLng = locationLatLng;
  try {
    const response = await fetch(`${API_URL}/locations`, {
      body: JSON.stringify(location),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders(),
      },
    });
    const { locationId }: Location = await response.json();
    if ((await response).status === 201) {
      revalidateTag("dashboard:locations");
      redirect(`dashboard/?store=${locationId}`);
    }
  } catch (error: any) {
    if (error.response) {
      console.error("Error:", error.response.status, error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  }
}
