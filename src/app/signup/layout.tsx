import React from "react";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-full flex flex-col items-center bg-dark-brown pb-12">
      {children}
    </main>
  );
}
