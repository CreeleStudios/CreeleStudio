"use client";
import {
  IoArrowDownOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import RoundBtn from "../../assets/artifacts/round_btn.png";
import { CiDesktopMouse2 } from "react-icons/ci";
import { fullpageApi } from "@fullpage/react-fullpage";
import ShinyButton from "../ui/shiny-button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

gsap.registerPlugin(useGSAP);

export default function Banner(props: { route: fullpageApi }) {
  useGSAP(() => {
    gsap.fromTo(
      ".latestNews",
      {
        translateY: -300,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        delay: 1,
        duration: 0.7,
        stagger: 0.07,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="banner px-5 md:px-10 lg:px-20 section">
      <div className="space-y-4 overflow-y-hidden">
        <div className="latestNews">
          <Link href={"https://creelestudios.medium.com"} target="_blank">
            <ShinyButton className="bg-white/20 backdrop-blur inline-block rounded-xl py-2.5 px-6">
              <span>Read the Latest News from Creele Studios</span>
              <IoArrowForwardCircleOutline className="text-xl md:text-2xl" />
            </ShinyButton>
          </Link>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="max-w-xs md:max-w-6xl"
        >
          <SwiperSlide>
            <div className="space-y-4">
              <h1 className="latestNews">
                Welcome to Creele <br /> Animation Studios
              </h1>
              <p className="latestNews lg:max-w-5xl md:max-w-xl mx-auto lg:text-lg md:text-base text-sm text-pretty">
                At Creele Studios we are leading a global indigenous IP Push,
                bringing Africa's rich culture and heritage to life through
                animation. Discover next-generation African stories across our
                diverse media outlets, including TV, film, radio, games, social
                platform.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-4">
              <h1 className="latestNews">
                African Stories, <br /> Global Pulse
              </h1>
              <p className="latestNews lg:max-w-2xl md:max-w-xl mx-auto md:text-base text-sm text-pretty">
                Creele is a family entertainment and trans-media production
                studio. Our mission is to magnificently portray the creative
                brilliance of Africa through breathtaking storytelling of our
                rich heritage using animated, interactive entertainment, sound
                and motion pictures
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute bottom-8 left-1/2 animate-bouncing">
        <button
          onClick={() => props.route.moveSectionDown()}
          className="relative bb flex items-center justify-center h-[90px] w-[90px] mouse group/mouse"
        >
          <Image
            src={RoundBtn}
            alt="Button"
            sizes="100%"
            className="btn_designed"
          />
          <div className="mouse_down group-hover/mouse:scale-105">
            <CiDesktopMouse2 className="text-xl" />
            <IoArrowDownOutline className="md:text-xs text-[10px] mouse_arrow_down" />
          </div>
        </button>
      </div>
    </section>
  );
}
