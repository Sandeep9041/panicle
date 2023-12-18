import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import "./index.css";

export const Navbar = () => {
    return(
        <nav>
                <div className="logo-card box">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702705913/Logo_Mark_2_olxq0o.png" alt="" className="lg"/>
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702702642/Logo_Mark_1_bkhmop.png" alt="" className="sm"/>
                </div>
                <div className="nav-items">
                    <div className="location-card box lg"><BiCurrentLocation/></div>
                    <div className="mail-card box lg"><GrMail/></div>
                    <div className="menu-card">  
                        <p className="lg">Main Menu</p>
                        <p className="sm">Menu</p>
                        <FiMenu/>
                    </div>
                </div>
        </nav>
    )
}