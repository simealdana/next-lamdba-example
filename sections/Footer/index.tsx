import { SOCIALMEDIALIST } from "../../components/navBarAlternate/constants";
import { ImageWithSketelon } from "../../components/shared/Image";
import { IconsList } from "../../components/shared/socialMediaList";

export const Footer = () => (
  <footer className="bg-primary-background py-5">
    <div className="flex justify-center sm:flex-row sm:flex-col container">
      <div className="footer__icons flex flex-col p-5">
        <ImageWithSketelon
          src="/img/imgLogo.png"
          alt="Vercel Logo"
          width={60}
          height={40}
        />
        <div className="flex py-2 justify-center">
          <IconsList items={SOCIALMEDIALIST} classes={""} />
        </div>
      </div>
    </div>
  </footer>
);
