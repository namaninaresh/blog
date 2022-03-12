
import React from "react";
import {Link} from 'gatsby'
import Icon from '../Icons/Icon';
import learnNav from '../../data/learnNav.json';

const NavDropdown = (props)=>{
    console.log('inner',props)
    return <div className='nav__dropdown'>
    <div className='nav__link'>
 <span className='nav__name'><div className="dot"></div>{props.name}</span>

        <i className='nav__icon nav__dropdown-icon'>
        <Icon name="dropdown" width={16} height={16} color='#0d96f2' />
        </i>
    </div>
    <div className='nav__dropdown-colapse'>
    <div className='nav__dropdown-content'>
    {
        props.items.map((item,index)=>{

            if(item.link instanceof Object)
            {
                return <NavDropdown items={item.link} key={index} name={item.name}/>
            }
           return  <Link to='/' className='nav__dropdown-item' role={"link"} key={index}>
            {item.name}
          </Link>
        })
    }
  
    </div>
    </div>
    </div>
}


const ListItem = ({name,link,folderName})=>{


    if(link instanceof Object)
    {   
        return <NavDropdown items={link} name={name} />;
    }
    
   return <Link to={`/learn/${folderName}/${link}`}  className='nav__link' role={"link"}>
    
    <span className='nav__name'> <div className="dot"></div> {name}</span>
</Link>
}

const LearnSideDrawer =props=>{
   
    let classesList = "nav learn "
 
   
    let backdrop=null;

    let folderName = props.slug.split("/")[0];
    console.log(folderName)
  

    if(props.show) 
    {
        classesList+="show-menu";
         backdrop= <div className='backdrop' onClick={props.drawerToggler}></div>
    }


    const navItems = learnNav[folderName].map((item,index)=><ListItem key={index} {...item} folderName={folderName}/>)


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
                       {navItems}
                        
                   
                        
                        

                        <hr></hr>
                       
                    </div>

                </div>
            </div>
           
        </nav>

    </div>
    {backdrop}
       </>
)
    }

export default LearnSideDrawer;