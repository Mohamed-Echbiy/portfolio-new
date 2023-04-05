import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import project from "../projects.json";
import { Navigation, Pagination } from "swiper";

function Projects({ id }: { id: number }) {
  const {
    title,
    description,
    linkProject,
    linkGithub,
    techStack,
    photoDesktop,
  } = project[id - 1];
  console.log(project);
  return (
    <section className='min-w-[420px] flex-grow'>
      <div className=' images'>
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
        >
          <SwiperSlide>
            <h1 className='title text-center text-6xl text-accent mb-12'>
              {title}
            </h1>
            <div className=' mx-auto relative w-full max-w-[650px] aspect-video'>
              <Image
                src={photoDesktop}
                fill
                alt={title + " " + "desktop"}
                className='mx-auto rounded cursor-pointer'
                title={title}
              />
            </div>
            <div className='description'>
              <p className=' text-base capitalize mt-10 text-center max-w-[920px] mx-auto'>
                {description}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <aside></aside>
    </section>
  );
}

export default Projects;
