'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import gsap from 'gsap';
import logo from '@/public/img/logo.png';

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const lastScrollYRef = useRef(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;

    if (isAudioPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;
      const nav = navContainerRef.current;

      if (!nav) return;

      requestAnimationFrame(() => {
        if (currentScrollY === 0) {
          setIsNavVisible(true);
          nav.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
          setIsNavVisible(false);
          nav.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY) {
          setIsNavVisible(true);
          nav.classList.add('floating-nav');
        }
        lastScrollYRef.current = currentScrollY;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-0 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="w-full h-full flex items-center">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <Image src={logo} alt="Logo" className="w-10" />

            <Button id="product-button" title="Products" rightIcon={<TiLocationArrow />} containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1" />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <Link key={index} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                  {item}
                </Link>
              ))}
            </div>

            <button className="ml-10 flex items-center space-x-0.5 hover:cursor-pointer" onClick={toggleAudioIndicator}>
              <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop></audio>
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
