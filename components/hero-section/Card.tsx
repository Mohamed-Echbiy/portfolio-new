import Image from "next/image";
import React from "react";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { TfiGithub } from "react-icons/tfi";
import { TbBrandNextjs, TbBrandSvelte } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiShopify,
  SiSvelte,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";

function Card() {
  return (
    <div className='card min-w-[320px] flex-grow max-w-[420px] aspect-[.7] p-5 shadow-xl'>
      <figure className='relative aspect-square mb-12 p-5 w-3/4 mx-auto self-center'>
        <Image
          src='/me.jpeg'
          alt='my-profile'
          fill
          sizes='300px'
          className=' object-contain rounded'
        />
      </figure>
      <div className='card-body mb-16'>
        <div className='content mb-8'>
          <h1 className='text-3xl mb-2 uppercase'>
            {`I'm`}{" "}
            <span className='text-accent'>
              {"{"} Mohamed Echbiy {"}"}
            </span>
          </h1>
          <p className='text-lg capitalize leading-relaxed max-w-[620px] text-start'>
            a 22-year-old <span className='text-accent uppercase'>Mern</span>{" "}
            stack developer specializing in front-end development.
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <p className=' text-primary text-lg capitalize min-w-fit'>
            SKILLS :{" "}
          </p>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Autoplay, EffectFade]}
            grabCursor={true}
            effect='fade'
            autoplay={{
              delay: 5000,
            }}
            speed={500}
            loop={true}
            className='flex-grow'
          >
            <SwiperSlide>
              <div className='tech-stack text-accent flex items-center gap-5 justify-center bg-primary'>
                <p title='Next.js'>
                  <TbBrandNextjs className='w-8 h-8' />
                </p>
                <p>
                  <FaNodeJs className='w-8 h-8' title='Node.js' />
                </p>
                <p>
                  <SiTypescript className='w-8 h-8' title='Typescript' />
                </p>
                <p className='' title='MongoDb'>
                  <DiMongodb className='w-8 h-8' />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='tech-stack text-accent flex items-center gap-5 justify-center bg-primary'>
                <p title='React.js'>
                  <FaReact className='w-8 h-8' />
                </p>
                <p>
                  <SiExpress className='w-8 h-8' title='Express.js' />
                </p>
                <p>
                  <SiTailwindcss className='w-8 h-8' title='tailwindcss' />
                </p>
                <p className='' title='Firebase'>
                  <SiFirebase className='w-8 h-8' />
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='tech-stack text-accent flex items-center gap-5 justify-center bg-primary'>
                <p title='Shopify liquid'>
                  <SiShopify className='w-8 h-8' />
                </p>
                <p>
                  <Image
                    src='/sanity.svg'
                    alt='sanity logo'
                    width={32}
                    height={32}
                    title='sanity headless cms'
                    className='object-contain bg-blend-color-burn'
                  />
                </p>
                <p>
                  <TbBrandSvelte className='w-8 h-8' title='svelet-kit' />
                </p>
                <p className='' title='svelet'>
                  <SiSvelte className='w-8 h-8' />
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='social flex items-center w-full justify-center gap-4'>
        <Link
          href='https://www.linkedin.com/in/mohamed-echbiy-442aa9244/'
          target='_blank'
          title='go to my linkdin profile'
        >
          <AiFillLinkedin className='h-8 w-8 hover:text-accent' />
        </Link>

        <Link
          href='https://github.com/Mohamed-Echbiy'
          target='_blank'
          title='go to my github page'
        >
          <TfiGithub className='w-8 h-8 hover:text-accent' />
        </Link>
      </div>
    </div>
  );
}

export default Card;
