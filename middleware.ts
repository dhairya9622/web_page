import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const emailValidated = request.cookies.get("emailValidated");

    // Redirect to the homepage if validation fails and user tries to access /chat
    if (!emailValidated && request.nextUrl.pathname === "/chat") {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

// Define route matching for middleware
export const config = {
    matcher: ["/chat"], // Apply middleware only to /chat route
};
