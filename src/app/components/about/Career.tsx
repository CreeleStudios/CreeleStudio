import RectangleBtn from "../../assets/artifacts/rectangular_btn.png";
import { IoArrowForwardCircleOutline, IoBriefcase } from "react-icons/io5";
import { LiaBezierCurveSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Career() {
  return (
    <section className="section career">
      <div className="padding pt-40 pb-16 relative z-20">
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
          className="text-center"
        >
          CAREERS
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
          className="md:text-xl xl:text-2xl opacity-80 text-center"
        >
          It takes great people to create greatness so we need you! Join us.
        </motion.p>
        <div className="grid gap-y-4 h-fit gap-x-8 md:grid-cols-2 xl:grid-cols-3 mt-10 mb-5">
          {AvailableCareer.map((items, index) => {
            return (
              <motion.div
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
                  delay: index * 0.15,
                }}
                key={index}
                className="bg-[#2D2D37] px-4 py-4 h-fit rounded-xl flex items-center gap-5"
              >
                <div className="h-20 w-20 shrink-0 rounded-xl bg-[#24242B] flex items-center justify-center">
                  <IoBriefcase className="text-4xl" />
                </div>
                <div className="space-y-5">
                  <div>
                    <h5 className="text-xl">{items.label}</h5>
                    <p className="text-sm opacity-80">{items.requirements}</p>
                  </div>
                  <Link
                    target="_blank"
                    href={
                      "https://airtable.com/app2BTfHuoEs6H1zu/pagyJVqUISwVrYAxY/form"
                    }
                    className="flex items-center w-fit ms-auto gap-2 justify-end hover:text-[#FBD40D]"
                  >
                    <span className="text-sm">View</span>
                    <IoArrowForwardCircleOutline className="text-lg" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex h-fit items-center justify-center">
          <Link
            target="_blank"
            href={
              "https://airtable.com/app2BTfHuoEs6H1zu/pagyJVqUISwVrYAxY/form"
            }
            className="mx-auto"
          >
            <motion.button
              initial={{
                translateY: 20,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                ease: "linear",
                duration: 0.5,
                delay: 5 * 0.15,
              }}
              className="bg-[#FBD40D] bb hover:bg-white transition-colors py-3.5 md:py-5 px-9 md:px-14 rounded-lg"
            >
              <h6 className="relative z-10 text-black md:text-xl text-lg">
                View All
              </h6>
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="absolute z-10 h-full w-full inset-0 bg-black/70" />
    </section>
  );
}

const AvailableCareer = [
  {
    label: "WRITERS",
    requirements:
      "Craft captivating narratives that bring African stories to life.",
    hash: "",
  },
  {
    label: "ANIMATORS",
    requirements: "Bring characters and worlds to motion with your expertise.",
    hash: "",
  },
  {
    label: "STORYBOARD ARTIST",
    requirements: "Visualize and plan the story through dynamic illustrations.",
    hash: "",
  },
  {
    label: "3D ARTISTS",
    requirements: "Build and sculpt stunning 3D characters and environments.",
    hash: "",
  },
  {
    label: "CONCEPT ARTIST",
    requirements:
      "Design original characters, scenes, and aesthetics for our worlds.",
    hash: "",
  },
  {
    label: "ANIMATION SUPEERVISORS",
    requirements: " Lead animation teams and ensure creative vision.",
    hash: "",
  },
  {
    label: "Lighting & Rendering Artists",
    requirements:
      "Create mood and depth with expert lighting and rendering techniques.",
    hash: "",
  },
  {
    label: "COMPOSITION ARTIST",
    requirements: "Seamlessly blend elements to create final polished scenes.",
    hash: "",
  },
  {
    label: "ENVIRONMENT ARTIST",
    requirements: " Design and construct immersive worlds and landscapes",
    hash: "",
  },
];
