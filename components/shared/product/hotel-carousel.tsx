"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/debunniyq/image/upload/v1739635438/product_wwuo2g.png";

const HotelCarousel = ({ images }: { images?: string[] }) => {
  const validImages =
    images && images.length > 0 ? images : [DEFAULT_IMAGE];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
    // customPaging: (i: number) => (
    //   <div className="w-6 h-6 flex items-center justify-center text-sm font-semibold">
    //     {i + 1}
    //   </div>
    // ),
  };

  return (
    <div className="w-full">
      <Slider {...settings} className="w-full">
        {validImages.map((img, index) => (
          <div key={index} className="w-full">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={1920}
              height={800}
              className="w-full object-cover"
              style={{
                height: "600px",
                minHeight: "150px",
                maxHeight: "800px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HotelCarousel;
