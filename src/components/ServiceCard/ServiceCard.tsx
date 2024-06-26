'use client';

import Image, { StaticImageData } from 'next/image';
import './ServiceCard.css';
import { serviceOption } from '@/utils/options'
import { Fragment } from 'react';

export type serviceOptionProps = {
  id: number
  title: string;
  time: string;
  price: number;
  image?: StaticImageData;
  description?: string;
  extraInfo?: string;
  handleSelection: (id: number) => void;
}

const ServiceCard = ({ id, title, time, price, image, description, extraInfo, handleSelection }: serviceOptionProps) => {
  
  return (
    <Fragment>
      <h4 style={{width: '100%', maxWidth: '1000px', margin: '10px 0 5px'}}>{extraInfo}</h4>
      <div className="service-card-container">
        <div className="image-info-btn-container">
          {image ? (
            <>
              <Image className="service-image" src={image} alt="" />
            </>
          ): (
              null
          )}
          <div className="title-description-btn-container">
            <div className="info-and-button-container">
              <div className="title-time-price">
                <h4 className="service-title">{title}</h4>
                <h4 className="time-and-price">{time} @ ${price}.00</h4>
              </div>
              <button onClick={()=> handleSelection(id)} className="book-btn">
                <h4>Book</h4>
              </button>
            </div>
            <div className="description-container">
              {description}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ServiceCard