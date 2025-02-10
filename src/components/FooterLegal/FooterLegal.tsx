import Link from 'next/link'

const LINKS = {
    TERMS: 'Terms of Service',
    PRIVACY: 'Privacy Policy',
}


export const FooterLegal = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
      <p className="text-xs text-muted-foreground">© Estimou {new Date().getFullYear()} - Todos os direitos reservados</p>
      <p className="text-xs text-muted-foreground">
        <Link href={LINKS.TERMS} className="hover:text-primary">
          Terms of Service
        </Link>{' '}
        /{' '}
        <Link href={LINKS.PRIVACY} className="hover:text-primary">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  )
}
