import { Fragment, useState } from "react";
import Image from "next/image";
import { styles } from "./style";
export interface ImageProps {
  src: string;
  width: number ;
  height: number ;
  alt:string
}

export interface ImageSkeleton {
  width: number  ;
  height: number ;
}
export const ImageLoading = (props: ImageSkeleton) => (
  <div style={{ ...props }}></div>
);

export const ImageWithSketelon = ({src,alt,width=0,height=0}: ImageProps) => {
  const [isImageReady, setIsImageReady] = useState(false);
  const onLoadCallBack = () => setIsImageReady(true);

  return (
    <Fragment>
      <Image
        className={isImageReady ? "cursor-pointer" : styles.displayNone}
        width={width} 
        height={height}
        src={src}
        alt={alt}
        onLoadingComplete={onLoadCallBack}
        onLoad={onLoadCallBack}
        unoptimized={true}
        loading="eager"
      />
      {!isImageReady && (
        <ImageLoading width={width} height={height} />
      )}
    </Fragment>
  );
};
