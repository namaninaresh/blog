
import React from "react";
import {Link} from 'gatsby'
const sideDrawer =props=>{

    let classesList = "nav "
 
    if(props.show) classesList+="show-menu"


    return (
        <div className={classesList} id='navbar'>
        <nav className="nav__container">
            <div>
                <Link  to="#" className='nav__link nav__logo'>
                        o
                        <span> Naresh Namani</span>
                </Link>
                <div className='nav__list'>
                    <div className='nav__items'>
                        <h3 className='nav__subtitle'>Profile</h3>
                        <Link to="#" className='nav__link'>
                            <span className='nav__name'>Home </span>
                        </Link>
                        <div className='nav__dropdown'>
                        <Link to="#" className='nav__link'>
                            <span className='nav__name'>Profile</span>
                        </Link>
                        <div className='nav__dropdown-colapse'>
                        <div className='nav__dropdown-content'>
                        <Link to="#" className='nav__dropdown-item'>
                          Passwords
                        </Link>
                        <Link to="#" className='nav__dropdown-item'>
                          Mail
                        </Link>
                        <Link to="#" className='nav__dropdown-item'>
                          Accounts
                        </Link>
                        </div>
                        </div>
                        </div>

                       
                        
                        <Link to="#" className='nav__link'>
                            <span className='nav__name'>Contact</span>
                        </Link>
                    </div>

                    <div className='nav__items'>
                        <h3 className='nav__subtitle'>Topics</h3>

                        <div className='nav__dropdown'>
                        <Link to="#" className='nav__link'>
                            <span className='nav__name'>Notifications</span>
                        </Link>

                        <div className='nav__dropdown-colapse'>
                        <div className='nav__dropdown-content'>
                        <Link to="#" className='nav__dropdown-item'>
                          Bocked
                        </Link>
                        <Link to="#" className='nav__dropdown-item'>
                          Sulence
                        </Link>
                        <Link to="#" className='nav__dropdown-item'>
                          Muted
                        </Link>
                        <Link to="#" className='nav__dropdown-item'>
                          Program
                        </Link>
                        </div>
                        </div>
                        </div>

                       
                        
                        <Link to="#" className='nav__link'>
                            <span className='nav__name'>Java</span>
                        </Link>
                        <Link to="#" className='nav__link'>
                            <span className='nav__name'>Python</span>
                        </Link>
                        <Link to="#" className='nav__link'>
                            <span className='nav__name'>Data Structures</span>
                        </Link>
                        <Link to="#" className='nav__link'>
                            <span className='nav__name'>JavaScript</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="#" className='nav__link nav__logout'>
                            <span className='nav__name'>Logout</span>
                        </Link>
        </nav>

    </div>
)
    }

export default sideDrawer;