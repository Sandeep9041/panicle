import { MdNavigateNext } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";
import "./index.css";

export const Services=()=>{
    return(
        <div className="services-bg">
            <p className="services">OUR SERVICES</p>
            <h1>Who We Serve</h1>
            <ul>
                <li>
                    <div className="services-icon">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702653784/Solid_head_health_dsadq1.png"    alt="" />
                    </div>
                    <div>
                        <h5>Patients</h5>
                        <MdNavigateNext/>
                    </div>
                    <p>At Asklepios, we empower patients with personalized healthcare solutions, helping them make informed choices.</p>
                </li>
                <li>
                    <div className="services-icon">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702653784/Solid_perscription_eqdmel.png"    alt="" />
                    </div>
                    <div>
                        <h5>Providers</h5>
                        <MdNavigateNext/>
                    </div>
                    <p>
                    Asklepios supports healthcare providers with advanced tools and insights to streamline patient interactions.
                    </p>
           </li>
                <li>
                    <div className="services-icon">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702653784/Solid_stethoscope_jci80b.png"    alt="" />
                    </div>
                    <div>
                        <h5>Professionals</h5>
                        <MdNavigateNext/>
                    </div>
                    <p>
                    We offerhealthcare professionals access to cutting-edge AI-driven health assessments and data analytics.                         </p>
                </li>
                <li>
                    <div className="services-icon">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702653785/Solid_perscription_1_dudvwo.png"    alt="" />
                    </div>
                    <div>
                        <h5>Pharma</h5>
                        <MdNavigateNext/>
                    </div>
                    <p>
                    We provide valuable data insights to pharmaceutical companies, aiding research and development efforts.                        </p>
                </li>
                <div className="contact">
                <p>Don't see the above
                     category?<span>Contact Us!</span></p>
            <button>
                See Our Technology <GrLinkNext/>
            </button>
            </div>
            </ul>
           
        </div>
    )
}