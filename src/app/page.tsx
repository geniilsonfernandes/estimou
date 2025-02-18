import { Navigation } from '@/components/Home/Navigation'
import { Button } from '@/components/ui/button'
import { ChartArea, Rocket, Sparkles, Star, Video } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Estimou | Crieção de orçamentos personalizados',
  description:
    'Estimou é um aplicativo web intuitivo para criação de orçamentos personalizados, permitindo que freelancers e pequenas empresas agilizem o processo de precificação de serviços.',
}

export default function Home() {
  return (
    <div className="relative h-[2222px] bg-gray-100">
      <Navigation />

      <div className="flex h-screen flex-col">
        <div className="flex-1">
          <div className="container">
            <div className="relative z-20 mx-auto flex flex-col items-center justify-center px-72 py-20 pt-40">
              <div className="flex justify-center">
                <h1 className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-400 bg-white p-2 px-4 text-sm font-bold text-brand shadow-md">
                  <Sparkles size={16} />
                  Orçamentos inteligente!
                </h1>
              </div>
              <h1 className="pt-4 text-center font-exo text-lg font-normal text-gray-900 lg:text-3xl">
                Diga adeus aos orçamentos via WhatsApp e PDFs!
              </h1>
              <div className="my-6 h-[1px] w-80 bg-gradient-to-r from-brand-900/0 to-brand-300"></div>
              <p className="text-md text-center text-gray-600">
                Transforme suas propostas em um link prático e profissional, pronto para fechar
                negócios com agilidade e eficiência.
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline">
                  <Video />
                  Demonstração
                </Button>
                <Link href="/auth/register" passHref>
                  <Button>
                    <Rocket />
                    Experimente agora
                  </Button>
                </Link>
                <span
                  className="absolute inset-0 -z-10 mx-auto rounded-2xl border border-brand bg-brand-500/5 backdrop-blur-lg"
                  style={{
                    mask: 'linear-gradient(179deg, #00000000 20%, rgb(0 0 0) 100%)',
                    backdropFilter: 'blur(100px)',
                    backgroundImage:
                      'radial-gradient(hsl(var(--foreground) / 20%) 1px, transparent 0)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                  }}
                />
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-gray-200 p-2">
              <h1 className="mt-2 flex items-center gap-2 px-2 text-sm font-semibold text-gray-800">
                <Star size={16} /> Por que escolher nosso gerador de orçamentos?
              </h1>

              <div className="mt-4 flex justify-between gap-2">
                {[1, 2, 3].map((_, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-1 flex-wrap rounded-2xl border bg-white/40 p-4 shadow-sm transition-all hover:-translate-y-2 hover:border-brand-500"
                    >
                      <div className="inline-flex items-center justify-center rounded-full bg-brand-600 p-2 text-brand-100">
                        <ChartArea strokeWidth={1} size={24} />
                      </div>
                      <div>
                        <h1 className="text-md pt-4 font-bold text-gray-800">
                          Análise e Estatísticas
                        </h1>
                        <p className="pt-2 text-sm text-gray-500/70">
                          Receba insights em tempo real sobre o desempenho dos orçamentos enviados.
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
