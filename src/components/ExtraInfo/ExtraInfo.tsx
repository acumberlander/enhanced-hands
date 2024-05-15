'use client';

import React, { useEffect, useState } from 'react';
import './ExtraInfo.css';
import Image from 'next/image';
import placeholderImage from '@/images/enhanced-hands-logo.jpeg'

const ExtraInfo = () => {
  const [mobileView, setMobileView] = useState<boolean>(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1100
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  return (
    <div className='extra-info-container'>
          <div className="extra-info-header-container">
            <h1>EXTRA INFORMATION</h1>
          </div>
      <div className="list-and-images-container">
          <div className='bullet-container'>
            <ul className='unordered-list'>
              <li>To ensure the best possible results, we kindly request that you arrive for your appointment with clean, natural nails that are free of any products such as polish, gel, or acrylic. Greenies technicaly known as Pseudomonas can be common when lifting occurs. If you have one, an enhancement can NOT be performed.</li>
              <li>We do **not** fill-in other nail technician's work. We do **not** work over damaged nails being that we don't want to cause further damage.</li>
              <li>We recommend scheduling fill-ins every **two to three weeks** to maintain the appearance and health of your nails. Please note that **if you wait too long between fill-ins, your natural nails may become weak and susceptible to breakage or infection. Anything over 3 weeks should be booked under a soak off and a full set.**</li>
              <li>We kindly ask that if you have to bring a guest only one is allowed on the premises.</li>
              <li>If you have any further questions, do not hesitate to get in touch with us on: **keonnaivy7@gmail.com**</li>
            </ul>
        </div>
        {
          mobileView ? (
          null
          ): (
          <div className='extra-info-images-container'>
            <Image id="extra-top-img" className='extra-info-images' src={placeholderImage} alt="" />
            <Image id="extra-bottom-img" className='extra-info-images' src={placeholderImage} alt="" />
          </div>
          )
        }
      </div>
    </div>
  )
}

export default ExtraInfo