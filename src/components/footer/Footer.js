import React from 'react'
import "./Footer.css";

/**
 * footer of core layout 
 */
export default function Footer() {
  return (
    <footer className="Footer">
      <div className='wrapper'>
        <span className='copyright'>&copy;2019 Market</span>
        <span className='divider'>.</span>
        <span className='actions'><a href='#'>Privacy Policy</a></span>
      </div>
    </footer>
  )
}
