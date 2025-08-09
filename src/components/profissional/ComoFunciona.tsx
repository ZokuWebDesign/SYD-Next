import { Button } from "@/components/ui/button";
import Step1SVG from "@/assets/vectors/step1.svg";
import Step2SVG from "@/assets/vectors/step2.svg";
import Step3SVG from "@/assets/vectors/step3.svg";
import Step4SVG from "@/assets/vectors/step4.svg";
import { AUTH_LINKS } from "@/constants/links";

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="w-full max-w-8xl mx-auto flex flex-col items-center gap-12 py-16 lg:py-28 px-4 lg:px-14">
      <header className="flex flex-col items-center gap-2 w-full lg:w-[48rem] text-center">
        <h2>Atenda com liberdade, ganhe por minuto e ajude quem mais precisa.</h2>
        <p>No SYD, você tem controle total sobre seus atendimentos, horários e ganhos — tudo isso em uma plataforma segura, ética e feita por quem entende a rotina dos psicólogos.</p>
      </header>

      <div className="w-full grid gap-8 md:grid-cols-4">

        <div className="text-center">
          <div className="flex justify-center">
            <Step1SVG
              className="w-10 h-[74px]"
            />
          </div>
          <h3>Cadastre-se, configure sua agenda e disponibilidade</h3>
        </div>


        <div className="text-center">
          <div className="flex justify-center">
            <Step2SVG
              className="w-[58px] h-[75px]"
            />
          </div>
          <h3>Comece a atender urgências e/ou agendamentos</h3>
        </div>


        <div className="text-center">
          <div className="flex justify-center">
            <Step3SVG
              className="w-[55px] h-[75px]"
            />
          </div>
          <h3>Acompanhe seus atendimentos ou ganhos</h3>
        </div>


        <div className="text-center">
          <div className="flex justify-center">
            <Step4SVG
              className="w-[54px] h-[75px]"
            />
          </div>
          <h3>Antencipe seus pagamentos</h3>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center w-full gap-4">
              <Button size="lg" className="flex w-full sm:w-[20.25rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 h-auto">
                <a
                  href={AUTH_LINKS.PROFESSIONAL.SIGNUP}
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
