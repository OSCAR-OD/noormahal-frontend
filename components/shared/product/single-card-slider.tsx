'use client'

import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ProductCard from './product-card'
import { IProduct } from '@/lib/db/models/product.model'
//import Autoplay from 'embla-carousel-autoplay'
export default function SingleCardSlider({
  title,
  products,
  hideDetails = false,
}: {
  title?: string
  products: IProduct[]
  hideDetails?: boolean
}) {
    // const plugin = React.useRef(
    //    Autoplay({ delay: 4000, stopOnInteraction: true})
    // )

  return (
    <div className='w-full bg-background'>
      <h2 className='h2-bold mb-5'>{title}</h2>
      <Carousel
        //plugins={[plugin.current]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.slug}
              className={
                hideDetails
                  ? 'md:basis-1/4 lg:basis-1/6'
                  : 'md:basis-1/3 lg:basis-1/5'
              }
            >
              <ProductCard
                hideDetails={hideDetails}
                hideAddToCart
                hideBorder
                product={product}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-0' />
        <CarouselNext className='right-0' />
      </Carousel>
    </div>
  )
}
