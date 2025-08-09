import { Button } from "@/components/ui/button";
import { WHATSAPP_LINKS } from "@/constants/links";
import Image from "next/image";

const Hero = () => {
  return (
    <section 
      id="inicio"
      className="relative border-b border-primary overflow-hidden"
    >
      {/* Background Image with Next.js Image for better LCP */}
      <Image
        src="https://i.imgur.com/mqDrhio.jpeg"
        alt="Hero background"
        fill
        className="object-cover -z-10"
        priority
        quality={75}
        sizes="100vw"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="py-12 lg:py-14 space-y-8">
            <div className="space-y-4">
              <h2>
              Apoio psicológico imediato para colaboradores, sem burocracia.
              </h2>
              <p>
                Ofereça acesso a psicólogos 24h por dia, pague por minuto de uso e acompanhe tudo com métricas claras e relatórios.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex w-full sm:w-[20.25rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
                <a
                  href={WHATSAPP_LINKS.RH.PITCH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 text-white text-xl font-semibold"
                >
                  Fale com nosso time
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative w-full">
            <div className="py-0 lg:py-10 relative z-10 flex justify-center items-center">
              <img
                src="/illustrations/hero-illustration.svg"
                alt="Ilustração de atendimento psicológico"
                className="w-full h-full object-contain max-w-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
