import NextAuth from 'next-auth'
import { authRoutes, publicRoutes } from './routes'
import authConfig from './utils/auth.config'

// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig)

export default auth(async (req) => {
  const { nextUrl } = req
  const isAuthenticated = !!req.auth

  const isApiRoute = nextUrl.pathname.startsWith('/api')
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname)

  if (isApiRoute) return Promise.resolve()

  if (isAuthRoutes) {
    if (isAuthenticated) {
      return Response.redirect(new URL('/home', nextUrl))
    }
    return Promise.resolve()
  }

  if (!isPublicRoute && !isAuthenticated) {
    return Response.redirect(new URL('/login', nextUrl))
  }

  return Promise.resolve()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
