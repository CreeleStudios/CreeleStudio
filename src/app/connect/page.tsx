"use client";
import ProductLogo from "../assets/images/sope.png";
import FeaturedImg from "../assets/images/sopo-first.png";
import MaskImg from "../assets/images/sopo-second.png";
import MaskImg1 from "../assets/images/sopo-third.png";
import MaskImg2 from "../assets/images/sopo-forth.png";
import MaskImg3 from "../assets/images/sopo-fifth.png";
import MaskImg4 from "../assets/images/sopo-sixth.png";
import MaskImg5 from "../assets/images/sopo-seventh.png";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";
import RoundBtn from "./../assets/artifacts/back-button.png";
import { useRouter } from "next/navigation";
gsap.registerPlugin(useGSAP, ScrollTrigger);
    

export default function Satchel() {
    const [domLoaded, setDomLoaded] = React.useState(false);
    const router = useRouter();
    useGSAP(() => {
        gsap.from("#movie", {
            opacity: 0,
            translateY: 30,
            duration: 1.5,
            ease: "power2.out",
        });
        gsap.from("#products", {
            opacity: 0,
            translateY: 240,
            stagger: 0.05,
            scrollTrigger: {
                trigger: "#products",
                start: "top 90%",
            },
            duration: 1.5,
            ease: "power2.out",
        });

        gsap.from(".gallery", {
            translateY: 200,
            scrollTrigger: {
                trigger: "#gallery-container",
                start: "top 70%",
            },
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
        });
    }, []);

    React.useEffect(() => {
        setDomLoaded(true);
    }, []);


    return (
      <main className="w-screen overflow-x-hidden">
        <div className="padding_product pb-20 lg:pt-20 pt-10 md:pt-16 about_sections relative">
          <button
            onClick={() => router.back()}
            className="relative flex items-center justify-center h-16 w-16 md:h-24 md:w-24 mb-5"
          >
            <Image
              src={RoundBtn}
              alt="Button"
              sizes="100%"
              className="btn_designed"
            />
          </button>
          <div
            id="movie"
            className="rounded-3xl overflow-hidden h-[300px] md:h-[400px] lg:h-[480px] xl:h-[710px] relative z-10"
          >
            {domLoaded && (
              <ReactPlayer
                url={"/connect.mp4"}
                height={"100%"}
                width={"100%"}
                light={"/sopo-poster.jpg"}
                controls={true}
                playing={true}
                volume={1}
                pip={true}
                stopOnUnmount={false}
                playsinline={true}
                config={{
                  youtube: {
                    playerVars: {
                      autoplay: 1,
                    },
                  },
                }}
              />
            )}
          </div>
          <div className="bg-gradient-to-t from-black to-black/0 absolute inset-x-0 bottom-0 h-[35vh]" />
        </div>
        <div className="flex items-center justify-center design_section_2 relative">
          <div className="bg-gradient-to-b from-black to-black/0 absolute inset-x-0 top-0 h-[35vh]" />
          <div className="bg-gradient-to-t from-black to-black/0 absolute inset-x-0 bottom-0 h-[35vh]" />
          <div className="flex items-center justify-center flex-col relative z-10 padding_product space-y-5">
            <Image
              src={ProductLogo}
              alt="Product Logo"
              id="products"
              className="h-40 md:h-60 lg:h-80 w-auto"
            />
            <div className="max-w-4xl md:text-center space-y-6 text-lg md:text-xl text-justify">
              <p id="products">
                The weight of expectation towards his children gradually turns
                Dotun from a loving parent to a strict father. Dotun is
                constantly complaining about his son Oyejo’s academic
                results,while missing Oyejo’s musical brilliance. That in turn
                leads to Oyejo going up from a son who was once inseparable from
                his father to a rebellious teenager who is giving up on earning
                his father’s pride.{" "}
              </p>
              <p id="products">
                The older Oyejo grows, the worse his academic performance gets,
                and the worse his relationship with Dotun gets. Coincidentally,
                his musical scores keep getting better, but Dotun doesn’t
                notice, or regard it. Finally, things change when he finds Oyejo
                playing the piano beautifully all alone in the music room and he
                remembers how inseparable they were before expectations and
                disappointments set them apart. <br /> Father and son sit side
                by side and their love for music “connects” them once again.
              </p>
              <p id="products">
                An adaptation of “DIS FELA SEF” a memoir about afrobeat written
                by Benson Idonije regarded as one of Nigeria's most revered
                music critics and popularly known for being the first band
                manager of “Fela Kuti”. He was part of the pioneering group of
                broadcasters who started Radio Nigeria (now Metro FM) in 1977.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          id="gallery-container"
          className="about_sections bg-contain padding_product pt-32 bg-blend-overlay bg-black/40 relative space-y-5"
        >
          <div className="bg-gradient-to-b from-black to-black/0 absolute inset-x-0 top-0 h-[35vh]" />
          <Image
            src={FeaturedImg}
            alt="Banner"
            className="relative z-20 h-full w-full object-contain gallery"
          />

          <div className="grid md:grid-cols-2 gap-5">
            <div className="gallery">
              <Image
                src={MaskImg}
                alt="Banner"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="gallery">
              <Image
                src={MaskImg1}
                alt="Banner"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="gallery">
              <Image
                src={MaskImg2}
                alt="Banner"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="gallery">
              <Image
                src={MaskImg3}
                alt="Banner"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <Image
            src={MaskImg4}
            alt="Banner"
            className="relative z-20 h-full w-full object-contain gallery"
          />
          <Image
            src={MaskImg5}
            alt="Banner"
            className="relative z-20 h-full w-full object-contain gallery"
          />
        </div>
        <div className="h-32" />
        <Footer />
      </main>
    );
}