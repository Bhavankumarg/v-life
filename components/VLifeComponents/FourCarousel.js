'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FourCarousel, HomeWhoWeAre, OurCommunities } from '../../utils/data'

const Content = React.forwardRef((props, ref) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="lg:hidden block">
      <div className="w-[90%] mx-auto">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={2000}
          //   customTransition="all .5"
          dotListClass="custom-dot-lists"
          removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
          className="h-[400px] bg-transparent container mx-auto"
        >
          {FourCarousel.map((items, index) => (
            <div class="p-5 bg-[#7F3F97] border text-white rounded-3xl h-60 -mt-20 lg:-mt-0">
            <h2 className="text-[25px]">{items.title}</h2>
            <p class="mt-4 font-light">
              {items.desc}
            </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
})

export default Content
