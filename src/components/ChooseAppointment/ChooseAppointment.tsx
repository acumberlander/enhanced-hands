import React from 'react'
import './ChooseAppointment.css';
import { serviceOptions } from '@/utils/options'
import ServiceCard from '../ServiceCard/ServiceCard'

const ChooseAppointment = () => {
  return (
    <div className="choose-appointment-container">
      <div className="num-and-header">
        <div className="num-background">
          <span>1</span>
        </div>
        <h2>Choose Appointment</h2>
      </div>
      {
        serviceOptions.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))
      }
    </div>
  )
}

export default ChooseAppointment