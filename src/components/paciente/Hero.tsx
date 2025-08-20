import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleIcon from "@/assets/icons/icon-google.svg";
import AppleIcon from "@/assets/icons/icon-apple.svg";
import { STORE_LINKS } from "@/constants/links";

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
              Atendimento psicológico quando você mais precisa.
              </h2>
              <p>
                Está enfrentando um momento difícil e precisa de ajuda agora? No SYD, você pode iniciar uma vídeo chamada urgente com profissionais qualificados ou agendar sua consulta com poucos cliques.<br />
                <span className="text-secondary font-medium">A sua saúde emocional não pode esperar, e você também não precisa.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex w-full lg:w-[15.875rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
                <a
                  href={STORE_LINKS.GOOGLE_PLAY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full py-3.5 px-6 justify-center items-center gap-4 text-white text-xl font-semibold"
                >
                  <GoogleIcon
                    alt="Logo Google"
                    className="inline-block w-6 h-6"
                  />
                  Baixe na Play Store
                </a>
              </Button>
              <Button size="lg" className="flex w-full lg:w-[15.875rem] p-0 justify-center items-center rounded-2xl border border-secondary bg-white hover:bg-white/90 h-auto">
                <a
                  href={STORE_LINKS.APP_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full py-3.5 px-6 justify-center items-center gap-4 text-secondary text-xl font-semibold"
                >
                  <AppleIcon
                    alt="Logo Apple"
                    className="inline-block w-6 h-6"
                  />
                  Baixe na App Store
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
