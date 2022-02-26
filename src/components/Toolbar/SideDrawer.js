
import React from "react";

const sideDrawer =props=>{

    let classesList = "nav "
 
    if(props.show) classesList+="show-menu"


    return (
        <div className={classesList} id='navbar'>
        <nav className="nav__container">
            <div>
                <a  href='#' className='nav__link nav__logo'>
                        o
                        <span> Naresh Namani</span>
                </a>
                <div className='nav__list'>
                    <div className='nav__items'>
                        <h3 className='nav__subtitle'>Profile</h3>
                        <a href='#' className='nav__link'>
                            <span className='nav__name'>Home </span>
                        </a>
                        <div className='nav__dropdown'>
                        <a href='#' className='nav__link'>
                            <span className='nav__name'>Profile</span>
                        </a>
                        <div className='nav__dropdown-colapse'>
                        <div className='nav__dropdown-content'>
                        <a href='#' className='nav__dropdown-item'>
                          Passwords
                        </a>
                        <a href='#' className='nav__dropdown-item'>
                          Mail
                        </a>
                        <a href='#' className='nav__dropdown-item'>
                          Accounts
                        </a>
                        </div>
                        </div>
                        </div>

                       
                        
                        <a href='#' className='nav__link'>
                            <span className='nav__name'>Contact</span>
                        </a>
                    </div>

                    <div className='nav__items'>
                        <h3 className='nav__subtitle'>Topics</h3>

                        <div className='nav__dropdown'>
                        <a href='#' className='nav__link'>
                            <span className='nav__name'>Notifications</span>
                        </a>

                        <div className='nav__dropdown-colapse'>
                        <div className='nav__dropdown-content'>
                        <a href='#' className='nav__dropdown-item'>
                          Bocked
                        </a>
                        <a href='#' className='nav__dropdown-item'>
                          Sulence
                        </a>
                        <a href='#' className='nav__dropdown-item'>
                          Muted
                        </a>
                        <a href='#' className='nav__dropdown-item'>
                          Program
                        </a>
                        </div>
                        </div>
                        </div>

                       
                        
                        <a href='#' className='nav__link'>
                            <span className='nav__name'>Java</span>
                        </a>
                        <a href='#' className='nav__link'>
                            <span className='nav__name'>Python</span>
                        </a>
                        <a href='#' className='nav__link'>
                            <span className='nav__name'>Data Structures</span>
                        </a>
                        <a href='#' className='nav__link'>
                            <span className='nav__name'>JavaScript</span>
                        </a>
                    </div>
                </div>
            </div>
            <a href='#' className='nav__link nav__logout'>
                            <span className='nav__name'>Logout</span>
                        </a>
        </nav>

    </div>
)
    }

export default sideDrawer;