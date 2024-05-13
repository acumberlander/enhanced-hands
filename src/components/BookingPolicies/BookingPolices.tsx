import React from 'react';
import './BookingPolices.css';
import Image from 'next/image';

const BookingPolices = () => {
  return (
    <div className='booking-policy-container'>
      <div className='notice-strip'>
        <span>PLEASE READ ALL INFORMATION BEFORE BOOKING</span>
      </div>
      <div className='policy-wrapper'>
        <div className='booking-header-container'>
          <h1 className='booking-header'>BOOKING POLICIES</h1>
        </div>
      <div className='policy-column-container'>
        <div className='policy-column'>
          <div className='icon-and-header'>
            <div className='icon-background'>
              <Image src="" alt="" />
            </div>
            <h4>PAYMENT</h4>
          </div>
          <p>A $50 non-refundable retainer fee is required to secure your booking. All retainers are deducted from your final payment. It is non-transferable in the event of a cancellation. All payments are due in cash/cashapp only.</p>
        </div>
        <div className='policy-column'>
            <div className='icon-and-header'>
              <div className='icon-background'>
                <Image src="" alt="" />
              </div>
            <h4>LATE POLICY</h4>
          </div>
          <p>If you are running late, please inform us in advance. You have a 5 min grace period. If you are 10 minutes late, you'll have to pay a $15 late fee. If you are NOT SEATED by the 10 minute mark your appointment will be canceled.</p>
        </div>
        <div className='policy-column'>
          <div className='icon-and-header'>
            <div className='icon-background'>
              <Image src="" alt="" />
            </div>
            <h4>CANCELLATION</h4>
          </div>
          <p>Cancellations should be made 24 hours or more, prior to your appointment. Failing to do so will be classfied as a "no show", and 50% of your remaining balance will be charged. If this is not paid, you will be blacklisted.</p>
        </div>
        <div className='policy-column'>
          <div className='icon-and-header'>
            <div className='icon-background'>
              <Image src="" alt="" />
            </div>
            <h4>REFUND POLICY</h4>
          </div>
          <p>There will be NO refunds after the service rendered. If for some reason you have a problem with your nails you will have 24 hours to reach out to us and come get them fixed at the earliest convenience.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPolices;