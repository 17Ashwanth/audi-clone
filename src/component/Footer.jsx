import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className>
      <div className='div-footer text-white'>
      <div className='icons p-5 me-5'>
      <i class="fa-brands fa-youtube fs-2"></i>
      <i class="fa-brands fa-facebook fs-2"></i>
      <i class="fa-brands fa-instagram fs-2"></i>
      <i class="fa-brands fa-linkedin fs-2" ></i>
      </div>

      <div className=' text-white d-flex justify-content-evenly border-bottom mb-4'>
        <div>
          <ul className='fs-2 list'> Topics
              <li className='fs-5 mt-4'>Company</li>
              <li className='fs-5 mt-2'>Innovation</li>
              <li className='fs-5 mt-2'>Models</li>
              <li className='fs-5 mt-2'>Brand</li>
              <li className='fs-5 mt-2' >Career</li>
          </ul>
        </div>

        <div>
          <ul className='fs-2 list'>  AUDI AG
              <li className='fs-5 mt-4'>Audi Report 2022</li>
              <li className='fs-5 mt-2'>Financial Calender</li>
              <li className='fs-5 mt-2'>Profile</li>
          </ul>
        </div>

        <div>
          <ul className='fs-2 list'> Services
              <li className='fs-5 mt-4'>Press</li>
              <li className='fs-5 mt-2'>Contact</li>
              <li className='fs-5 mt-2'>Job portal</li>
          </ul>
        </div>


        <div></div>
        <div></div>

      </div>

      <div className='mt-3 d-flex justify-content-evenly '>
        <h5>© AUDI AG. All rights reserved</h5>
        <h5>Legal notice </h5>
        <h5>Legal </h5>
        <h5>Whistleblower System</h5>
        <h5>Privacy Policy </h5>
        <h5>Cookie Policy  </h5>
        <h5>Cookie Consent Options </h5>
      </div>

      <div className='mt-5'>
        <p p className='fs-6'>
        * The stated consumption and emissions values were determined in accordance with the legally stipulated measurement procedure. The WLTP test cycle completely replaced the NEDC test cycle with effect from 1 January 2022. As a result, no NEDC values are available for vehicles with a type approval issued after this date. <br /> <br />

The values do not refer to an individual vehicle and are not part of the offer; instead, they are solely for the purpose of comparing between different types of vehicles. Optional equipment and accessories (attachments, tyre formats etc.) may alter relevant vehicle parameters such as the weight, rolling resistance and aerodynamics and, alongside weather and traffic conditions and individual driving behaviour, may influence the fuel consumption, electricity consumption, CO₂ emissions and performance values of a vehicle. <br /><br />

Due to the more realistic test conditions, fuel consumption and CO₂ emissions values will in many cases be higher in accordance with the WLTP than in accordance with the NEDC. There may have been corresponding changes to vehicle taxation since 1 September 2018 as a result of this. You can find further information on the differences between the WLTP and the NEDC at http://www.audi.co.uk/wltp. <br /> <br />

 

Further information on the official fuel consumption and the official, specific CO₂ emissions of new passenger car models can be found in the “Guide on the fuel economy, CO₂ emissions and power consumption of all new passenger car models”, available free of charge from all sales outlets and from DAT Deutsche Automobil Treuhand GmbH, Hellmuth-Hirth-Str. 1, 73760 Ostfildern, Germany or at www.dat.de.
        </p>
      </div>

      </div>
    </div>
  )
}

export default Footer