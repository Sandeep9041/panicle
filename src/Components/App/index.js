import { FaSquare } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import "./index.css";

export const App = () => (
    <div className="app-bg">
        <div className="app-img-card">
            <img src ="https://res.cloudinary.com/dxsppjwqc/image/upload/v1702624464/Col_fg7kol.png" alt=""
            />
        </div>
        <div className="app-content-card" >
            <div className="app-content">
            <div className="download-card">
                <FaSquare className="download-square"/>
                <h5>Download The App</h5>
            </div>
            <h1>Personalize Your Health With Asklepios, Now!</h1>
            <div>
                <button>
                    Google Play <FiDownload className="download-icon"/>
                </button>
                <button>
                    Apple Store <FiDownload className="download-icon"/>
                </button>
            </div>
            </div>
        </div>
    </div>
)