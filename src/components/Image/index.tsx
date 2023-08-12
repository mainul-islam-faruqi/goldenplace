// import { getCloudinaryUrl, Format, Quality } from "@looksrare/shared";
// import { useState, ReactEventHandler } from "react";
// import NextImage, { ImageProps as NextImageProps } from "next/image";
// import { TOKEN_IMAGE_PLACEHOLDER_URI, currentChainInfo } from "config";
// import { nextImageLoader, ImageLoaderProps } from "utils/mediaLoaders/nextImage";

// @ts-ignore
// import { getCloudinaryUrl, Format, Quality } from "@looksrare/shared";
import { useState, ReactEventHandler } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { TOKEN_IMAGE_PLACEHOLDER_URI } from '@/config/urls';
// import { currentChainInfo } from "config/chains";
// import { nextImageLoader, ImageLoaderProps } from "utils/mediaLoaders/nextImage";

/**
 * Construct Cloudinary URL for resources delivered by our CDN.
 * For other resources - Use Next Image default CDN.
 * @returns string
 */
// const loader = (imageLoaderProps: ImageLoaderProps, format?: Format, contentType?: string) => {
//   if (currentChainInfo.cdnUrl && imageLoaderProps.src.startsWith(currentChainInfo.cdnUrl)) {
//     const { quality, width, src } = imageLoaderProps;
//     const relativeSrc = src.replace(currentChainInfo.cdnUrl, "");
//     return getCloudinaryUrl({
//       src: relativeSrc,
//       baseCloudinaryUrl: currentChainInfo.cloudinaryUrl,
//       quality,
//       width,
//       format,
//       contentType,
//       resourceType: "image",
//     });
//   }

//   return nextImageLoader(imageLoaderProps);
// };

export interface ImageProps extends Omit<NextImageProps, 'quality'> {
  // format?: Format;
  format?: any;
  contentType?: string;
  placeholderSrc?: string;
  // quality?: Quality;
  quality?: string;
}

export const Image = ({
  src,
  contentType,
  onError,
  format,
  placeholderSrc = TOKEN_IMAGE_PLACEHOLDER_URI,
  quality = 'auto',
  ...props
}: ImageProps) => {
  const [isImageError, setIsImageError] = useState(false);

  const handleError: ReactEventHandler<HTMLImageElement> = (error) => {
    setIsImageError(true);

    if (onError) {
      onError(error);
    }
  };

  return (
    <NextImage
      src={isImageError ? placeholderSrc : src}
      onError={handleError}
      // loader={(resolverProps) => loader({ ...resolverProps, quality }, format, contentType)}
      {...props}
    />
  );
};
