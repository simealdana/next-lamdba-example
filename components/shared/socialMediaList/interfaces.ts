export interface SocialMedia {
  socialMedia: string;
  url: string;
  iconSvg: string;
}

export interface IconoListProps{
  items:SocialMedia[]
  classes:string;
}
