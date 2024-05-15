import Image from 'next/image';
import './ServiceCard.css';
import { serviceOption } from '@/utils/options'

const ServiceCard = ({title,time, price, image, description}: serviceOption) => {
  return (
    <div className="service-card-container">
      <div className="image-info-btn-container">
        {/* {image ? (
          <>
            <Image fill className="service-image" src={'/../images/acrylic_overlay.jpeg'} alt="" />
          </>
        ): (
            null
        )} */}
        <div className="title-description-btn-container">
          <div className="info-and-button-container">
            <div className="title-time-price">
              <h4 className="service-title">{title}</h4>
              <h4 className="time-and-price">{time} @ ${price}.00</h4>
            </div>
            <button className="book-btn">
              <h4>Book</h4>
            </button>
          </div>
          <div className="description-container">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard