"use client";
import React from "react";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { API_URL } from "@/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    setSubmitting(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    let authData: any = {};
    authData.userEmail = formData.get("userEmail");
    authData.userPassword = formData.get("userPassword");
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(authData),
        headers: {
          "content-type": "application/json",
        },
        cache: "no-cache",
        credentials: "include",
      });
      console.log(await response);
      if (response.status === 201) {
        router.push("/dashboard");
      }
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };
  return (
    <>
      <form
        className="flex flex-col px-10 py-2 rounded-md bg-slate-400 gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center">
          <Image src="/Oxxo_Logo.svg" width={200} height={0} alt="logo" />
        </div>
        <p className="text-center text-2xl font-bold">Login</p>
        <Input
          label="Email"
          name="userEmail"
          type="email"
          isRequired={true}
          size="sm"
        />
        <Input
          label="Password"
          name="userPassword"
          type="password"
          isRequired={true}
          size="sm"
        />
        <Button disabled={submitting} color="primary" type="submit">
          {submitting ? "Enviando..." : "Login"}
        </Button>
        <p>
          ¿No tienes cuenta?{" "}
          <Link className="text-red-600 font-bold" href="../signup">
            Registrate
          </Link>
        </p>
      </form>
    </>
  );
}

export default Login;
