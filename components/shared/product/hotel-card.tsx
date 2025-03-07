"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
//import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { IProduct } from "@/lib/db/models/product.model";
import Rating from "./rating";
import { formatNumber, generateId, round2 } from "@/lib/utils";
//import ProductPrice from "./product-price";
import HotelPrice from "./hotel-price";
//import ImageHover from './image-hover'
import AddToCart from "./add-to-cart";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const HotelCard = ({
  product,
  //  hideBorder = false,
  //  hideDetails = false,
  //  hideAddToCart = false,
}: {
  product: IProduct;
  hideDetails?: boolean;
  hideBorder?: boolean;
  hideAddToCart?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 rounded-md">
      <CardHeader className="p-0 relative">
        <Carousel
          className="w-full"
          plugins={[plugin.current]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {product.images.map((img, index) => (
              <CarouselItem key={index} className="w-full">
                <div
                  className="relative w-full h-[13rem] md:h-[15rem] lg:h-80 overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src={img}
                    alt={product.name}
                    fill
                    sizes="100vw"
                    className={`object-cover transition-transform duration-500 ${
                      isHovered ? "scale-110" : ""
                    }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardHeader>
      <CardContent className="p-4 text-center space-y-2">
        {/* <p className="font-bold">{product.brand}</p> */}
        <Link
          href={`/hotel/${product.slug}`}
          className="line-clamp-2 font-bold text-[20px]"
        >
          {product.name}
        </Link>
        <Link
          href={`/hotel/${product.slug}`}
          className="line-clamp-2 text-xs"
        >
          {product.address}
        </Link>
        <Link href={`/hotel/${product.slug}`} className="line-clamp-2">
          {product.description}
        </Link>
        <div className="flex justify-center gap-2">
          <Rating rating={product.avgRating} />
          <span>({formatNumber(product.numReviews)})</span>
        </div>
        <HotelPrice
          isDeal={product.tags.includes("todays-deal")}
          price={product.price}
          listPrice={product.listPrice}
          availability={product.availability}
          numSales={product.numSales}
          forListing
        />
      </CardContent>
      <CardFooter className="p-2 flex justify-center">
        <AddToCart
          minimal
          item={{
            clientId: generateId(),
            product: product._id,
            size: product.sizes[0],
            color: product.colors[0],
            countInStock: product.countInStock,
            name: product.name,
            slug: product.slug,
            category: product.category,
            price: round2(product.price),
            quantity: 1,
            image: product.images[0],
          }}
        />
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
