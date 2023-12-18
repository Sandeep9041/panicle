import { GrLinkNext } from "react-icons/gr";
import { FaSquare , FaPlus  } from "react-icons/fa";
import "./index.css";

export const WhyChoose =()=>{
    return (
        <div className="why-choose-container">
            <div className="why-choose-card">
            <div className="commitment-card">
                <FaSquare className="square"/>
                <p>Our Commitment</p>
            </div>
            <div className="why-choose-heading-card">
                <h1>Why Choose asklelios?</h1>
                <button> 6 BENEFITS
                </button>
            </div>
            <ul>
                <li>
                    <div className="icon">
                        <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702635046/Monotone_add_1_z32xkw.png" alt="" />
                    </div>
                    <div className="content">
                    <h4>Actionable Insights</h4>
                    <p>Asklepios leverages cutting-edge AI technology to offer personalized health assessments.</p>
                    </div>
                    <div className="learn-more-card">
                            <h6>LEARN MORE</h6>
                            <GrLinkNext />
                    </div>
                </li>
                <li>
                    <div className="icon">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702635046/Monotone_add_2_oooo5c.png" alt="" />
                    </div>
                    <div className="content">
                    <h4>Personalized AI Health</h4>
<p>Our platform simplifies the healthcare journey. From booking appointments to accessing your health records,</p>                    </div>
                    <div className="learn-more-card">
                            <h6>LEARN MORE</h6>
                            <GrLinkNext />
                    </div>
                </li>
                <li>
                    <div className="icon">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702635046/Monotone_add_3_scjjbx.png" alt="" />
                    </div>
                    <div className="content">
                    <h4>Streamlined Experience</h4>
<p>We believe in the power of data. Asklepios provides data-driven insights that help you.</p>            </div>
                    <div className="learn-more-card">
                            <h6>LEARN MORE</h6>
                            <GrLinkNext />
                    </div>
                </li>
                <li>
                    <div className="icon">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702635045/Monotone_add_4_bamgmy.png" alt="" />
                    </div>
                    <div className="content">
                    <h4>Seamless Communication Experience</h4>
<p>We bridge the gap between patients and healthcare providers. Our platform enables.</p>
    </div>
                    <div className="learn-more-card">
                            <h6>LEARN MORE</h6>
                            <GrLinkNext />
                    </div>
                </li>
                <li>
                    <div className="icon">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702635423/Monotone_add_krd5xd.png" alt="" />
                    </div>
                    <div className="content">
                    <h4>Trusted by Professionals Experience</h4>
<p>Asklepios is trusted by both healthcare professionals and pharmaceutical companies.</p>    </div>
                    <div className="learn-more-card">
                            <h6>LEARN MORE</h6>
                            <GrLinkNext />
                    </div>
                </li>
                <li>
                    <div className="icon">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702635045/Monotone_add_5_hdqe8h.png" alt="" />
                    </div>
                    <div className="content">
                    <h4>Innovation in Healthcare Experience</h4>
<p>At Asklepios, we're committed to advancing healthcare through innovation.</p>    </div>
                    <div className="learn-more-card">
                            <h6>LEARN MORE</h6>
                            <GrLinkNext />
                    </div>
                </li>
            </ul>
            </div>
        </div>
    )
}