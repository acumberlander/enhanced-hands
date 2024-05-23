'use client';

import React, { Dispatch, useState } from 'react'
import './ChooseAppointment.css';
import { serviceOption, serviceOptions } from '@/utils/options'
import ServiceCard from '../ServiceCard/ServiceCard'
import { StaticImageData } from 'next/image';

export type serviceOptionProps = {
  id: number
  title: string;
  time: string;
  price: number;
  image?: StaticImageData;
  description?: string;
  extraInfo?: string;
  setSelectedService: ()=> void;
  setIsServiceSelected: ()=> void;
  selectedService: serviceOption;
}


const ChooseAppointment = () => {
  const [isServiceSelected, setIsServiceSelected] = useState(false);
  const [selectedService, setSelectedService] = useState<serviceOption>();

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
          <div>
            <span  onClick={()=>setIsServiceSelected(false)}>{'<'} VIEW ALL APPOINTMENTS</span>
          </div>
          <div className="service-container">
            <h3>{selectedService?.title}</h3>
            <p>{selectedService?.time} @ ${selectedService?.price}.00</p>
          </div>
        </>
      ): (
          serviceOptions.map((service) => (
            <ServiceCard key={service.id} {...service} setSelectedService={setSelectedService} />
          ))  
      )
      }
    </div>
  )
}

export default ChooseAppointment