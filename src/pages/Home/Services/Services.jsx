import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

const [services,setServices] = useState()

useEffect(()=>{
    fetch('/services.json')
    .then(res=>res.json())
    .then(data=>setServices(data))
},[])


    return (
        <>
        <div className="space-y-3 text-center">
        <p className="text-3xl text-[#FF3811] font-bold">Services</p>
            <h3 className="text-5xl font-bold">Our Service Area</h3>
            <p className="w-1/2 mx-auto">{`the majority have suffered alteration in some form, by injected humour, or randomised 
             words which don't look even slightly believable. `}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
      {      
        services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
      }
        </div>
        </>
    );
};

export default Services;