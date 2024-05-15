import React from 'react'
import './BusinessInfo.css';
import Image from 'next/image';
import locationIcon from '@/images/location.png';
import businessHoursIcon from '@/images/working-time.png';
import nail1 from '@/images/nails_1.jpeg';
import facebookIcon from '@/icons/facebook-48.png';
import igIcon from '@/icons/instagram.png';
import phoneIcon from '@/icons/telephone.png';

const BusinessInfo = () => {
  return (
    <div className='business-info-container'>
      <div className="hours-and-location-container">
        <div className="business-hours-container">
          <h1>BUSINESS HOURS</h1>
          <Image className="biz-info-icons" src={businessHoursIcon} alt="" />
          <div className="hours-text-container">
            <div className="operation-divs">
              <p>MONDAY:CLOSED</p>
            </div>
            <div className="operation-divs">
              <p>TUESDAY, THURSDAY:</p>
              <p>9:00AM-5:00PM</p>
            </div>
            <div className="operation-divs">
              <p>WEDNESDAY, FRIDAY, SATURDAY:</p>
              <p>9:00AM-5:00PM</p>
            </div>
            <div className="operation-divs">
              <p>SUNDAY APPOINTMENTS:</p>
              <p>CLOSED</p>
            </div>
          </div>
        </div>
        <div className="location-container">
          <h1>LOCATION</h1>
          <Image className="biz-info-icons" src={locationIcon} alt="" />
          <div className="operation-divs">
            <p>ENHANCED HANDS IS LOCATED IN</p>
            <p>HUMBOLDT, TN 38305</p>
          </div>
          <div className="operation-divs">
            <p>THE EXACT ADDRESS WILL BE SENT UPON BOOKING VIA E-MAIL CONFIRMATION.</p>
          </div>
        </div>
      </div>
      <div className="book-appointment-container">
        <h1 id="book-appointment-header">HOW TO BOOK YOUR APPOINTMENT</h1>
        <div className="book-appointment-content">
          <div className="operation-divs">
            <p>Click on the service that you would like to get</p>
          </div>
          <div className="operation-divs">
            <p>Select the time and date for your service. If you do not see the time or date that you would like to book for, it is unavailable.</p>
          </div>
          <div className="operation-divs">
            <p>Once you select your time and date, there will be a $50 deposit that is required depending on what service is booked. </p>
          </div>
          <div className="operation-divs">
            <p>You will need to fill out the information that needs to be filled out such as your name, e-mail, client intake form and phone number.</p>
          </div>
          <div className="operation-divs">
            <p>Once it is completed, you will recieve an e-mail confirmation with driving directions and location.</p>
          </div>
          <div className="operation-divs">
            <p>If you did not receive an e-mail confirmation in regard to your appointment, e-mail us at keonnaivy7@gmail.com to confirm your apopintment</p>
          </div>
        </div>
      </div>
      <div className="image-and-social-container">
        <Image id="thank-you-image" src={nail1} alt="" />
        <div className="social-container">
          <h1>THANK YOU</h1>
          <h3>For Choosing Us</h3>
          <p>STAY CONNECTED!</p>
          <div className="social-bar">
            <div className="social-background">
              <Image className="social-icons" src={facebookIcon} alt="" />
            </div>
            <div className="social-background">
              <Image className="social-icons" src={igIcon} alt="" />
            </div>
            <p>@ENHANCED.HANDS</p>
          </div>
          <div className="phone-bar">
            <div className="phone-background">
              <Image className="social-icons" src={phoneIcon} alt="" />
            </div>
            <p>TEXT US AT 731-312-7260</p>
          </div>
        </div>
      </div>
        <div className="please-choose-bar">
          <p>PLEASE CHOOSE YOUR SERVICE BELOW</p>
        </div>
    </div>
  )
}

export default BusinessInfo