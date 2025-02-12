'use client'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function AosInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      delay: 50
    });
  }, []);

  return null;
}
