import * as React from 'react'
import {  Link,useStaticQuery, graphql } from 'gatsby';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './Toolbar/SideDrawer';

// ... import statements

const navItems = <ul className='nav__items'>
<li><Link to="/">Home</Link></li>
<li><Link to="#">Topics</Link>
    <ul className='nav__subitems'>
        <li><Link to='/'>Javascript</Link></li>
        <li><Link to='/'>Data Structures</Link></li>
    </ul>
</li>
<li><Link to="/about">About Me</Link></li>
</ul>
;


const Layout = ({ pageTitle, children }) => {
   
    const [sideDrawerOpen, setSideDrawer] = React.useState(false);

    let sideDrawer;
    let backdrop;

    const drawerToggler =() =>{
       setSideDrawer(!sideDrawerOpen)
    }
  

    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  
    if(sideDrawerOpen)
    {
        sideDrawer = <SideDrawer show={sideDrawerOpen} navItems={navItems} closeHandler={drawerToggler}/>
        backdrop =  <div className='backdrop' onClick={drawerToggler}></div>;
    }
    return (
        
        <div  className='container' style={{height:'100%'}}> 

        <Toolbar drawerToggler={drawerToggler} navItems ={navItems} />
   {sideDrawer} 
   {backdrop}
       
    
        <main>
          <h1 className="heading">{pageTitle}</h1>
          {children}
        </main>
      </div>
    )
  }
  
  export default Layout
