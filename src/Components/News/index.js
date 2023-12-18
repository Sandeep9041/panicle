import { FaSquare , FaPlus  } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import "./index.css";

export const News =()=> {
    return (
        <div className="news-container">
            <div className="resources-card">
                <FaSquare className="square"/>
                <p>Resources</p>
            </div>
            <div className="heading-card">
                <h1>Latest News</h1>
                <button>View All News
                    <FaPlus  className="btn-plus"/>
                </button>
            </div>
            <ul>
                <li>
                    <div className="li-card">
                        <div>
                            <p>WELLNESS</p>
                            <p>AI</p>
                            <p>HEALTHCARE</p>
                        </div>
                        <img 
                        src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702621996/Monotone_add_gul8hi.png"
                        alt=""
                        />
                    </div>
                    <div className="li-date">
                        <p>Jun 25, 2025</p>
                        <p className="dot"></p>
                        <p>By Akari Mizunashi</p>
                    </div>
                    <h3>Unlocking the Power of Personalized AI Healthcare</h3>
                    <div className="right-arrow-card">
                        <GoArrowUpRight/>
                    </div>
                </li>
                <li>
                    <div className="li-card">
                        <div>
                            <p>DISEASE</p>
                            <p>CARE</p>
                            <p>PATIENT</p>
                        </div>
                        <img 
                        src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702621996/Monotone_add_gul8hi.png"
                        alt=""
                        />
                    </div>
                    <div className="li-date">
                        <p>Jun 25, 2025</p>
                        <p className="dot"></p>
                        <p>By Akari Mizunashi</p>
                    </div>
                    <h3>The Future of Health: AI-Driven Patient Care</h3>
                    <div className="right-arrow-card">
                        <GoArrowUpRight/>
                    </div>
                </li>
                <li>
                    <div className="li-card">
                        <div>
                            <p>TUTORIAL</p>
                            <p>GUIDE</p>
                            <p>HEALTHCARE</p>
                        </div>
                        <img 
                        src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702621996/Monotone_add_gul8hi.png"
                        alt=""
                        />
                    </div>
                    <div className="li-date">
                        <p>Jun 25, 2025</p>
                        <p className="dot"></p>
                        <p>By Akari Mizunashi</p>
                    </div>
                    <h3>Navigating Healthcare: Your Guide to Asklepios</h3>
                    <div className="right-arrow-card">
                        <GoArrowUpRight/>
                    </div>
                </li>
                <li>
                    <div className="li-card">
                        <div>
                            <p>WELLNESS</p>
                            <p>AI</p>
                            <p>HEALTHCARE</p>
                        </div>
                        <img 
                        src="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702621996/Monotone_add_gul8hi.png"
                        alt=""
                        />
                    </div>
                    <div className="li-date">
                        <p>Jun 25, 2025</p>
                        <p className="dot"></p>
                        <p>By Akari Mizunashi</p>
                    </div>
                    <h3>Unlocking the Power of Personalized AI Healthcare</h3>
                    <div className="right-arrow-card">
                        <GoArrowUpRight/>
                    </div>
                </li>
            </ul>
        </div>
    )
}