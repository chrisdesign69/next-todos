import { NextResponse } from "next/server";

export const middleware = (req) => {
    // console.log("middleware run", req.nextUrl);
    return NextResponse.next()
}

export const config = {
    matcher: [
//         '/((|_next/image|favicon.ico).*)'
        '/((?!api|_next/static).*)'
    ]
}