import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import project from "../projects.json";
import { Keyboard, Navigation } from "swiper";
import { AiFillGithub } from "react-icons/ai";
import { SiInternetexplorer } from "react-icons/si";
import Link from "next/link";

function Projects({ id }: { id: number }) {
  console.log(project);
  return (
    <section className='min-w-[420px] flex-grow px-6'>
      <div className=' images'>
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Keyboard]}
          navigation={true}
          loop={true}
          keyboard={true}
        >
          {project.map((p) => {
            return (
              <SwiperSlide key={p.title}>
                <h1 className='title text-center text-6xl text-accent mb-7 capitalize'>
                  {p.title}
                </h1>
                <div className='flex items-center gap-4 justify-center mb-12'>
                  <Link
                    href={p.linkGithub}
                    className=' rounded-full border-4 border-accent border-solid'
                  >
                    <AiFillGithub className='w-8 h-8' title='github page' />
                  </Link>
                  <Link
                    href={p.linkProject}
                    className='rounded-full border-4 border-accent border-solid'
                  >
                    <SiInternetexplorer
                      className='w-8 h-8'
                      title='go to website'
                    />
                  </Link>
                </div>
                <div className=' mx-auto relative w-full max-w-[650px] aspect-video'>
                  <Image
                    src={p.photoDesktop}
                    fill
                    alt={p.title + " " + "desktop"}
                    className='mx-auto rounded cursor-pointer'
                    title={p.title}
                  />
                </div>
                <div className='description'>
                  <p className=' text-base capitalize mt-10 text-center max-w-[920px] mx-auto'>
                    {p.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <aside></aside>
    </section>
  );
}

export default Projects;
