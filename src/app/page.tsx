import { Navigation } from '@/components/Home/Navigation'
import { Button } from '@/components/ui/button'
import { ChartArea, Rocket, Sparkles, Star, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Estimou | Crieção de orçamentos personalizados',
  description:
    'Estimou é um aplicativo web intuitivo para criação de orçamentos personalizados, permitindo que freelancers e pequenas empresas agilizem o processo de precificação de serviços.',
}

export default function Home() {
  return (
    <div className="relative bg-white py-4">
      <Navigation />
      <div className="container">
        <div className="relative z-20 mx-auto flex flex-col items-center justify-center px-8 py-32">
          <div className="flex justify-center">
            <h1 className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-400 bg-white p-2 px-4 text-sm font-bold text-brand shadow-md">
              <Sparkles size={16} />
              Orçamentos inteligente!
            </h1>
          </div>
          <h1 className="pt-4 text-center font-exo text-3xl font-normal text-gray-900">
            Diga adeus aos orçamentos via WhatsApp e PDFs!
          </h1>
          <div className="my-6 h-[1px] w-80 bg-gradient-to-r from-brand-900/0 to-brand-300"></div>
          <p className="text-md text-center text-gray-600">
            Transforme suas propostas em um link prático e profissional, pronto para fechar negócios
            com agilidade e eficiência.
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
              className="absolute inset-0 -z-10 mx-auto rounded-2xl"
              style={{
                mask: 'linear-gradient(179deg, #00000000 20%, rgb(0 0 0) 100%)',
                backdropFilter: 'blur(100px)',
                backgroundImage: 'radial-gradient(hsl(var(--foreground) / 20%) 1px, transparent 0)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px',
              }}
            />
          </div>
        </div>
      </div>
      <div className="group container relative z-50 -mt-16">
        <div className="relative z-10 my-4 overflow-clip transition-all duration-500 ease-out [mask-image:radial-gradient(155.14%_111.78%_at_50%_-11.78%,_#D9D9D9_30%,_rgba(115,_115,_115,_0.00)_80%)] group-hover:z-50 group-hover:translate-y-[-20px] group-hover:overflow-visible group-hover:shadow-lg md:block">
          <div className="rounded-[10px] border border-brand-200/25 bg-brand-100/25 p-4">
            <Image
              src="/hero-ui.png"
              width={1200}
              height={800}
              layout="responsive"
              alt=""
              className="w-252 max-w-none rounded-lg md:w-auto md:max-w-full"
            />
          </div>
        </div>

        <div className="relative z-50 -mt-20 rounded-2xl border border-gray-200/15 bg-white/15 p-4 py-8 backdrop-blur-sm transition-all duration-500 ease-out group-hover:-mt-60 sm:mx-8 sm:-mt-80 sm:px-8">
          <div className="">
            <Star size={16} />
            <h1 className="text-md mt-4 flex items-center gap-2 font-semibold text-gray-800">
              Principais Benefícios
            </h1>
            <h2 className="flex items-center gap-2 text-sm text-gray-800">
              Por que escolher nosso gerador de orçamentos?
            </h2>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-4 pt-4 sm:flex-row">
            {[1, 2, 3].map((_, index) => {
              return (
                <div
                  key={index}
                  className="bg-radial-pattern rounded-2xl transition-all hover:-translate-y-2"
                >
                  <div className="flex flex-1 flex-wrap rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-100 to-transparent p-4 shadow-sm duration-500 ease-out hover:border-brand-500">
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
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
