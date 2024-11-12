"use client";
import LadyFire from "../../assets/images/about_us_banner.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutS() {
  return (
    <section className="section about md:items-end justify-end">
      <div>
        <div className="flex items-end h-screen lg:items-center xl:items-end">
          <div className="relative z-10 grid lg:grid-cols-2 items-center xl:pr-32 w-screen max-h-screen overflow-hidden">
            <div className="px-5 md:pl-12 lg:pl-20 xl:pl-28 text-left space-y-3">
              <motion.h2
                initial={{
                  translateX: -200,
                  opacity: 0,
                }}
                whileInView={{
                  translateX: 0,
                  opacity: 1,
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
              >
                Who We Are
              </motion.h2>
              <motion.p
                initial={{
                  translateX: -200,
                  opacity: 0,
                }}
                whileInView={{
                  translateX: 0,
                  opacity: 1,
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="max-w-lg xl:max-w-2xl xl:pr-5 xl:text-2xl md:text-xl text-pretty opacity-80"
              >
                Creele Animation Studios is a family entertainment and
                trans-media production studio. Our mission is to magnificently
                portray the creative brilliance of Africa through breathtaking
                storytelling of our rich heritage using animated, interactive
                entertainment, sound and motion pictures.
              </motion.p>
              <motion.div
                initial={{
                  translateX: -200,
                  opacity: 0,
                }}
                whileInView={{
                  translateX: 0,
                  opacity: 1,
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="pt-5"
              >
                <Link href={"/about"}>
                  <button className="bg-[#FBD40D] bb hover:bg-white transition-colors py-3.5 md:py-5 px-9 md:px-14 rounded-lg">
                    <h6 className="relative z-10 text-black md:text-xl text-lg">
                      Learn More
                    </h6>
                  </button>
                </Link>
              </motion.div>
            </div>
            <div className="relative h-fit overflow-hidden items-end justify-end flex">
              <Image
                src={LadyFire}
                alt="Lady Art"
                sizes="100%"
                className="object-contain object-right-bottom max-h-[45vh] xl:max-h-[85vh] h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
