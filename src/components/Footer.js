import React from "react";

function Footer () {
    return(
        <div class="container ">
        <footer class="py-5">
          <div class="row">
            <div class="col-4 col-md-2 mb-3">
              <h5 className="text-light">Section</h5>
              <ul class="text-light nav flex-column">
                <li class="text-light nav-item mb-2"><a href="/" class="nav-link p-0">Home</a></li>
                <li class="text-light nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
                <li class="text-light nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li>
                <li class="text-light nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li>
                <li class="text-light nav-item mb-2"><a href="#" class="nav-link p-0">Contact</a></li>
              </ul>
            </div>
      
      
            <div class="col-md-3 offset-md-2 mb-3">
              <form>
                <h5 className="text-light">Subscribe to our newsletter</h5>
                <p class="text-light">Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address"></input>
                  <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
      
          <div class="text-light d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2024 Company, Inc. All rights reserved.</p>
            <ul class="text-light list-unstyled d-flex">
              <li class="text-bg-light ms-3 rounded-2"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"/></svg></a></li>
              <li class="text-bg-light rounded-2 ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"/></svg></a></li>
              <li class="text-bg-light rounded-2 ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"/></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
    )
}
export default Footer