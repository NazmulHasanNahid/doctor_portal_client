import React from "react";
import ServiceCard from "./ServiceCard";
import cavity from "../../assets/images/cavity.png";
import fluride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";

const Service = () => {
     const serviceData = [
          {
               _id:1 ,
               name :'Fluride Treatment' ,
               title:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
               img: fluride
          },
          {
               _id:2,
               name :'Teeth Whitening' ,
               title:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
               img: whitening
          },
          {
               _id:3,
               name :'Teeth Whitening' ,
               title:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
               img: cavity
          }
     ]
  return (
    <div className="my-28 ">
      <div className="text-center ">
        <h3 className="text-primary text-xl font-bold uppercase">Our Services</h3>
        <h2 className="text-4xl">Services we provide</h2>
      </div>
      <div className="  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
          serviceData.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
      }
      </div>
    </div>
  );
};

export default Service;
