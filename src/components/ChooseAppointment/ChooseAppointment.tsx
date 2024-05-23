'use client';

import React, { useState } from 'react'
import './ChooseAppointment.css';
import { serviceOption, serviceOptions } from '@/utils/options'
import ServiceCard from '../ServiceCard/ServiceCard'
import Image from 'next/image';

const ChooseAppointment = () => {
  const [isServiceSelected, setIsServiceSelected] = useState(false);
  const [selectedService, setSelectedService] = useState<serviceOption>();

  const handleSelection = (id: number) => {
    const selection: serviceOption = serviceOptions.filter((service) => service.id === id)[0];
    setSelectedService(selection);
    setIsServiceSelected(true);
  }

  return (
    <div className="choose-appointment-container">
      <div className="num-and-header">
        <div className="num-background">
          <span>1</span>
        </div>
        <h2>Choose Appointment</h2>
      </div>
      {isServiceSelected ? (
        <>
          <h4 id="view-all-appointment-link" onClick={()=>setIsServiceSelected(false)}>{'<'} VIEW ALL APPOINTMENTS</h4>
          <div className="service-container">
            <div className="image-info-btn-container">
            {selectedService?.image ? (
                <Image className="service-image" src={selectedService?.image} alt="" />
            ): (
                null
            )}
              <div className="title-description-btn-container">
                <div className="info-and-button-container">
                  <div className="title-time-price">
                    <h4 className="service-title">{selectedService?.title}</h4>
                    <h4 className="time-and-price">{selectedService?.time} @ ${selectedService?.price}.00</h4>
                  </div>
                </div>
                <div className="description-container">
                  {selectedService?.description}
                </div>
              </div>
            </div>
          </div>
          <h4 id="add-to-your-appointment-text">Add to your appointment...</h4>
          <div className="add-to-appointment-container">
            <h4>Detailed Nail Art</h4>
            <p>+30 @ ${selectedService?.price}.00</p>
          </div>
        </>
      ): (
          serviceOptions.map((service) => (
            <ServiceCard key={service.id} {...service} handleSelection={handleSelection} />
          ))  
      )
      }
    </div>
  )
}

export default ChooseAppointment