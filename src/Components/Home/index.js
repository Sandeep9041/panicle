import "./index.css";
import { LuDownload } from "react-icons/lu";
import { BsShieldFillPlus } from "react-icons/bs";
import { News } from "../News";
import { App } from "../App";
import { Footer } from "../Footer";
import { WhyChoose } from "../Whychoose";
import { Features } from "../Features";
import { Testimonial } from "../Testimonal";
import { Services } from "../Services";
import { FaSquare } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { Navbar } from "../Navbar";

export const Home = () => (
    <div className="main">
        <div className="home-bg">
        <Navbar />
        <div className="home">
            <div className="home-content">
                <h1 className="main-heading">
                Personalized AI Wellness & Healthcare
                </h1>
                <p>
                asklepios provides personalized healthcare AI analytics to help you empower your health.
                <p>
                Trusted by over 400,000 users and counting.
                </p>
                </p>
                <button>
                    Download App <LuDownload />
                </button>
            </div>
        <div className="home-image">
            <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702821675/iPhone_Space_Silver_Right_1_cfxyc3.png" alt="" className="phone"/>
        </div>
        </div>
        </div>
        <div className="dark-area">
            <div className="dark-area-content">
                        <div className="personalized">
                            <div className="personalized-icon">
                                <BsShieldFillPlus />
                            </div>
                            <h1 className="lg">Personalized</h1>
                        </div>
                    <ul>
                    <h1>Nutrition</h1>
                    <FaSquare className="dark-area-square lg"/>
                    <h1 className="lg">Mindfulness</h1>
                    <FaSquare  className="dark-area-square"/>
                    <h1 className="lg">Wellness</h1>
                </ul>               
            </div>  
            <div className="dark-area-content blue">
                <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702702642/Logo_Mark_1_bkhmop.png" alt="" />
                <h1>Healthcare</h1>
                <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702702642/Logo_Mark_1_bkhmop.png" alt="" />
            </div>  
            <div className="dark-area-content">
                <div className="ai">
                    <h1 className="lg">Artifical Intelligent</h1>
                    <h1 className="sm">AI</h1>
                </div>
                <div className="mi">
                    <h1 className="lg">Machine Learning</h1>
                    <h1 className="sm">ML</h1>
                </div>
            </div>
            <div className="dark-area-content sm-content">
            <h1 className="heading">We create better health experience through AI/ML technology.</h1>    
            <div className="text-card">
                <p className="text">We leverage AI and machine learning to create an accessible health experience for everyone on planet earth.</p>
            <button>Learn More<GrLinkNext/></button>
            </div>
            </div>        
        </div> 
        <Testimonial />
        <Services />
        <Features />
        <WhyChoose />
        <News /> 
        <App />
        <Footer />
    </div>
)