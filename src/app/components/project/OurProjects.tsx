import RectangleBtn from "../../assets/artifacts/rectangular_btn.png";
import { motion } from "framer-motion";
import { HeadingOverlay } from "../ui/HeadingOverlay";
import ShinyButton from "../ui/shiny-button";
import Link from "next/link";
import Image from "next/image";

export default function OurProjects(props: {
  type?: string;
  heading: string;
  content: string;
  image: any;
  projectUrl: string;
  released: boolean;
}) {
  return (
    <div className="padding xl:items-end pt-32 items-center flex md:pb-24 pb-16 justify-center w-screen min-h-screen">
      <HeadingOverlay label="OUR PROJECTS" />
      <div className="relative z-10 grid items-end md:items-center justify-center md:grid-cols-2 w-full md:gap-y-16 gap-5 max-h-[80vh] md:mt-0">
        <div className="space-y-3 relative z-10 order-2 md:order-1">
          {props.type && (
            <motion.span
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
                duration: 0.3,
              }}
              className="block w-fit py-1 font-medium"
            >
              <ShinyButton className="bg-white/20 backdrop-blur inline-block rounded-full py-2.5 px-6">
                {props.type}
              </ShinyButton>
            </motion.span>
          )}
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
            {props.heading}
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
            className="max-w-lg xl:max-w-xl xl:text-2xl md:text-xl text-sm text-balance opacity-80"
          >
            {props.content}
          </motion.p>
          <div className="pt-4">
            <Link href={props.released ? `/${props.projectUrl}` : '/projects'} className="inline-block">
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
        </div>
        <div className="items-center justify-center md:justify-end flex order-1 md:order-2">
          <Image
            src={props.image}
            alt="Project"
            sizes="100%"
            className="object-contain object-center h-[35vh] lg:h-[400px] xl:h-[500px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
