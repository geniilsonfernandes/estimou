import { db } from '@/lib/db'

export const getUserByEmail = (email: string) => {
  try {
    return db.user.findUnique({
      where: {
        email,
      },
    })
  } catch {
    return null
  }
}

export const getUserById = (id: string) => {
  try {
    return db.user.findUnique({
      where: {
        id,
      },
    })
  } catch {
    return null
  }
}
