import React from "react";

export default function DashboardLayout({children}:{children: React.ReactNode}){
    return <main className="w-full h-full flex flex-col items-center">{children}</main>
}