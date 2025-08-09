import AppStore from "@/assets/vectors/app-store.svg";
import AppStoreHover from "@/assets/vectors/app-store-hover.svg";
import GooglePlay from "@/assets/vectors/google-play.svg";
import GooglePlayHover from "@/assets/vectors/google-play-hover.svg";
import { STORE_LINKS } from "@/constants/links";

const AppDownload = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-28 bg-white">
      {/* Responsive Grid Container */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div className="flex flex-col items-start gap-6 lg:gap-12 w-full">
          {/* Section Title */}
          <div className="flex flex-col items-start gap-4 w-full">
            {/* Heading + Text */}
            <div className="flex flex-col items-start gap-2 w-full">
              <h2>Leve o SYD com você</h2>
              <p>Baixe o app do SYD e tenha acesso a atendimentos psicológicos imediatos, agendamentos, histórico de consultas e suporte sempre à mão. Tudo com segurança, praticidade e acolhimento no seu bolso.</p>
            </div>
          </div>
          {/* Actions */}
          <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center lg:justify-items-start">
            <a href={STORE_LINKS.GOOGLE_PLAY} target="_blank" rel="noopener noreferrer" aria-label="Download on Google Play" className="group">
              <GooglePlay 
                className="h-auto group-hover:hidden"
              />
              <GooglePlayHover 
                className="h-auto hidden group-hover:block" 
              />
            </a>
            <a href={STORE_LINKS.APP_STORE} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store" className="group">
              <AppStore
                className="h-auto group-hover:hidden" 
              />
              <AppStoreHover
                className="h-auto hidden group-hover:block" 
              />
            </a>
          </div>
        </div>

        {/* Placeholder image */}
        <div className="w-full">
          <img src="https://i.imgur.com/IsqWKo2.jpeg" alt="App preview" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>
    </section>

  );
};

export default AppDownload;
