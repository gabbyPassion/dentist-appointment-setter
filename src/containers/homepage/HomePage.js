import React from "react";
import { Link } from "react-router-dom";
import smile from '../../smiling-friends.png';

function HomePage() {
    return (
        <div className="home-container">
        <h1 className="header">Benson's Family Dental</h1>
        <h3 className="sub-header">Unlock your perfect smile with us.</h3>
        <img src={smile} alt="Smile" className="smile" />
        <p className="call-to-action">Book your appointment today!</p>
        <Link to="/contacts" className="appointment-button">
            Book Appointment
        </Link>
        </div>
    );
}

export default HomePage;
