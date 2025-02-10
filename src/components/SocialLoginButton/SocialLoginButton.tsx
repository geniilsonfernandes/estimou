"use client"


import { IconBrandGoogle } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'
import { Button } from '../ui/button'


export const SocialLoginButton = () => {
  return (
    <Button
      onClick={() => {
        signIn('google')
      }}
      variant="outline"
      className="btn-steel-500 w-full"
      type="button"
    >
      <IconBrandGoogle className="mr-2 h-4 w-4" />
      Login com Google
    </Button>
  )
}
