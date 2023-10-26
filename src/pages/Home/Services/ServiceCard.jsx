import { FaArrowAltCircleRight } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id,title, img, price } = service;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl px-2 mt-6">
        <figure>
          <img src={img} alt="" className=" rounded-lg w-full h-[250px]" />
        </figure>
        <div className="card-body px-0 py-6">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center">
            <p className="text-[#FF3811] font-medium">Price : ${price}</p>
            <Link to={`/checkout/${_id}`} className="flex justify-end text-[#FF3811] cursor-pointer">
              <FaArrowAltCircleRight size={`25px`}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};
export default ServiceCard;
