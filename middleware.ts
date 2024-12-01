import { NextRequest, NextResponse } from "next/server";
import { TOKEN_NAME } from "./constants";
import * as jose from "jose";

const AUTHORIZED_ROUTES = {
  "/managers": ["Manager", "Admin"],
  "/providers": ["Manager", "Admin"],
};

export default async function Middleware(req: NextRequest) {
  const token = req.cookies.get(TOKEN_NAME)?.value;

  // Redirigir al login si no hay token para rutas protegidas
  if (req.nextUrl.pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Verificar rutas con roles específicos
  for (const [path, roles] of Object.entries(AUTHORIZED_ROUTES)) {
    if (req.nextUrl.pathname.startsWith(path)) {
      if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      try {
        const { payload } = await jose.jwtVerify(
          token,
          new TextEncoder().encode(TOKEN_NAME)
        );

        // Verificar si el usuario tiene uno de los roles permitidos
        const userRoles = payload.userRoles as unknown as string[];
        if (
          !Array.isArray(userRoles) ||
          !roles.some((role) => userRoles.includes(role))
        ) {
          return NextResponse.redirect(new URL("/Login", req.url));
        }
      } catch (error) {
        return NextResponse.redirect(new URL("/Login", req.url));
      }
    }
  }

  // Redirigir la raíz a /dashboard
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
