'use client'

import { cn } from '@/lib/utils'

type QuoteProps = React.HTMLAttributes<HTMLDivElement>

const Quote: React.FC<QuoteProps> = (props) => {
  return (
    <div
      {...props}
      className={cn(
        props.className,
        'relative rounded-lg border border-white/10 bg-white/10 p-4 shadow-md backdrop-blur-sm'
      )}
    >
      <blockquote className="space-y-2">
        <p className="text-sm">
          &ldquo;This library has saved me countless hours of work and helped me deliver stunning
          designs to my clients faster than ever before.&rdquo;
        </p>
        <footer className="font-exo text-sm opacity-50">Sofia Davis</footer>
      </blockquote>
    </div>
  )
}

const QuoteContainer = () => {

  return (
    <div className="group relative z-20 flex flex-1 flex-col justify-end gap-4 text-white [&_div]:absolute hover:[&_div]:block">
      <Quote className="scale-[.90] bottom-[24px] opacity-30 transition-all duration-300 ease-out group-hover:bottom-[220px] group-hover:scale-[1] group-hover:opacity-100" />
      <Quote className="bottom-[12px] scale-[.95] opacity-50 transition-all duration-300 ease-out group-hover:bottom-[110px] group-hover:scale-[1] group-hover:opacity-100" />
      <Quote className="bottom-0" />
    </div>
  )
}

export default QuoteContainer
