import * as React from "react";

import Toolbar from "./Toolbar/Toolbar";
// import SideDrawer from './Toolbar/SideDrawer';
import Footer from "./Toolbar/Footer";

// ... import statements

/*const navItems = <ul className='nav__items'>
<li><Link to="/">Home</Link></li>
<li><Link to="#">Topics</Link>
    <ul className='nav__subitems'>
        <li><Link to='/'>Javascript</Link></li>
        <li><Link to='/'>Data Structures</Link></li>
    </ul>
</li>
<li><Link to="/about">About Me</Link></li>
</ul>
; */

const Layout = (props) => {
  const [sideDrawerOpen, setSideDrawer] = React.useState(false);

  // let sideDrawer;
  //let backdrop;

  const drawerToggler = () => {
    setSideDrawer(!sideDrawerOpen);
  };

  if (sideDrawerOpen) {
    // sideDrawer = <SideDrawer show={sideDrawerOpen} navItems={navItems} closeHandler={drawerToggler}/>
    // backdrop =  <div className='backdrop' onClick={drawerToggler}></div>;
  }
  return (
    <>
      <Toolbar
        drawerToggler={drawerToggler}
        pageName={props.pageName}
        sideDrawerOpen={sideDrawerOpen}
      />

      <div className="container" style={{ height: "100%" }}>
        <main>
          {/* <h1 className="heading">{pageTitle}
         
          </h1> */}
          {props.children}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
