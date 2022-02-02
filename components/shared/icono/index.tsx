import Link from "next/link";
import Image from "next/image";
import { IconoProps } from "./interfaces";

export const Icono = ({ width, height, url, svgUrl }: IconoProps) => (
  <Link href={url} passHref={true}>
      <a target="_blank" rel="noreferrer">
        <Image src={svgUrl} height={width} width={height} />
      </a>
  </Link>
);
