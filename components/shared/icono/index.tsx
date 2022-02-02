import Link from "next/link";
import Image from "next/image";
import { IconoProps } from "./interfaces";

export const Icono = ({ width=0, height=0, url, svgUrl }: IconoProps) => (
  <Link href={url} passHref={true}>
      <a target="_blank" rel="noreferrer">
        <Image src={svgUrl} height={width} width={height} alt={svgUrl}/>
      </a>
  </Link>
);
