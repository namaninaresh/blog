
import React from "react";

const sideDrawer =props=>{

    let drawerClasses= "side-drawer";

    if(props.show)
    {
        drawerClasses =  "side-drawer open";
    }


    return (
    <nav className={drawerClasses}>
        <div className="closeSideDrawer" onClick={props.closeHandler}>

        </div>
        <hr></hr>
        {props.navItems}
    </nav>
)
    }

export default sideDrawer;