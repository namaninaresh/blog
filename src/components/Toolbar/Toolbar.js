import { Link } from "gatsby";
import React from "react";
import Icon from "../Icons/Icon";

const Toolbar = ({ pageName }) => {
  const [sideDrawerOpen, setSideDrawer] = React.useState(false);
  const [themeValue, setTheme] = React.useState("default");

  let classesList = "nav ";
  let backdrop = null;

  const drawerToggler = () => {
    setSideDrawer(!sideDrawerOpen);
  };

  React.useEffect(() => {
    const value = localStorage.getItem("theme");
    if (value !== null) {
      setTheme(value);
      document.documentElement.className = value;
    }
  });

  const updateTheme = (value) => {
    document.documentElement.className = value;
    localStorage.setItem("theme", value);
    setTheme(value);
  };

  if (sideDrawerOpen) {
    classesList += "show-menu";
    backdrop = <div className="backdrop" onClick={drawerToggler}></div>;
  }
  return (
    <>
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <Link to="/" role={"link"} className="toolbar__logo">
            Naresh Namani
          </Link>
          <div className="spacer"></div>
          <ul className="nav__menu">
            <li>
              <Link
                to="/"
                className={pageName === "/" ? "active" : undefined}
                role={"link"}
              >
                Home
              </Link>
            </li>
            {/* <li><Link  to='#' role={"link"}>Topic 
    </Link>
      <ul className="dropdown">
        <li><Link to='/' role={"link"}>Javascript</Link></li>
        <li><Link to='/' role={"link"}>Data Structures</Link></li>
        <li><Link to='/' role={"link"}>Java</Link></li>
      </ul>
    </li> */}
            <li>
              <Link
                to="/tags"
                className={pageName?.includes("tag") ? "active" : undefined}
                role={"link"}
              >
                Tags
              </Link>
            </li>
            <li>
              <Link
                to="/learn"
                className={pageName?.includes("learn") ? "active" : undefined}
                role={"link"}
              >
                Learn
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={pageName?.includes("about") ? "active" : undefined}
                role={"link"}
              >
                About me
              </Link>
            </li>
            <li
              onClick={() =>
                updateTheme(themeValue === "default" ? "dark" : "default")
              }
              style={{ padding: "0 1rem " }}
            >
              {" "}
              <Icon
                name={themeValue === "default" ? "light" : "dark"}
                width={16}
                height={16}
                color="#0d96f2"
              />{" "}
            </li>

            {/*<li><Link  to='#'>
      <Icon  name={themeValue || "default"} color= {themeValue ==='light' ? '#000' : '#fff' }/>
    </Link>
      <ul className="dropdown dropdown__theme">
        <li onClick={()=>updateTheme("light")}>Light</li>
        <li onClick={()=>updateTheme("dark")}>Dark</li>
        <li onClick={()=>updateTheme("default")}>Default</li>
      </ul>
    </li>  */}

            <li>
              {" "}
              <label>
                {/* <select value={themeValue} className='theme__toggler'  onChange={(event)=>updateTheme(event.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="default">Default</option>
          </select> */}
              </label>
            </li>

            {/* <li><Link to='/'>Contact</Link></li> */}
          </ul>
          <div className="toolbar_togglerIcon" onClick={drawerToggler}>
            <Icon name="menu" width={24} height={24} color="#027ffe" />
          </div>
        </nav>
      </header>

      <div className={classesList} id="navbar">
        <nav className="nav__container">
          <div>
            <span className="nav__link nav__logo" onClick={drawerToggler}>
              {/* <span > Naresh Namani</span> */}

              <i className="nav__icon closeButton">
                <Icon name="close" width={20} height={20} />
              </i>
            </span>{" "}
            <hr></hr>
            <div className="nav__list">
              <div className="nav__items">
                <Link to="/" className="nav__link" role={"link"}>
                  <i className="nav__icon home">
                    <Icon name="home" color="#0d96f2" />
                  </i>
                  <span className="nav__name">Home </span>
                </Link>
                {/*<div className='nav__dropdown'>
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
                        </div> */}
                <Link to="/tags" className="nav__link" role={"link"}>
                  <i className="nav__icon contact">
                    <Icon name="tags" color="#0d96f2" />
                  </i>
                  <span className="nav__name">Tags</span>
                </Link>

                <Link to="/learn" className="nav__link" role={"link"}>
                  <i className="nav__icon contact">
                    <Icon name="learn" color="#0d96f2" />
                  </i>
                  <span className="nav__name">Learn</span>
                </Link>
                <Link to="/about" className="nav__link" role={"link"}>
                  <i className="nav__icon contact">
                    <Icon name="user" color="#0d96f2" />
                  </i>
                  <span className="nav__name">About me</span>
                </Link>

                <hr></hr>
                <div className="nav__dropdown">
                  <div className="nav__link">
                    <i className="nav__icon topic">
                      <Icon name={themeValue} color="#0d96f2" />
                    </i>
                    <span className="nav__name">Theme</span>

                    <i className="nav__icon nav__dropdown-icon">
                      <Icon
                        name="dropdown"
                        width={16}
                        height={16}
                        color="#0d96f2"
                      />
                    </i>
                  </div>
                  <div className="nav__dropdown-colapse">
                    <div className="nav__dropdown-content">
                      <ul className="dropdown dropdown__theme">
                        {/*  <li onClick={()=>updateTheme("light")}> <Icon name="light" width={16} height={16} color='#0d96f2' />  Light</li>
                         */}
                        <li onClick={() => updateTheme("dark")}>
                          <Icon
                            name="dark"
                            width={16}
                            height={16}
                            color="#0d96f2"
                          />{" "}
                          Dark
                        </li>
                        <li onClick={() => updateTheme("default")}>
                          <Icon
                            name="light"
                            width={16}
                            height={16}
                            color="#0d96f2"
                          />
                          {` `}Light
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <li className='theme'> Theme  <label>
           
          <select value={themeValue} className='theme__toggler' onChange={(event)=>updateTheme(event.target.value)}>
            <option value="default">default</option>
            <option value="dark">Dark</option>
            <option value="default">Default</option>
          </select>
        </label></li> */}

                {/* <Link to='/' className='nav__link'>
                        <i className='nav__icon contact'>
                        <Icon name="contact" color='#0d96f2'  />
                        </i>
                            <span className='nav__name'>Contact</span>
                        </Link> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
      {backdrop}
    </>
  );
};
export default Toolbar;
