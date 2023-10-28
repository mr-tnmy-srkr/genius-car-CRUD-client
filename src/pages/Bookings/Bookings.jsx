import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const { user } = useContext(AuthContext);

  //new focus ?query start ===========================================================
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      // then go to backend --> app.get("/bookings",...)
      .then((res) => {
        setBookings(res.data);
      });

    /*  fetch(url)
      //then go to backend --> app.get("/bookings",...)
      .then((res) => res.json())
      .then((data) => setBookings(data)); */
  }, [url]);
  //new focus ?query end ==============================================================

  //delete function
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete this booking?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div>
      <h2 className="">Your bookings : {bookings.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Bookings;
