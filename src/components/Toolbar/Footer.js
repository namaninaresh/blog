
import { Link } from 'gatsby';
import React from 'react'
import Icon from '../Icons/Icon';

import SocialLinks from '../SocialLinks';

const Footer= props =>(

    <footer>
       <div className='footer'>

          <div className='center'>
               <Link to='/' className='footer__logo'>Naresh Namani</Link>
          </div>
           
      <SocialLinks />
     

       <div className='center'>
                <p className='thankyou'>Made with </p><i className='nav__icon ' >
                   <Icon name="love" width={20} height={20} fill='#cb0303d4' color='#cb0303d4'/>
                     </i>
            </div>

{/* 
          Thank you 
          <i className='nav__icon thankyou' >
                     <Icon name="love" width={20} height={20} fill='#cb0303d4' color='#cb0303d4'/>
                     </i> */}
       </div>
        </footer>

)



export default Footer;