'use server'

import { db } from '@/lib/db'

export const getUserByEmail = async (email: string) => {
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

export const getUserById = async (id: string) => {
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
