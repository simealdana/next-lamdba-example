import { SOCIALMEDIALIST } from "../../components/navBarAlternate/constants";
import { ImageWithSketelon } from "../../components/shared/Image";
import { IconsList } from "../../components/shared/socialMediaList";

export const Footer = () => (
  <footer className="bg-primary-background">
    <div className="flex justify-between sm:flex-row sm:flex-col container">
      <div className="footer__icons flex flex-col p-5">
        <ImageWithSketelon
          src="/img/imgLogo.png"
          alt="Vercel Logo"
          width={40}
          height={40}
        />
        <div className="flex py-2 justify-center">
          <IconsList items={SOCIALMEDIALIST} classes={""} />
        </div>
      </div>
      <div className="footer__text flex justify-center flex-col items-center p-5">
          <p className="text-secondary pby2">
                Legal
          </p>
          <p className="text-secondary py-1">
                Legal
          </p>
          <p className="text-secondary pt-2">
                Legal
          </p>
      </div>
    </div>

  </footer>
);
