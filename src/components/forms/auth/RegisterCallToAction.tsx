import Link from "next/link"

type AuthFormHeaderProps = {
  title: string
  href: string
  linkText: string
}

export const RegisterCallToAction: React.FC<AuthFormHeaderProps> = ({ title, href, linkText }) => {
  return (
    <p className="text-center text-sm text-muted-foreground">
      {title}{' '}
      <Link
        href={href}
        className="cursor-pointer text-primary underline underline-offset-4 hover:text-primary"
      >
        {linkText}
      </Link>
    </p>
  )
}
