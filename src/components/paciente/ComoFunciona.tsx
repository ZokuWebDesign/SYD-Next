import { Button } from "@/components/ui/button";
import Step1SVG from "@/assets/vectors/step1.svg";
import Step2SVG from "@/assets/vectors/step2.svg";
import Step3SVG from "@/assets/vectors/step3.svg";
import { AUTH_LINKS } from "@/constants/links";

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 py-16 lg:py-28 px-4 lg:px-14">
      <header className="flex flex-col items-center gap-2 w-full lg:w-[48rem] text-center">
        <h2>Cuidar da sua saúde emocional nunca foi tão simples</h2>
        <p>Com o SYD, você tem acesso a atendimentos psicológicos online no momento em que mais precisa ou, se preferir, com hora marcada. Sem filas de espera, sem burocracia.<br/>Tudo direto do seu celular ou computador, com praticidade e acolhimento desde o primeiro clique.</p>

      </header>

      <div className="w-full grid gap-8 md:grid-cols-3">

        <div className="text-center">
          <div className="flex justify-center">
            <Step1SVG
              width="40"
              height="74"
              className="w-10 h-[74px]"
              aria-label="Ilustração de atendimento psicológico"
            />
          </div>
          <h3>Escolha atendimento<br />imediato ou agende</h3>
        </div>


        <div className="text-center">
          <div className="flex justify-center">
            <Step2SVG
              width="58"
              height="75"
              className="w-[58px] h-[75px]"
              aria-label="Ilustração de atendimento psicológico"
            />
          </div>
          <h3>Conecte com psicólogo<br />disponível em poucos minutos</h3>
        </div>


        <div className="text-center">
          <div className="flex justify-center">
            <Step3SVG
              width="55"
              height="75"
              className="w-[55px] h-[75px]"
              aria-label="Ilustração de atendimento psicológico"
            />
          </div>
          <h3>Pague só pelo<br />tempo que usar</h3>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center w-full gap-4">
              <Button size="lg" className="flex w-full sm:w-[20.25rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
                <a
                  href={AUTH_LINKS.PATIENT.SIGNUP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3.5 text-white text-xl font-semibold"
                >
                  Comece agora
                </a>
              </Button>
      </div>
    </section>
  );
};

export default ComoFunciona;
