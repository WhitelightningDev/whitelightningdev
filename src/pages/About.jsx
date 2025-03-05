import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function About() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto text-bg-light rounded mb-4"
          src="android-chrome-512x512.png"
          alt="Bootstrap Logo"
          width="100"
          height="100"
        />
        <h1 className="display-5 fw-bold text-light">Welcome to Our Web Development Services</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 text-light">
            We specialize in building responsive, user-friendly websites that help you connect with your audience. Whether you're looking for a new site or need updates to your existing one, we have the expertise to bring your vision to life.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="mailto:danielmommsen2@gmail.com" className="btn btn-primary btn-lg px-4 gap-3">
              Get in Touch
            </a>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-light">Who We Are</h2>
          <p className="text-light">
            We are a dedicated team of web developers with years of experience in creating innovative and scalable websites. From custom web applications to eCommerce solutions, we provide tailored services to help your business thrive in the digital world.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="text-light">What We Do</h2>
          <p className="text-light">
            Our expertise spans across front-end and back-end development. We use modern technologies such as the MERN stack, React, Bootstrap, and more to build websites that are fast, secure, and easy to maintain. We work with you to create a digital experience that drives results.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center my-5">
        <p className="lead text-light">Ready to take your website to the next level?</p>
        <button type="button" className="btn btn-primary btn-lg">Start Your Project</button>
      </div>
    </div>
  );
}

export default About;
