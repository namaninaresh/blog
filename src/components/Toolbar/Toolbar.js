import { Link } from 'gatsby';
import React from 'react'
import Icon from '../Icons/Icon';



const Toolbar = props => {

    const [sideDrawerOpen, setSideDrawer] = React.useState(false);

    let classesList = "nav ";
    let backdrop=null;

    const drawerToggler =() =>{
       setSideDrawer(!sideDrawerOpen)
    }
  
 
    if(sideDrawerOpen) 
    {
        classesList+="show-menu";
       backdrop= <div className='backdrop' onClick={drawerToggler}></div>
    }

return(

    <>
  
  <header className='toolbar'>
        <nav className='toolbar__navigation'>
          

            <div className='toolbar__logo'>Naresh Namani</div>
            <div className='spacer'></div>
            <ul className='nav__menu'>
    <li><Link to='/'>Home</Link></li>
    <li><Link  to='/'>Topic
    </Link>
      <ul className="dropdown">
        <li><Link to='/'>Javascript</Link></li>
        <li><Link to='/'>Data Structures</Link></li>
        <li><Link to='/'>Java</Link></li>
      </ul>
    </li>
    <li><Link to='/about'>About me</Link></li>
    <li><Link to='/'>Contact</Link></li>
  </ul>
            <div className='toolbar_togglerIcon' onClick={drawerToggler}>

                </div>
           
        </nav>
    </header>

    <div className={classesList} id='navbar'>
        <nav className="nav__container">
            <div>
                <span   className='nav__link nav__logo' onClick={drawerToggler}>
                     {/* <span > Naresh Namani</span> */}

                     <i className='nav__icon closeButton' >
                     <Icon name="close" width={20} height={20} />
                     </i>
                </span>
                <div className='nav__list'>
                    <div className='nav__items'>
        
                        <Link to='/' className='nav__link'>
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
                        <Link to='/' className='nav__dropdown-item'>
                          Java
                        </Link>
                        <Link to='/' className='nav__dropdown-item'>
                          Data Structures
                        </Link>
                        <Link to='/' className='nav__dropdown-item'>
                          Javascript
                        </Link>
                        </div>
                        </div>
                        </div>
                        <Link to='/about' className='nav__link'>
                        <i className='nav__icon contact'>
                        <Icon name="user" color='#0d96f2'  />
                        </i>
                            <span className='nav__name'>About me</span>
                        </Link>
                       
                        
                        <Link to='/' className='nav__link'>
                        <i className='nav__icon contact'>
                        <Icon name="contact" color='#0d96f2'  />
                        </i>
                            <span className='nav__name'>Contact</span>
                        </Link>
                    </div>

                </div>
            </div>
           
        </nav>

    </div>
    {backdrop}
    
    </>

);
        }
export default Toolbar