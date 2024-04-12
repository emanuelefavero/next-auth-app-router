export { auth as default } from './auth'

// Optionally, don't invoke middleware on some parts
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
