import { Fragment, useState } from "react";
import Image from "next/image";
export interface ImageProps {
  src: string;
  width: number ;
  height: number ;
  alt:string
}

export interface ImageSkeleton {
  width: number ;
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
        className={isImageReady ? "" : "d_none"}
        width={width} 
        height={height}
        src={src}
        alt={alt}
        onLoadingComplete={onLoadCallBack}
        onLoad={onLoadCallBack}
      />
      {!isImageReady && (
        <ImageLoading width={width} height={height} />
      )}
    </Fragment>
  );
};
