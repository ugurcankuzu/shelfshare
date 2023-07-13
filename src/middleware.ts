import { NextResponse,NextRequest } from "next/server";

export function middleware(req: NextRequest){
    if(req.nextUrl.pathname === "/"){
        return NextResponse.redirect(new URL("/dashboard",req.url));
    }
}

export const config = {
    matcher: "/"
}