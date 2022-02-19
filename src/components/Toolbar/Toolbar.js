import { Link } from 'gatsby';
import React from 'react'


const toolbar = props => (

    <header className='toolbar'>
        <nav className='toolbar__navigation'>
          

            <div className='toolbar__logo'><Link to='#' >Naresh Namani</Link></div>
            <div className='spacer'></div>
            <div className='toolbar__nav-items'>
                {props.navItems}
            </div>
            <div className='toolbar_togglerIcon' onClick={props.drawerToggler}>

                </div>
           
        </nav>
    </header>

);
export default toolbar