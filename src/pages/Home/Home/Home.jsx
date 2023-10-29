import {Helmet} from "react-helmet";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;
