import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div>
      <Row className='p-5 bg-dark text-light'>
        <Col>
        <h3> ReduxCart</h3>
        <p style={{ textAlign:'justify'}}>
        A shopping cart is essential to every e-commerce site, allowing visitors to select, reserve, and purchase a product or service, and it helps create a frictionless experience for customers.
      </p>
        </Col>
        <Col className='d-flex align-items-center flex-column'>
          <h3>Links</h3>
          <Link to={'/wish'} className='d-block mb-3 mt-3'>Wishlist</Link>
          <Link to={'/cart'}>Cart</Link>
        </Col>
        <Col className='d-flex align-items-center flex-column'>
          <h3>References</h3>
          <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className='d-block mb-3 mt-3'>Bootstrap</a>
          <a href="https://react.dev/">React</a>
        </Col>
  
        <Col>
        <h3>Contact Us</h3>
        <p className='mt-3'>Submit Your Email Id, so we can contact you...</p>
        <input type="email"  className='form-control mt-3' placeholder='Enter Email id'/>
        <button className='btn btn-outline-light mt-3'>Send</button>
        </Col>
        <h6 className='text-center'>ReduxCart 2024 &copy; ALL rights reserved...</h6>

      </Row>
    </div>
    </>
  )
}

export default Footer