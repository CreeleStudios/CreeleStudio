import RectangleBtn from "./../../assets/artifacts/rectangular_btn.png";
import ProjectCard from "./../../assets/images/project_image.png";
import ProjectCard2 from "./../../assets/artifacts/connect.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css/effect-cards";
import React from "react";
import "swiper/css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectLoaded = [
  {
    title: "The satchel",
    content:
      "A vigorous and compelling tale of African origin about two brothers fighting for the power to create a world using an all-powerful “Satchel”. A drama-filled, entertaining story sure to leave you at the edge of your screen! Taking you to the mystical lands of “The Satchel”",
    img: ProjectCard,
    url: "/satchel",
  },
  {
    title: "Sopo",
    content:
      "Unconditional love between parents and children can sometimes be hard to maintain, as seen in this musical about a strict father and his rebellious son.",
    img: ProjectCard2,
    // url: "/connect",
    url: ''
  },
];

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const onSwiperChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="relative z-10 grid items-center justify-center md:grid-cols-2 w-full gap-y-8">
      <div className="space-y-3 relative z-10 text-left order-2 md:order-1">
        <motion.h2
          initial={{
            translateY: 100,
            opacity: 0,
          }}
          whileInView={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            ease: "linear",
            duration: 0.5,
          }}
          className="relative inline-block after:absolute after:bottom-0 after:w-[35%] after:h-1 after:left-0 after:bg-[#FBD40D] after:rounded md:mb-4"
        >
          {ProjectLoaded[activeIndex].title}
        </motion.h2>
        <motion.p
          initial={{
            translateY: 100,
            opacity: 0,
          }}
          whileInView={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            ease: "linear",
            duration: 0.5,
            delay: 0.2,
          }}
          className="max-w-lg xl:max-w-xl xl:text-2xl md:text-xl text-balance opacity-80"
        >
          {ProjectLoaded[activeIndex].content}
        </motion.p>
        <Link
          href={ProjectLoaded[activeIndex].url}
          className="inline-block pt-3"
        >
          <motion.button
            initial={{
              translateY: 100,
              opacity: 0,
            }}
            whileInView={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              ease: "linear",
              duration: 0.5,
              delay: 0.3,
            }}
            className="bg-[#FBD40D] bb hover:bg-white transition-colors py-3.5 md:py-5 px-9 md:px-14 rounded-lg"
          >
            <h6 className="relative z-10 text-black md:text-xl text-lg">
              View Project
            </h6>
          </motion.button>
        </Link>
      </div>
      <div className="justify-center h-full md:flex order-1 md:order-2">
        <div className="flex items-center justify-center w-full ">
          <div className="space-y-5">
            <Swiper
              effect={"cards"}
              cardsEffect={{
                perSlideOffset: 15,
                // perSlideRotate: 8
              }}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              rewind={true}
              centeredSlides={true}
              grabCursor={true}
              onSlideChange={onSwiperChange}
              modules={[EffectCards, Autoplay]}
              className="max-w-80 xl:max-w-[450px] overflow-visible"
            >
              {ProjectLoaded.map((item, idx) => {
                return (
                  <SwiperSlide key={idx}>
                      <Image
                        src={item.img}
                        alt="Project Card"
                        sizes="100%"
                        className="object-contain object-center h-[35vh] lg:h-[400px] xl:h-[500px] mx-auto"
                      />
            
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex items-center gap-3 ml-6">
              {ProjectLoaded.map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:h-6 lg:w-6 h-4 w-4 border border-white rounded-full"
                >
                  <span
                    className={`h-2 w-2 lg:h-3 lg:w-3 inline-block bg-white ${
                      activeIndex == index ? "opacity-100" : "opacity-0"
                    } rounded-full transition-opacity ease-in-out duration-300`}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
