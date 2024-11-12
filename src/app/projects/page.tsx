'use client'
import Navbar from '../components/Navbar'
import ReactFullpage from '@fullpage/react-fullpage'
import ProjectImage from '../assets/images/project_image.png';
import ProjectImage2 from  './../assets/artifacts/connect.png';
import OurProjects from '../components/project/OurProjects';
import Footer from '../components/Footer';
import { useEffect } from 'react';


export default function Projects() {


    useEffect(() => {
        const timer = setTimeout(() => {
            if (window.fullpage_api) {
                window.fullpage_api.moveTo(1);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, []);



    return (
        <>

            <Navbar />
            <ReactFullpage
                navigation
                credits={{
                    enabled: false
                }} 
                touchSensitivity={5}
                scrollingSpeed={1000}
                render={() => {
                    return (
                        <ReactFullpage.Wrapper>
                            {
                                ProjectContent.map((items, index) => {
                                    return (
                                        <section key={index} className='section pp-line our_projects'>
                                            <OurProjects
                                                type={items.type}
                                                heading={items.heading}
                                                content={items.content}
                                                projectUrl={items.projectUrl}
                                                image={items.image}
                                                released={items.released}
                                            />
                                        </section>
                                    )
                                })
                            }
                            <Footer />
                        </ReactFullpage.Wrapper>
                    )
                }
                }
            />
        </>

    )
}

const ProjectContent = [
  {
    type: "3D Short Film",
    heading: "The satchel",
    content:
      "A vigorous and compelling tale of African origin about two brothers fighting for the power to create a world using an all-powerful “Satchel”. A drama-filled, entertaining story sure to leave you at the edge of your screen! Taking you to the mystical lands of “The Satchel”",
    projectUrl: "satchel",
    image: ProjectImage,
    released: true,
  },
  {
    type: "3D Short Film",
    heading: "Sopo",
    content:
      "Unconditional love between parents and children can sometimes be hard to maintain, as seen in this musical about a strict father and his rebellious son.",
    projectUrl: "connect",
    image: ProjectImage2,
    released: false,
  },
];