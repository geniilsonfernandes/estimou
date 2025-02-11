import { FooterLegal } from '@/components/FooterLegal'
import { Logo } from '@/components/Logo'
import { SocialLoginButton } from '@/components/SocialLoginButton/SocialLoginButton'
import Link from 'next/link'
import { FormHeader } from './FormHeader'
import { RegisterCallToAction } from './RegisterCallToAction'

type AuthFormWrapperProps = {
  title: string
  subtitle: string
  hiddenCallToAction?: boolean
  hiddenSocialLogin?: boolean
  children: React.ReactNode
  callToAction: string
  href: string
  linkText: string
}

export const Wrapper: React.FC<AuthFormWrapperProps> = ({
  children,
  callToAction,
  href ,
  linkText,
  subtitle,
  title,
  hiddenCallToAction = false,
  hiddenSocialLogin = false,
}) => {
  return (
    <div className="flex w-full flex-1 flex-col justify-between">
      <Link href="/" passHref>
        <Logo />
      </Link>
      <div className="flex-1 space-y-6 pt-8">
        <FormHeader title={title} subtitle={subtitle} />
        {children}
        {!hiddenSocialLogin && <SocialLoginButton />}
        {!hiddenCallToAction && (
          <RegisterCallToAction title={callToAction} href={href} linkText={linkText} />
        )}
      </div>
      <FooterLegal />
    </div>
  )
}
