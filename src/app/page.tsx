import { Navigation } from '@/components/Home/Navigation'
import { Button } from '@/components/ui/button'
import { ChartArea, Lock, Rocket, Sparkles, Star, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Estimou | Crieção de orçamentos personalizados',
  description:
    'Estimou é um aplicativo web intuitivo para criação de orçamentos personalizados, permitindo que freelancers e pequenas empresas agilizem o processo de precificação de serviços.',
}

export default function Home() {
  // radial-gradient(var(--background-width) 100% at 50% 0%, #FFF 6.32%, #4235ff21 29.28%, #d7e6ff78 68.68%, #FFF 100%)
  return (
    <>
      <div className="relative bg-white py-4 [--background-width:308.4%] [background:radial-gradient(var(--background-width)_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#4235ff21_68.68%,_#FFF_100%)] lg:[--background-width:198.96%]">
        <Navigation />

        <section className="container relative">
          <div className="ml-42 absolute -top-36 left-48 h-screen w-[1px] bg-brand-300/50"></div>
          <div className="mr-42 absolute -top-36 right-48 h-screen w-[1px] bg-brand-300/50"></div>

          <div className="relative z-20 mx-auto flex flex-col items-center justify-center px-8 py-28">
            <div className="flex justify-center">
              <h1 className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-400 bg-white p-[6px] text-xs font-bold text-brand shadow-md">
                <Sparkles size={16} />
                Orçamentos inteligente!
              </h1>
            </div>
            <h1 className="pt-4 text-center font-exo text-4xl font-bold text-gray-900 sm:max-w-lg">
              Diga adeus aos orçamentos via WhatsApp e PDFs!
            </h1>
            <div className="my-6 h-[1px] w-80 bg-gradient-to-r from-brand-900/0 to-brand-300"></div>
            <p className="text-md text-center text-gray-600">
              Transforme suas propostas em um link prático e profissional, pronto para fechar
              negócios com agilidade e eficiência.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button variant="secondary">
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
                  backgroundImage:
                    'radial-gradient(hsl(var(--foreground) / 20%) 1px, transparent 0)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 10px 10px',
                }}
              />
            </div>
          </div>
        </section>
        <section className="group container relative z-50 -mt-16">
          <div className="relative z-10 my-4 overflow-clip backdrop-blur-[1px] transition-all duration-500 ease-out [mask-image:radial-gradient(155.14%_111.78%_at_50%_-11.78%,_#D9D9D9_30%,_rgba(115,_115,_115,_0.00)_100%)] group-hover:z-50 group-hover:translate-y-[-20px] group-hover:overflow-visible group-hover:shadow-lg md:block">
            <div className="rounded-[10px] border border-brand-200/45 bg-brand-200/30 p-2 backdrop-blur-sm">
              <div className="relative mb-2 flex items-center justify-between gap-2 px-2">
                <div className="flex items-center gap-2">
                  <span className="block h-2 w-2 rounded-full bg-brand-300" />
                  <span className="block h-2 w-2 rounded-full bg-brand-400" />
                  <span className="block h-2 w-2 rounded-full bg-brand-500" />
                </div>
                <div className="flex max-w-52 flex-1 items-center gap-2 rounded-md border border-brand-200 bg-brand-100 p-2 text-xs text-brand-500">
                  <Lock size={16} />
                  www.estimou.com
                </div>
                <button className="flex items-center gap-2 text-xs text-brand-500">
                  <Star size={16} />
                </button>
              </div>
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

          <div
            aria-label="Principais Benefícios"
            className="relative z-50 -mt-20 rounded-2xl border border-gray-200/15 bg-white/50 p-4 py-8 backdrop-blur-sm transition-all duration-500 ease-out group-hover:-mt-60 sm:mx-8 sm:-mt-80 sm:px-8"
          >
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
        </section>
      </div>
      <section className="border-t border-t-gray-200">
        <div className="container py-8">
          <h1>Como Funciona</h1>
        </div>
      </section>
      <section className="border-t border-t-gray-200">
        <div className="container py-8">
          <h1>Benefícios</h1>
        </div>
      </section>
      <section className="border-t border-t-gray-200">
        <div className="container py-8">
          <h1>Planos e Preços</h1>
        </div>
      </section>
      <section className="border-t border-t-gray-200">
        <div className="container py-8">
          <h1>FAQ</h1>
        </div>
      </section>
      <section className="border-t border-t-gray-200">
        <div className="container py-8">
          <h1>FOOTER</h1>
        </div>
      </section>
    </>
  )
}
