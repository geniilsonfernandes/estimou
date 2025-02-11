'use client'

import { IconBrandGoogle } from '@tabler/icons-react'
import { signIn } from 'next-auth/react'
import { Button } from '../ui/button'

export const SocialLoginButton = () => {
  const handleClick = async () => {
    signIn('google')
  }

  return (
    <>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-2 text-sm">ou</span>
        </div>
      </div>
      <Button onClick={handleClick} variant="outline" className="w-full" type="button">
        <IconBrandGoogle className="mr-2 h-4 w-4" />
        Login com Google
      </Button>
    </>
  )
}
