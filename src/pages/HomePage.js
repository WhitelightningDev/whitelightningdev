import React from "react";
import { useState } from "react";

function HomePage() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 20; // Adjust tilt sensitivity
    const y = ((clientY - top) / height - 0.5) * 20;

    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div>
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold text-light">
          Welcome to WhiteLightning Dev
        </h1>
        <h4 class="text-light">Your Ultimate Web Solution!</h4>
        <div class="col-lg-6 mx-auto">
          <p class="lead text-light mb-4">
            Whether you need a sleek one-page site or a fully immersive digital
            experience, WhiteLightning is your go-to destination. We specialize
            in crafting stunning websites and powerful applications, tailored to
            your vision and designed to leave a lasting impact.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-info btn-lg px-4 gap-3">
              Get a free Consultation
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              View our Work
            </button>
          </div>
        </div>
      </div>

      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-2 text-light border-bottom text-center">
          Our Expertise in Web Development
        </h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <lord-icon
              src="https://cdn.lordicon.com/ailnzwyn.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#08a88a"
              style={{
                width: "7.75em",
                height: "7.75em",
                position: "reletive",
                bottom: "50px",
                marginRight: "20px",
              }}
            ></lord-icon>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-light">
                Website Design & Development{" "}
              </h3>
              <p class="text-light">
                Custom & modern sites built with React, Next.js, Angular and
                more
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <lord-icon
              src="https://cdn.lordicon.com/fcyboqbm.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#08a88a"
              style={{
                width: "7.75em",
                height: "7.75em",
                position: "reletive",
                bottom: "50px",
                marginRight: "20px",
              }}
            ></lord-icon>{" "}
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-light">
                {" "}
                E-Commerce Solutions
              </h3>
              <p class="text-light">
                Powerful online stores using Shopify, WooCommerce or prebuilt
                solutions
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <lord-icon
              src="https://cdn.lordicon.com/gvtjlyjf.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#08a88a"
              style={{
                width: "7.75em",
                height: "7.75em",
                position: "reletive",
                bottom: "50px",
                marginRight: "20px",
              }}
            ></lord-icon>{" "}
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-light">
                {" "}
                Web Applications & Dashboards
              </h3>
              <p class="text-light">Custom-built apps for businesses</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <lord-icon
              src="https://cdn.lordicon.com/rpviwvwn.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#08a88a"
              style={{
                width: "7.75em",
                height: "7.75em",

                position: "reletive",
                bottom: "50px",
                marginRight: "20px",
              }}
            ></lord-icon>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-light">
                SEO & Performance Optimization
              </h3>
              <p class="text-light">
                <ul>
                  <li>DevOps</li>
                  <li>Github</li>
                </ul>
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <lord-icon
              src="https://cdn.lordicon.com/ayjfxoly.json"
              trigger="hover"
              colors="primary:#121331,secondary:#16c72e"
              style={{
                width: "7.75em",
                height: "7.75em",
                position: "reletive",
                bottom: "50px",
                marginRight: "20px",
              }}
            ></lord-icon>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-light">Other</h3>
              <p class="text-light">
                Other requirements include database creation, Android
                Application Development and more on request
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="album py-5 ">
        <div class="container">
          <h1 class="display-5 pb-2 fw-bold text-light text-center border-bottom mb-3">
            Recent Projects
          </h1>
          <h4 class="pb-2 fw-bold text-light mb-3">Web Projects</h4>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <h4 className="text-center mt-3">Kings VIP Car Wash</h4>
                <img
                  className="m-2 align-self-center"
                  src="/kingslogo.png"
                  style={{ width: "100px" }}
                ></img>
                <div class="card-body">
                  <p class="card-text">
                    This is a website that was developed for a car wash company
                    called <strong>Kiings VIP</strong> car wash, they are a
                    mobile car wash bringing the wash to you
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a
                        href="https://kiings.vercel.app/#/home"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View Site
                        </button>
                      </a>
                    </div>
                    <small class="text-body-secondary">2025</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-lg">
                <h4 className="text-center mt-3">Jet Ski & More</h4>
                <img
                  className="m-2 align-self-center"
                  src="/jetskilogo.png"
                  style={{ width: "100px" }}
                ></img>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a
                        href="https://www.jetskiandmore.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View Site
                        </button>
                      </a>
                    </div>

                    <small class="text-body-secondary">2020 - 2025</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <h4 className="text-center mt-3">Found Your Pet</h4>
                <img
                  className="m-2 align-self-center rounded-3"
                  src="/foundyourpetlogo.png"
                  style={{ width: "100px" }}
                ></img>{" "}
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a
                        href="https://foundyourpet.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View Site
                        </button>
                      </a>
                    </div>
                    <small class="text-body-secondary">2024-2025</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="album py-5">
        <div class="container">
          <h1 class="display-5 pb-2 fw-bold text-light text-center border-bottom mb-3"></h1>
          <h4 class="pb-2 fw-bold text-light text- mb-3">Android Projects</h4>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <h4 className="text-center mt-3">To-King</h4>
                <img
                  className="m-2 align-self-center rounded-3"
                  src="/tokinglogo.webp"
                  style={{ width: "100px" }}
                ></img>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a
                        href="https://github.com/WhitelightningDev/To-King"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View Repo
                        </button>
                      </a>
                    </div>
                    <small class="text-body-secondary">2022</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <h4 className="text-center mt-3">Tip-Calculator</h4>
                <img
                  className="m-2 align-self-center rounded-3"
                  src="/tipcallogo.webp"
                  style={{ width: "100px" }}
                ></img>
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <a
                        href="https://github.com/WhitelightningDev/TipCal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View Repo
                        </button>
                      </a>
                    </div>
                    <small class="text-body-secondary">2023</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-5 my-5 text-center text-light">
       
       
        <div class="container px-4 py-5 border-bottom">
    <h1 class="pb-2 border-bottom">Why Choose Us?</h1>
    <div class="row row-cols-1 row-cols-md-2 align-items-md-center text-light g-5 py-5">
      <div class="col d-flex flex-column align-items-start gap-2">
      <lord-icon
          src="https://cdn.lordicon.com/jprtoagx.json"
          trigger="hover"
          colors="primary:#ffffff,secondary:#08a88a"
          style={{
            width: "7.75em",
            height: "7.75em",
            position: "reletive",
            bottom: "50px",
            left: "32%",
          }}
        ></lord-icon>
        <h2 class="fw-bold ">Left-aligned title explaining these awesome features</h2>
        <p class="">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <a href="#" class="btn btn-primary btn-lg">Primary button</a>
      </div>

      <div class="col">
        <div class="row row-cols-3 text-light row-cols-sm-2 g-4">
          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-4 rounded-3">
            <img className="m-2" src="lightning.png" style={{width: "50px"}}>
            </img>
            </div>
            <h4 class="fw-semibold mb-0 "> Speed & Performance</h4>
            <p class="">Fast-loading & high-performing sites</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient rounded-3">
            <img className="m-2" src="web-design.png" style={{width: "50px"}}>
            </img>
            </div>
            <h4 class="fw-semibold mb-0 ">Custom Designs</h4>
            <p class="">Unique, tailored solutions—not templates</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-4 rounded-3">
            <img className="m-2" src="secure.png" style={{width: "50px"}}>
            </img>
            </div>
            <h4 class="fw-semibold mb-0 ">Secure & Scalable</h4>
            <p class="">Built with modern, secure frameworks.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-light bg-gradient fs-4 rounded-3">
            <img className="m-2" src="trusted.png" style={{width: "50px"}}>
            </img>
            </div>
            <h4 class="fw-semibold mb-0 ">Trusted by Businesses</h4>
            <p class="">Proven track record in development</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </div>
  );
}

export default HomePage;
