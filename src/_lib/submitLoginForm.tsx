"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";



export default async function submitLoginFormToAPI(formInput: any,router: AppRouterInstance) {

  const { email, password } = formInput;
  const result = await fetch(process.env.baseAPI + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  const response = await result.json();
  if (result.status === 200) {
    sessionStorage.setItem("userToken", response.token);
    router.push("/dashboard")
  } else {
    alert(response.message);
    return false;
  }
}
