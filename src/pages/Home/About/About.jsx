import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row p-0">
          <div className="w-1/2 relative flex-1">
          <img
            src={person} 
            className="w-3/4 rounded-lg shadow-2xl h-full"
          /> <img
            src={parts} 
            className="w-1/2 rounded-lg shadow-2xl absolute right-20 top-1/2 border-8 border-white"
          />
          </div>
          <div className="lg:w-1/2 space-y-3 flex-1">
            <h1 className="text-3xl text-[#FF3811] font-bold">About Us</h1>
            <h1 className="text-5xl font-bold ">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="w-11/12">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="w-11/12">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
