'use client'
import ProductLogo from '../assets/motion_graphics/satchel.gif';
import FeaturedImg from '../assets/images/product_page_img.png'
import MaskImg from '../assets/images/Mask group-1.png';
import MaskImg1 from '../assets/images/Mask group-2.png';
import MaskImg2 from '../assets/images/Mask group-3.png';
import MaskImg4 from '../assets/images/Mask group-5.png';
import MaskImg5 from '../assets/images/Mask group.png';
import Lonely from '../assets/images/lonely.png';
import Taff from '../assets/images/staff.png';
import Game from '../assets/images/game.png';
import Purse from '../assets/images/purse.png';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import React from 'react';
import RoundBtn from './../assets/artifacts/back-button.png';
import {useRouter} from 'next/navigation'

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Satchel() {
    const ProductBanner = 'https://www.youtube.com/watch?v=lNNHX1DaShI&t=12shttps://www.youtube.com/watch?v=lNNHX1DaShI&t=12s'
    const [domLoaded, setDomLoaded] = React.useState(false);
    const router = useRouter()
    React.useEffect(() => {
        setDomLoaded(true);
    }, []);

    useGSAP(() => {
        gsap.from('#movie', {
            opacity: 0,
            translateY: 30,
            duration: 1.5,
            ease: 'power2.out'
        })
        gsap.from('#products', {
            opacity: 0,
            translateY: 240,
            stagger: 0.05,
            scrollTrigger: {
                trigger: '#products',
                start: "top 90%"
            },
            duration: 1.5,
            ease: 'power2.out'
        })
        gsap.to('#little-boy', {
            translateY: 0,
            scrollTrigger: {
                trigger: '#little-boy',
                end: 'bottom 90%',
                scrub: 1
            },
            ease: 'sine.in'
        })

        gsap.from('.gallery', {
            translateY: 200,
            scrollTrigger: {
                trigger: '#gallery-container',
                start: 'top 70%'
            },
            stagger: 0.1,
            duration: 1,
            ease: 'power2.out'
        })
    }, [])

    return (
      <main className="w-screen overflow-x-hidden">
        <div className="padding_product pb-20 lg:pt-20 pt-10 md:pt-16 about_sections relative">
                <button
                    onClick={()=>router.back()}
                    className="relative  flex items-center justify-center h-16 w-16 md:h-24 md:w-24 mb-5">
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
                url={ProductBanner}
                height={"100%"}
                width={"100%"}
                light={"/poster.jpg"}
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
        <div className="flex items-center justify-center design_section relative">
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
                A vigorous and compelling tale of African origin about two
                brothers fighting for the power to create a world using an
                all-powerful “Satchel”. A drama-filled, entertaining story sure
                to leave you at the edge of your screen! Taking you to the
                mystical lands of “The Satchel”
              </p>
              <p id="products">
                The Satchel is the debut production by Creele animation studios.
                It was directed by Nissi Ogulu and written by Jimi Oremule with
                animations done by the in-house creative team. It’s produced and
                voiced by Nissi Ogulu, Ade Okuboyejo, Ayobami Bello and Jimi
                Oremule with the songs and music created by Nissi alongside the
                in-house audio team. The story dates back thousands of years,
                and centers around two brothers, Obatala and Oduduwa who are
                children of Olodumare, the supreme ruler. Obatala, who is the
                crafter of human bodies, obtains permission from his father to
                create earth with the aid of a satchel.
              </p>
              <p id="products">
                Obatala is an artist who takes much pride in his work and
                celebrates the permission received from his father to create the
                universe. Oduduwa, on the other hand, is a charismatic lover boy
                type who has formed an attachment with a human. This story begs
                the question “Does love know any bounds?” Soon after Obatala has
                created the stars and the primeval ocean, his brother Oduduwa
                usurps the satchel with the aim to finish the job. Oduduwa,
                fuelled by ulterior motives, fends off his brother and chaos
                ensues. The story keeps viewers on the edge, as they are left to
                make a choice between the two brothers and what they
                respectively represent.
              </p>
            </div>
          </div>
          <Image
            src={Lonely}
            alt="Little Boy"
            id="little-boy"
            className="absolute w-40 -bottom-[25%] xl:w-80 h-auto z-50 -right-10 xl:-bottom-[40%] -translate-y-[500px]"
          />
        </div>
        <div
          id="gallery-container"
          className="about_sections bg-contain padding_product pt-32 bg-blend-overlay bg-black/40 relative space-y-5"
        >
          <div className="bg-gradient-to-b from-black to-black/0 absolute inset-x-0 top-0 h-[35vh]" />
          {/* <Image src={FeaturedImg} alt="Banner" className='relative z-20 h-full w-full object-contain gallery' /> */}

          <div
            id="movie"
            className="rounded-3xl overflow-hidden h-[300px] md:h-[400px] lg:h-[480px] xl:h-[710px] relative z-10"
          >
            {domLoaded && (
              <ReactPlayer
                url={"/Adupe.mp4"}
                height={"100%"}
                width={"100%"}
                light={"/adupe-poster.png"}
                controls={true}
                playing={true}
                volume={1}
                pip={true}
                stopOnUnmount={false}
                playsinline={true}
              />
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="gallery">
              <Image
                src={MaskImg5}
                alt="Banner"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="gallery">
              <Image
                src={Taff}
                alt="Banner"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="gallery">
              <Image
                src={MaskImg4}
                alt="Banner"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="gallery">
              <Image
                src={MaskImg1}
                alt="Banner"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="gallery">
              <Image
                src={Game}
                alt="Banner"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <Image
            src={FeaturedImg}
            alt="Banner"
            className="relative z-20 h-full w-full object-contain gallery"
          />
          <div className="grid md:grid-cols-3 gap-5">
            <div className="gallery">
              <Image
                src={MaskImg}
                alt="Banner"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="gallery">
              <Image
                src={MaskImg2}
                alt="Banner"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="gallery">
              <Image
                src={Purse}
                alt="Banner"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="h-32" />
        <Footer />
      </main>
    );
}
