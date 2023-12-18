import { IoIosCheckbox } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import "./index.css";

export const Features =()=>{
    return (
        <div className="features-container">
            <div className="features-card">
            <h1>Our Core Features</h1>
            <div className="features-block">
                    <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702638462/Frame_1_n0j0xs.png" alt="" />
                <div className="content">
                    <p className="feature">FEATURE 1</p>
                    <h2>
                        AI Health Analytics
                    </h2>
                    <p>We provide multiple AI Health analytics system for to ensure patient health is our priority. Here’s a few health metrics that we measure.</p>
                    <div>
                        <div className="checker">
                            <IoIosCheckbox/>
                            <p>SYMPTOM CHEAKER</p>
                        </div>
                        <div  className="checker">
                            <IoIosCheckbox/>
                            <p>HEALTH RISK ASSESMENT</p>
                        </div>
                        <div  className="checker">
                            <IoIosCheckbox/>
                            <p>CHRONIC CONDITION MONITORING</p>
                        </div>
                    </div>
                    <button>
                        Learn More <FaPlus />
                    </button>
                </div>
            </div>
            <div className="features-block">
                <div className="content">
                    <p className="feature">FEATURE 2</p>
                    <h2>
                        Wellness AI Chatbot
                    </h2>
                    <p>Say goodbye to healthcare 2.0 because we have wellness AI Chatbot technology at your fingertips. Experience it today, for free.</p>
                    <div style={{display:"flex"}}>
                        <div  className="speed">
                            <h2>
                                0.145
                            </h2>
                            <p >Response Speed</p>
                        </div>
                        <div className="speed">
                            <h2>
                                50M+
                            </h2>
                            <p>LLM Datas</p>
                        </div>
                    </div>
                    <button>
                        Learn More <FaPlus />
                    </button>
                </div>
                <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702638461/Frame_2_py82l5.png" alt="" />
            </div>
            <div className="features-block">
                <img src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702638461/Frame_3_fnsici.png"  alt="" />
                <div className="content">
                    <p className="feature">FEATURE 3</p>
                    <h2>Predictive Health & Anomaly Detection</h2>
                    <p>Our anomaly detection technology detects any abnormalities from your health, backed with asklepios AI technology.</p>                    
                    <div>
                        <div className="accuracy" style={{display:"flex",justifyContent:"space-between"}}>
                            <h6>Accuracy</h6>
                             <h6>99.487%</h6>   
                        </div>
                        <progress id="file" value="91.487" max="100"> 99.487% </progress>
                   
                    </div>
                   <button>
                        Learn More <FaPlus />
                    </button>
                </div>
            </div>
            </div>

        </div>
    )
}