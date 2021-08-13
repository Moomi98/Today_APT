import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding} from "@fortawesome/free-regular-svg-icons";
import './topbar_style.css';

export default function TopBar() {

        return(
            <div className="topbar">
                <div className="topbar_name">
                    <FontAwesomeIcon className="topbar_logo" icon={faBuilding}></FontAwesomeIcon>
                    <h6 className="topbar_name_today">오늘의</h6>
                    <h6 className="topbar_name_houseprice">집값</h6>
                </div>
            </div>
        );
    
}

