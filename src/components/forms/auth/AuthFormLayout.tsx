import { FooterLegal } from '@/components/FooterLegal'
import { Logo } from '@/components/Logo'
import { SocialLoginButton } from '@/components/SocialLoginButton/SocialLoginButton'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FormHeader } from './FormHeader'
import { RegisterCallToAction } from './RegisterCallToAction'

type AuthFormLayoutProps = {
  title: string
  subtitle: string
  isCallToActionHidden?: boolean
  isSocialLoginHidden?: boolean
  children: React.ReactNode
  callToActionText?: string
  callToActionLink?: string
  callToActionLabel?: string
} & React.HTMLAttributes<HTMLDivElement>

export const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({
  children,
  callToActionText,
  callToActionLink,
  callToActionLabel,
  subtitle,
  title,
  isCallToActionHidden = false,
  isSocialLoginHidden = false,
  ...props
}) => {
  return (
    <div className={cn("auth-layout flex w-full flex-1 flex-col justify-between", props.className)}>
      <Link href="/" passHref>
        <Logo />
      </Link>
      <div className="flex-1 animate-fadeinup space-y-6 pt-8">
        <FormHeader title={title} subtitle={subtitle} />
        {children}
        {!isSocialLoginHidden && <SocialLoginButton />}
        {!isCallToActionHidden && callToActionText && callToActionLink && callToActionLabel && (
          <RegisterCallToAction
            title={callToActionText}
            href={callToActionLink}
            linkText={callToActionLabel}
          />
        )}
      </div>
      <FooterLegal />
    </div>
  )
}
