import React from 'react'
import './Footer2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer2 = () => {
  return (
    <>
     <div className='footer2 d-flex'>
     <div  className='container'>
     <div className='row'>
     <div className='col-lg-1 col-md-12 col-sm-12 col-xs-12'>
     <a style={{border:`1px solid green` }} >Cookie</a>

     </div>
     <div className='col-lg-1 col-md-12 col-sm-12 col-xs-12'>
     <a>Sitemap</a>


     </div>
     <div className='col-lg-1 col-md-12 col-sm-12 col-xs-12'>
     <a>Privacy</a>


     </div>
     <div className='col-lg-1 col-md-12 col-sm-12 col-xs-12'>
     <a>Term of Use</a>


     </div>
     <div className='col-lg-1 col-md-12 col-sm-12 col-xs-12'>
     <a>Offer Terms</a>


     </div>
     <div className='col-lg-1 col-md-12 col-sm-12 col-xs-12'>
     <a>CA Supply Chain</a>


     </div>
     <div className='col-lg-2 col-md-12 col-sm-12 col-xs-12'>
     <a>2023 LEVI STRAUSS & CO</a>


     </div>
     <div className='col-lg-4 col-md-12 col-sm-12 col-xs-12'>
     <div>
     <FontAwesomeIcon icon={faFacebookF}  className='mx-3'/>
     <FontAwesomeIcon icon={faYoutube} className='mx-3'/>
     <FontAwesomeIcon icon={faTwitter} className='mx-3'/>
     <FontAwesomeIcon icon={faInstagram} className='mx-3'/>
    
      {/*<FontAwesomeIcon icon={faSearch} size="2x" style={{ color: '#1DA1F2' }} />
      <FontAwesomeIcon icon={faSearch} size="2x" style={{ color: '#FF0000' }} />*/}
    </div>

     </div>
     </div>

     </div>

     </div> 
   
    </>
  )
}

export default Footer2
