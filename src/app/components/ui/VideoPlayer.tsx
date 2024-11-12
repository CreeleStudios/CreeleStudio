import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import VideoPlayerBg from "../../assets/artifacts/video_screen.png";
import PlayBtn from "../../assets/artifacts/round_play_btn.png";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import React from "react";
import "swiper/css";
import Image from "next/image";

export default function VideoPlayer() {
  const SlideRef = React.useRef<SwiperRef | null>(null);
  const [domLoaded, setDomLoaded] = React.useState(false);
  const [slideBegOrNot, handleSlideByState] = React.useState({
    isFirst: true,
    isLast: false,
  });
  const VideosDetails = [
    {
      url: "https://vimeo.com/1010585588?share=copy",
      label:
        "Channels Television Spotlight On Creele Studios Animated Film Based On Yoruba Mythology, ’The Satchel’",
    },
    {
      url: "https://vimeo.com/1010589738?share=copy",
      label: "Creele Studios highlight from The Lagos Comic-Con",
    },
  ];

  const handleNext = () => {
    if (SlideRef.current) {
      SlideRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (SlideRef.current) {
      SlideRef.current.swiper.slidePrev();
    }
  };

  const onSlideChange = (swiper: any) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

  const { isLast, isFirst } = slideBegOrNot;
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <button
          className={`${
            isFirst ? "cursor-not-allowed opacity-40" : "opacity-100"
          } hidden md:block`}
          onClick={() => handlePrev()}
        >
          <IoIosArrowDropleft className="text-4xl xl:text-6xl" />
        </button>

        {domLoaded && (
          <Swiper
            ref={SlideRef}
            onSlideChange={onSlideChange}
            slidesPerView={1}
            centeredSlides
            className="mySwiper md:max-w-xl xl:max-w-[1100px] w-fit max-w-[275px] h-64 md:h-[350px] xl:h-[75vh]"
          >
            {VideosDetails.map((items, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full ">
                    <div className="z-10 h-full w-full flex flex-col gap-5">
                      <ReactPlayer
                        style={{
                          borderRadius: 20,
                          overflow: "hidden",
                          backgroundColor: "black",
                        }}
                        url={items.url}
                        height={"100%"}
                        width={"100%"}
                        light={true}
                        controls={true}
                        playing={true}
                        volume={1}
                        pip={true}
                        stopOnUnmount={false}
                        playsinline={true}
                        playIcon={<PlayerBtn />}
                        onEnded={() => handleNext()}
                        config={{
                          vimeo: {
                            playerOptions: {
                              autopause: true,
                              vimeo_logo: false,
                            },
                          },
                        }}
                      />
                      <p className="text-sm max-w-xs md:max-w-md md:text-base text-pretty mx-auto">
                        {items.label}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        <button
          className={`${
            isLast ? "cursor-not-allowed opacity-40" : "opacity-100"
          } hidden md:block`}
          onClick={() => handleNext()}
        >
          <IoIosArrowDropright className="text-4xl xl:text-6xl" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-5 md:hidden mt-5">
        <button
          className={
            isFirst ? "cursor-not-allowed opacity-40" : "opacity-100"
          }
          onClick={() => handlePrev()}
        >
          <IoIosArrowDropleft className="text-4xl xl:text-6xl" />
        </button>
        <button
          className={
            isLast ? "cursor-not-allowed opacity-40" : "opacity-100"
          }
          onClick={() => handleNext()}
        >
          <IoIosArrowDropright className="text-4xl xl:text-6xl" />
        </button>
      </div>
    </>
  );
}

const PlayerBtn = () => {
  return (
    <button className="relative md:h-16 md:w-16 h-10 w-10">
      <Image src={PlayBtn} alt="Button" sizes="100%" className="btn_designed" />
    </button>
  );
};
