import { Link } from "react-router-dom";
import { PiEyeClosedLight } from "react-icons/pi";
import { useState } from "react";
import { PiEyeClosedFill } from "react-icons/pi";
import './MainNavbarStyle.css'

const MainNavbar = () => {
  const links = [
    {name: 'Home',    id:1},
    {name: 'Contact', id:2},
    {name: 'My Work', id:3},
    {name: 'Blog',    id:4},
  ];
  let [open, setOpen] = useState(false);

  const handleMenu = ()=>{
      setOpen(!open);
  }


    return (
    <div>
      {/* using raw css */}
      <div className="nav">
        {/*website logo */}
        <div className="logo">
          PAW
        </div>

        {/* navbar menu  */}
        <div className="menu-right">
          <ul id="menu" className={open? 'open' : ''}>
            {
              links.map((link)=>(
                <li className="" key={link.id}>
                  <Link className="hover-name" to={'/'}>{link.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        
        <div onClick={handleMenu} className="icon-close">
          {open?   <PiEyeClosedFill/> : <PiEyeClosedLight />}
        </div>
          
        

        

      </div>
    </div>
  );
};

export default MainNavbar;
