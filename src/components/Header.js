import React, { Component } from 'react';
import glasses1 from "../images/glasses1.jpg";
import glasses2 from "../images/glasses2.jpg";
import glasses3 from "../images/glasses3.jpg";
import glasses4 from "../images/glasses4.jpg";
import '../index.css'

export class Header extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row my-4'>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <div className='glasses'>
              <img src={glasses1} alt="glasses1" className='img-fluid' />
              <h5>Eyeglasses</h5>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <div className='glasses'>
              <img src={glasses2} alt="glasses2" className='img-fluid' />
              <h5>Sunglasses</h5>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <div className='glasses'>
              <img src={glasses3} alt="glasses3" className='img-fluid' />
              <h5>Screen Glasses</h5>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <div className='glasses'>
              <img src={glasses4} alt="glasses4" className='img-fluid' />
              <h5>Power Sunglasses</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header