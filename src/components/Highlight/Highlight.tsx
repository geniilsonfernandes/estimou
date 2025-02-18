import { Sparkles } from 'lucide-react'
import QuoteContainer from '../QuoteContainer'

export const Highlight = () => {
  return (
    <div className="bg-gradient-radial relative hidden flex-1 flex-col justify-between overflow-hidden rounded-lg bg-black bg-[radial-gradient(circle_at_top,_#4F46E5_0%,_rgba(0,0,0,1)_100%)] from-brand-900 to-black p-8 lg:flex">
      <div>
        <h1 className="inline-flex items-center gap-2 rounded-full border bg-white/25 p-2 px-4 text-sm font-bold text-brand-50 shadow-md">
          <Sparkles size={16} />
          Orçamentos inteligente!
        </h1>
      </div>
      <h1 className="pt-4 font-exo text-lg font-normal text-brand-50 lg:text-3xl">
        Diga adeus aos orçamentos via WhatsApp e PDFs!
      </h1>
      <span className="my-6 h-[1px] w-80 bg-gradient-to-r from-brand-900/0 to-brand-300"></span>
      <p className="text-sm text-white/70">
        Transforme suas propostas em um link prático e profissional, pronto para fechar negócios com
        agilidade e eficiência.
      </p>

      <QuoteContainer />
      <span className="absolute inset-0 z-10 bg-[radial-gradient(white_1px,transparent_0)] bg-[size:20px_20px] bg-[position:0_0,10px_10px] opacity-5"></span>

      <span className="z-1 absolute bottom-[-30%] left-[-10%] aspect-square w-[80%] rounded-full bg-gradient-to-tr from-transparent from-30% to-violet-900 opacity-30"></span>
      <span className="z-1 absolute bottom-[-30%] left-[-30%] aspect-square w-[70%] rounded-full border-4 border-violet-500 blur-sm"></span>
      <span className="z-1 absolute bottom-[-30%] left-[-30%] aspect-square w-[70%] rounded-full border-[1px] border-violet-200"></span>
    </div>
  )
}
