/**
 * List of public routes that do not require authentication.
 * Users can access these routes without being logged in.
 */
export const publicRoutes = ['/']

/**
 * List of authentication-related routes.
 * These routes are used for login, registration, and other auth-related pages.
 */
export const authRoutes = ['/login', '/register']

/**
 * Default route to redirect authenticated users after login.
 */
export const DEFAULT_LOGIN_REDIRECT = '/home'
