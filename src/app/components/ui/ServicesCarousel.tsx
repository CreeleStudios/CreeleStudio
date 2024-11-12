import Animation from '../../assets/artifacts/services.png';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import SoundDesignVid from './../../assets/images/sound-design.png';
import AnimationVid from '../../assets/motion_graphics/Animation.gif'
import StoryVid from '../../assets/motion_graphics/book2.gif'
import { motion } from "framer-motion"
import Image from 'next/image';

export default function ServicesCarousel() {
    return (
      <Swiper
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={"20"}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            autoplay: false,
          },
        }}
        className="w-fit h-fit mx-auto py-12"
      >
        {[
          {
            image: AnimationVid,
            label: "Animation",
          },
          {
            image: SoundDesignVid,
            label: "SOUND DESIGN",
          },
          {
            image: StoryVid,
            label: "STORYBOOKS & COMICS",
          },
        ].map((items, index) => (
          <SwiperSlide
            key={index}
            className="xl:max-w-[350px] lg:max-w-60 max-w-52"
          >
            <motion.div
              initial={{
                translateY: 150,
              }}
              animate={{
                translateY: 0,
              }}
              transition={{
                ease: "anticipate",
                duration: 0.5,
              }}
              className="drop-shadow-2xl hover:-translate-y-7 hover:rotate-3 transition-transform ease-in-out duration-300"
            >
              <Image
                src={Animation}
                alt="Services"
                sizes="100%"
                className="w-full h-full object-contain object-center relative z-0"
              />
              <div className="absolute inset-0 z-10 px-[5%] pt-[4%]">
                <Image
                  src={items.image}
                  alt="Animation"
                  className="h-[85%] w-full rounded-2xl"
                />
                <div className="flex-1 h-[15%] items-center justify-center flex">
                  <h6 className="uppercase relative z-10 xl:text-2xl md:text-lg text-lg">
                    {items.label}
                  </h6>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
}