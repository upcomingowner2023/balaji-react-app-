import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
            Why Apple is the best place to buy iPhone.
You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier and get set up quickly.
You can also chat with a Specialist anytime.
 <hr/>
 Trade in your smartphone for credit.
With Apple Trade In, you can get credit towards a new iPhone when you trade in your eligible smartphone.4 It’s good for you and the planet.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="/assets/about.png" alt="About Us" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
