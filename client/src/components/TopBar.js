import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding} from "@fortawesome/free-regular-svg-icons";
import { useMediaQuery} from "react-responsive";
import './topbar_style.css';

const TopBar = () =>{
    const isMobileScreen = useMediaQuery({ minWidth: 768 });
    const show = isMobileScreen ? <p>큰거</p> : <p>작은거</p>;
    
    return(
        <div className="topbar">
            <div className="topbar_name">
                <FontAwesomeIcon className="topbar_logo" icon={faBuilding}></FontAwesomeIcon>
                <h6 className="topbar_name_today">오늘의</h6>
                <h6 className="topbar_name_houseprice">집값</h6>
            </div>
            <div>
                {show}
            </div>
        </div>
    );
    
}

export default TopBar;
