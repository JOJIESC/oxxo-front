"use server";
import axios from "axios";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHelpers";
export async function createLocation(formData: FormData) {
  console.log("Form Data: " + formData);
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
    const response = axios.post(
      `${API_URL}/locations`,
      {
        ...location,
      },
      {
        headers: {
          ...authHeaders(),
        },
      }
    );
    console.log((await response).data);
  } catch (error: any) {
    if (error.response) {
      console.error("Error:", error.response.status, error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  }
}
