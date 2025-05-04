import React, { useState as S, useRef as R, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet'; // Import Helmet for meta tag management
import './appointment.css';

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const F = R();
  const [X, Y] = S(false);
  const [D, U] = S({
    name: '',
    email: '',
    phone: '',
    carName: '',
    carModel: '',
    service: '',
    ppfType: ''
  });

  const Z = (e) => {
    const { name: N, value: V } = e.target;
    if (N === 'service' && V !== 'PPF') {
      U((p) => ({ ...p, [N]: V, ppfType: '' }));
    } else {
      U((p) => ({ ...p, [N]: V }));
    }
  };

  const W = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    emailjs
      .sendForm(
        'service_p58k9vs',
        'template_c2xaixi',
        F.current,
        'ykQwsYJ1SVpqmb2Fw'
      )
      .then(
        (r) => {
          console.log(r.text);
          Y(true);
        },
        (err) => {
          console.log(err.text);
          alert("❌ Failed to send appointment.");
        }
      );

    U({
      name: '',
      email: '',
      phone: '',
      carName: '',
      carModel: '',
      service: '',
      ppfType: ''
    });

    setTimeout(() => {
      Y(false);
    }, 3e4);
  };

  return (
    <div className="appointment-wrapper">
      {/* Meta description */}
      <Helmet>
        <meta name="description" content="Book an appointment for car detailing, ceramic coating, PPF, and more. Get your car services scheduled easily." />
        <title>Book Your Appointment | Car Detailing Services</title>
      </Helmet>

      <h2 className="form-title">🚗 Book Your Appointment</h2>

      {X && (
        <div className="form-success">
          ✅ Appointment submitted successfully, we will contact you in 30 mins!
        </div>
      )}

      <form className="appointment-form" onSubmit={W} ref={F}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            value={D.name}
            onChange={Z}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={D.email}
            onChange={Z}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={D.phone}
            onChange={Z}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="carName">Car Name</label>
          <input
            type="text"
            name="carName"
            id="carName"
            placeholder="e.g., Honda Civic"
            value={D.carName}
            onChange={Z}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="carModel">Car Model</label>
          <input
            type="text"
            name="carModel"
            id="carModel"
            placeholder="e.g., 2022"
            value={D.carModel}
            onChange={Z}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">Select Service</label>
          <select
            name="service"
            id="service"
            value={D.service}
            onChange={Z}
            required
          >
            <option value="">Choose a service</option>
            <option value="PPF">PPF</option>
            <option value="Ceramic Coating">Ceramic Coating</option>
            <option value="360 Car Detailing">360 Car Detailing</option>
            <option value="Glass Coating">Glass Coating</option>
            <option value="Chromic Rims">Chromic Rims</option>
          </select>
        </div>

        {D.service === 'PPF' && (
          <div className="form-group">
            <label htmlFor="ppfType">PPF Thickness</label>
            <select
              name="ppfType"
              id="ppfType"
              value={D.ppfType}
              onChange={Z}
              required
            >
              <option value="">Select thickness</option>
              <option value="7 mil">7 mil</option>
              <option value="9 mil">9 mil</option>
              <option value="10 mil">10 mil</option>
            </select>
          </div>
        )}

        <button type="submit" className="submit-btn">Submit Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;
