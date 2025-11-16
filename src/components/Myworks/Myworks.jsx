import React from 'react'
import mywork_data from '../../assets/mywork_data'
import { img } from 'framer-motion/client'
import icon from "../../assets/theme_pattern.svg"
import './Mywork.css'
function Myworks() {
  return (
    <div className='my-work position-relative container-fluid d-flex flex-column align-items-center justify-content-center gap-3'>
      <div className='heading-wrapper d-flex flex-column position-relative align-items-center'>
              <h1 className="ps-3 mt-2 fw-bold skills-heading">
                My <span className="skills">Works</span>
      
              </h1>
              <img className='position-absolute z-n1vworks ' src={icon} alt="vijay" />
              </div>
      <div className='mywork-container row gap-4 justify-content-center mx-5'>
        {mywork_data.map((work, index) => {
          return <div className='col-12 col-md-3 card-wrapper position-relative' key={index}>
            <img src={work.w_img} alt="" className="img-fluid" />
            <div className="overlay"><div className='text-center d-flex justify-content-center pt-5'><a 
  href={work.link} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn btn-light "
>
  View <i className="bi bi-box-arrow-up-right  "></i>
</a></div>
</div> {/* Gradient overlay */}
          </div>

        }
        )}
      </div>
      <div>
        <p >show more</p>
      </div>
    </div>
  )
}

export default Myworks