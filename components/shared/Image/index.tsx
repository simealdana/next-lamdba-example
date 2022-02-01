import { Fragment, useState } from "react";
import Image from "next/image";
export interface ImageProps {
  src: string;
  width: number | string;
  height: number | string;
  alt:string
}

export interface ImageSkeleton {
  width: number | string;
  height: number | string;
}
export const ImageLoading = (props: ImageSkeleton) => (
  <div style={{ ...props }}></div>
);

export const ImageWithSketelon = (props: ImageProps) => {
  const [isImageReady, setIsImageReady] = useState(false);
  const onLoadCallBack = () => setIsImageReady(true);

  return (
    <Fragment>
      <Image
        className={isImageReady ? "" : "d_none"}
        {...props}
        onLoadingComplete={onLoadCallBack}
        onLoad={onLoadCallBack}
      />
      {!isImageReady && (
        <ImageLoading width={props.width} height={props.height} />
      )}
    </Fragment>
  );
};
