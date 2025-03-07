"use client";

import { useState } from "react";
import Image from "next/image";
//import Zoom from 'react-medium-image-zoom'
import "react-medium-image-zoom/dist/styles.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Images } from "./Images";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/debunniyq/image/upload/v1739635438/product_wwuo2g.png";

export default function ProductGallery({ images }: { images?: string[] }) {
  const filteredImages =
    images?.filter((img) => img && img.trim() !== "") || [];
  const validImages =
    filteredImages.length > 0 ? filteredImages : [DEFAULT_IMAGE];
  const [selectedImage, setSelectedImage] = useState(0);
  const safeSelectedImage =
    selectedImage >= 0 && selectedImage < validImages.length
      ? selectedImage
      : 0;
  return (
    <div className="flex gap-2">
      <Carousel className="w-[13%] max-h-[400px] overflow-y-auto">
        <CarouselContent className="mt-1 ml-1 mr-1 flex flex-col gap-1">
          {validImages.map((image, index) => (
            <CarouselItem key={index} className=" pl-1 flex-[0_0_10%] flex-shrink-0 ">
              <button
                onClick={() => setSelectedImage(index)}
                className={`w-full rounded-md overflow-hidden ${
                  selectedImage === index
                    ? "ring-2 ring-blue-500"
                    : "ring-1 ring-gray-300"
                }`}
              >
                <Image
                  src={image || DEFAULT_IMAGE}
                  alt={`Product thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="w-full">
        <Images
          image={[validImages[safeSelectedImage]]}
          name={`Product Image ${safeSelectedImage + 1}`}
          width={850}
          height={300}
          priority={true}
          //sizes="(max-width: 1024px) 100vw, (max-width: 500px) 50vw, (max-width: 1536px) 33vw"
          //sizes="(max-width: 300px) 30vw, (max-width: 300px) 20vw, (max-width: 300px) 33vw"
          sizes=""
        />
      </div>
    </div>
  );
}
