'use client';

import Image from 'next/image';
import { AnimatedTitle } from './AnimatedTitle';
import Button from './Button';

type ImageClipBoxProps = {
  clipClass: string;
  src: string;
};

const ImageClipBox = ({ src, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <Image src={src} alt="Clip" width={400} height={400} className="object-cover" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden lg:block lg:left-20 lg:w-96">
          <ImageClipBox src="/img/contact-1.webp" clipClass="contact-clip-path-1" />
          <ImageClipBox src="/img/contact-2.webp" clipClass="contact-clip-path-2 lg:translate-y-0 translate-y-60" />
        </div>

        <div className="lg:absolute lg:-top-40 lg:right-10 lg:w-80 md:left-auto sm:flex sm:justify-center sm:w-full sm:relative">
          <ImageClipBox src="/img/swordman.webp" clipClass="sword-man-clip-path md:scale-125 md:mb-10 sm:scale-100 sm:relative lg:top-45" />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">Join Zentry</p>

          <AnimatedTitle title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether." containerClass="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]" />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
