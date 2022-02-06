import { SOCIALMEDIALIST } from "../../components/navBarAlternate/constants";
import { ImageWithSketelon } from "../../components/shared/Image";
import { IconsList } from "../../components/shared/socialMediaList";
import { messages } from "./messages";

export const Footer = () => (
  <footer className="bg-primary-background py-5 footer">
    <div className="flex justify-center container">
      <div className="footer__icons flex flex-col ">
        <div className="flex  justify-center">
          <ImageWithSketelon
            src="/img/imgLogo.png"
            alt="Vercel Logo"
            width={100}
            height={60}
          />
        </div>
        <div className="flex py-2 justify-center">
          <IconsList items={SOCIALMEDIALIST} classes={""} />
        </div>
        <span className="text-secondary text-center text-xs">
          {messages.copyright}
        </span>
      </div>
    </div>
  </footer>
);
