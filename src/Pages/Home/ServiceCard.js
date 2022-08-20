import React from 'react';

const ServiceCard = ({service}) => {
     const {name , title , img} =  service
     return (
   <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Loading"/>
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>{title}</p>
    
  </div>
</div>
     );
};

export default ServiceCard;