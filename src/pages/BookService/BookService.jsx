import { useLoaderData } from "react-router-dom";
import NavBar from "../Shared/Navbar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { _id,  img, title, price } = service;
    // console.log(service);

  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    // const due = form.due.value;

    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert("service booked successfully")
        }
      });
  };

  // Calculate the minimum and maximum dates (15 days from today)
  const today = new Date();
  //  console.log(today.toISOString().split("T"));
  const minDate = today.toISOString().split("T")[0]; // Today's date
  today.setDate(today.getDate() + 15); // 15 days from today
  const maxDate = today.toISOString().split("T")[0]; // Max date (15 days from today)

  return (
    <div>
      <NavBar></NavBar>
      <h1 className="text-3xl text-center py-12"> Book Service : {title}</h1>
      <div className="hero bg-base-200 w-full">
        <div className="hero-content w-full px-0 py-0">
          <div className="card  shadow-2xl bg-base-100 w-full">
            <form onSubmit={handleBookService} className="card-body">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    name="name"
                    defaultValue={user?.displayName}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                    min={minDate} // Set the minimum date to today
                    max={maxDate} // Set the maximum date to 15 days from today
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    defaultValue={user?.email}
                    className="input input-bordered"
                    required
                    disabled
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Due amount</span>
                  </label>
                  <input
                    type="text"
                    name="due"
                    placeholder="text"
                    defaultValue={"$" + price}
                    className="input input-bordered"
                    disabled
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary btn-block">
                  Order Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
