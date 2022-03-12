
import React from "react";
import {Link} from 'gatsby'
import Icon from '../Icons/Icon';
const SideDrawer =props=>{

   
 
    let classesList = "nav "
 
   
    let backdrop=null;

  

    if(props.show) 
    {
        classesList+="show-menu";
         backdrop= <div className='backdrop' onClick={props.drawerToggler}></div>
    }

    return (
       <>
         <div className={classesList} id='navbar'>
        <nav className="nav__container">
            <div>
                <span   className='nav__link nav__logo' onClick={props.drawerToggler}>
                     {/* <span > Naresh Namani</span> */}

                     <i className='nav__icon closeButton' >
                     <Icon name="close" width={20} height={20} />
                 
                     </i>

                    
                </span> <hr></hr>
               
                <div className='nav__list'>
                    <div className='nav__items'>
        
                        <Link to='/' className='nav__link' role={"link"}>
                            <i className='nav__icon home'>
                            <Icon name="home" color='#0d96f2'  />
                            </i>
                            <span className='nav__name'>Home </span>
                        </Link>
                        <div className='nav__dropdown'>
                        <div className='nav__link'>
                        <i className='nav__icon topic'>
                        <Icon name="topic" color='#0d96f2'  />
                        </i>
                            <span className='nav__name'>Topics</span>

                            <i className='nav__icon nav__dropdown-icon'>
                            <Icon name="dropdown" width={16} height={16} color='#0d96f2' />
                            </i>
                        </div>
                        <div className='nav__dropdown-colapse'>
                        <div className='nav__dropdown-content'>
                        <Link to='/' className='nav__dropdown-item' role={"link"}>
                          Java
                        </Link>
                        <Link to='/' className='nav__dropdown-item'>
                          Data Structures
                        </Link>
                        <Link to='/' className='nav__dropdown-item' role={"link"}>
                          Javascript
                        </Link>
                        </div>
                        </div>
                        </div>
                        <Link to='/tags' className='nav__link' role={"link"}>
                        <i className='nav__icon contact'>
                        <Icon name="tags" color='#0d96f2'  />
                        </i>
                            <span className='nav__name'>Tags</span>
                        </Link>

                        <Link to='/learn' className='nav__link' role={"link"}>
                        <i className='nav__icon contact'>
                        <Icon name="tags" color='#0d96f2'  />
                        </i>
                            <span className='nav__name'>Learn</span>
                        </Link>
                        <Link to='/about' className='nav__link' role={"link"}>
                        <i className='nav__icon contact'>
                        <Icon name="user" color='#0d96f2'  />
                        </i>
                            <span className='nav__name'>About me</span>
                        </Link>
                        

                        <hr></hr>
                        <div className='nav__dropdown'>
                        <div className='nav__link'>
                        <i className='nav__icon topic'>
                        <Icon name={"dark"} color='#0d96f2'  />
                        </i>
                            <span className='nav__name'>Theme</span>

                            <i className='nav__icon nav__dropdown-icon'>
                            <Icon name="dropdown" width={16} height={16} color='#0d96f2' />
                            </i>
                        </div>
                        <div className='nav__dropdown-colapse'>
                        <div className='nav__dropdown-content'>
                     
                        </div>
                        </div>
                        </div> 
            
                    </div>

                </div>
            </div>
           
        </nav>

    </div>
    {backdrop}
       </>
)
    }

export default SideDrawer;