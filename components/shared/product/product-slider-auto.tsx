'use client'

import * as React from 'react'
import Slider from 'react-slick'
import ProductCard from './product-card'
import { IProduct } from '@/lib/db/models/product.model'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ProductSliderAuto({
  title,
  products,
  hideDetails = false,
}: {
  title?: string
  products: IProduct[]
  hideDetails?: boolean
}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: hideDetails ? 6 : 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
  }

  return (
    <div className='w-full bg-background'>
      {title && <h2 className='h2-bold mb-5'>{title}</h2>}
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.slug} className='px-2'>
            <ProductCard
              hideDetails={hideDetails}
              hideAddToCart
              hideBorder
              product={product}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
