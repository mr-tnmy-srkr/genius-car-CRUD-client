import { useLoaderData } from "react-router-dom";
import NavBar from "../Shared/Navbar/NavBar";

const Checkout = () => {

const service = useLoaderData()
console.log(service);

    return (
        <div>
        <NavBar></NavBar>
            <h2>book Service : {service.title}</h2>
        </div>
    );
};

export default Checkout;