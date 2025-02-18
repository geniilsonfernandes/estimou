'use client'

import { cn } from '@/lib/utils'
import { User } from 'lucide-react'

type QuoteProps = {
  author?: string
  quote?: string
} & React.HTMLAttributes<HTMLDivElement>

const Quote: React.FC<QuoteProps> = ({ quote, author, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        props.className,
        'relative min-h-[100px] w-full rounded-lg border border-white/10 bg-white/10 p-4 shadow-md backdrop-blur-sm'
      )}
    >
      <blockquote className="flex flex-col gap-2">
        <p className="text-sm">{quote}</p>
        <footer className="flex gap-2 font-exo text-sm opacity-50">
          <User size={16} />
          {author}
        </footer>
      </blockquote>
    </div>
  )
}

const estimouQuotes = [
  {
    text: 'Com o Estimou, criar orçamentos ficou rápido e intuitivo. Simplesmente essencial!',
    author: 'João Silva',
  },
  {
    text: 'Nunca foi tão fácil organizar e personalizar meus orçamentos. Estimou é game changer!',
    author: 'Maria Oliveira',
  },
  {
    text: 'Precisão e praticidade no mesmo lugar. Estimou economiza meu tempo e dinheiro. Estimou é game changer!',
    author: 'Carlos Mendes',
  },
]

const QuoteContainer = () => {
  return (
    <div className="group relative z-20 flex flex-1 flex-col justify-end gap-4 text-white [&_div]:absolute hover:[&_div]:block">
      <Quote
        quote={estimouQuotes[0].text}
        author={estimouQuotes[0].author}
        className="bottom-[24px] scale-[.90] opacity-30 transition-all duration-300 ease-out group-hover:bottom-[220px] group-hover:scale-[1] group-hover:opacity-100"
      />
      <Quote
        quote={estimouQuotes[1].text}
        author={estimouQuotes[1].author}
        className="bottom-[12px] scale-[.95] opacity-50 transition-all duration-300 ease-out group-hover:bottom-[110px] group-hover:scale-[1] group-hover:opacity-100"
      />
      <Quote quote={estimouQuotes[2].text} author={estimouQuotes[2].author} className="bottom-0" />
    </div>
  )
}

export default QuoteContainer
