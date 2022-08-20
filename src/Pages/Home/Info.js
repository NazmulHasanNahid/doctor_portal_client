import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import phone from '../../assets/icons/phone.svg'
import marker from '../../assets/icons/marker.svg'

const Info = () => {
     return (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
               <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" text="Lorem Ipsum is simply dummy text of the pri" cardTitle="Opening Hours" img={clock}></InfoCard>
               <InfoCard bgClass="bg-secondary" text="Brooklyn, NY 10036, United States" cardTitle="Visit our location" img={marker}></InfoCard>
               <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" text="+000 123 456789" cardTitle="Contact us now" img={phone}></InfoCard>
          </div>
     );
};

export default Info;