import * as jose from "jose";
export const API_URL = "http://127.0.0.1:4000";
export const TOKEN_NAME = "auth_for_oxxo";
export const SECRET_KEY = "GJRASJD!#@$!@#R#FGFDS!@#R$#!#@!#";

export async function getUserRolesFromToken(token: string, secret: string) {
  try {
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(secret)
    );

    if (Array.isArray(payload.userRoles)) {
      return payload.userRoles;
    } else {
      throw new Error("Roles not found in token");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error decoding token:", error.message);
    } else {
      console.error("Error decoding token:", error);
    }
    throw new Error("Invalid token");
  }
}
