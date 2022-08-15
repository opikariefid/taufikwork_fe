import { NextResponse } from 'next/server'

export function middleware(req, ev) {
  if (req.nextUrl.pathname.startsWith('/app')) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  if (req.nextUrl.pathname.startsWith('/detail')) {
    const id = req.page.params?.index;
    if (id != 'wallet' && id != 'category') {
      return NextResponse.redirect(new URL('/home', req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith('/view')) {
    const id = req.page.params?.index;
    if (id != 'wallet' && id != 'category') {
      return NextResponse.redirect(new URL('/home', req.url));
    }
  }
}

export const config = {
  matcher: '/home/:path*',
}