import React, { useEffect } from 'react'
import './style/Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false
    });
  }, []) // 빈 배열 꼭 넣어줘야 한 번만 실행됨

  return (
    <section className='Hero'>
      <div className="t-wrap">
        <h2 data-aos="fade-up">Hero title</h2>
        <p data-aos="fade-up" data-aos-delay="50">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, voluptas!
        </p>
      </div>
    </section>
  )
}

export default Hero
