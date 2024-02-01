import SectionTitle from "../SectionTitle/SectionTitle";
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

const TicketBookingForm = ({ showDetails, onClose }) => {
    const [monthPicker, setMonthPicker] = useState(null);
    return (
        <div>
           
       <div>
        <h2 className="mt-20  text-3xl bg-gradient-to-r from-black to-green-700 inline-block text-transparent bg-clip-text font-semibold  ml-32 lg:ml-[500px] "> Booking Form For :  {showDetails.name}</h2>
        
        <p className=" mb-10 mx-auto w-64 border-b-4 border-green-900"></p>
    </div>
    <form className="card-body w-96 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-green-800 text-lg">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-green-800 text-lg">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-green-800 text-lg">Pick a Date</span>
          </label>
          <DatePicker month={setMonthPicker} placeholder="Select Month">
      <DatePicker.Month />
    </DatePicker>
        </div>
        <div className="form-control mt-6">
        <button className="btn bg-gradient-to-r from-green-700 to-black text-white">Confirm Booking </button>
        </div>
        <button className="bg-black w-20 rounded-full py-2 px-6 text-white ml-28" onClick={onClose}>Close</button>
      </form>
        </div>
    );
};

export default TicketBookingForm;