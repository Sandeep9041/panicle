import { FaSquare,FaYoutube ,FaInstagram,FaLinkedin    } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";

import "./index.css";

export const Footer =()=>{
return (
    <div className="footer-bg">
            <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702633321/Logo_Square_1_xzpohh.png"
            alt="" className="footer-logo"/>
            <p className="footer-content">Revolutionizing The Personalized Health Industry through the power of AI Technology and Machine Learning.</p>
            <ul>
                <li className="active">
                    <h5>Homepage</h5>
                    <FaSquare className="active-square"/>
                </li>
                <li><h5>Services</h5></li>
                <li><h5>Platform</h5></li>
                <li><h5>About Us</h5></li>
                <li><h5>Contact Us</h5></li>
            </ul>
            <div className="contact-icons">
                <IoLogoFacebook />
                <FaYoutube/>
                <FaInstagram/>
                <FaLinkedin />
            </div>
            <div className="copyright-card">
                <p>Copyright© 2023 asklepios. inc</p>
                <FaSquare className="copyright-square"/>
                <p>Privacy Policy</p>
                <FaSquare className="copyright-square"/>
                <p>Terms & Conditions</p>
            </div>
            <div className="footer-btns">
            <button>
                    Google Play <FiDownload className="download-icon"/>
                </button>
                <button>
                    Apple Store <FiDownload className="download-icon"/>
                </button>
            </div>
            
    </div>
)
}