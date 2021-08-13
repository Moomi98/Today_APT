import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import './searchBar_style.css';
import './ranking_box.css';
import './DetailBox_style.css';
import * as SampleData from './SampleData';
import { RankingBoxInfo } from "./RankingBox";



export default function SearchBar(){

    const [text, setText] = useState(""); // 검색 정보를 저장하는 hook
    const [find, setFind] = useState(false); // 검색 성공 여부를 저장하는 hook
    const[findAptInfo, setFindAptInfo] = useState({});

    const data = SampleData.SampleData();

    const search = (e) =>{ // 검색 버튼을 누를 시 text에 적힌 글자를 포함한 apt_name 이 있는지 검색
        e.preventDefault(); // 기본 실행 동작(새로고침) 방지

        for(let i in data){ // 데이터에 검색 내용을 포함한 정보가 있는지 확인
            if(data[i] && data[i].apt_name.includes(text)){ // data[i]가 존재하고 아파트 이름이 검색 내용을 포함하는지 확인
                setFind(true);
                setFindAptInfo(data[i]);
                console.log(findAptInfo);
                return;
            }
        }

        setFind(false);
    }
    
    const handleChange = (e) =>{ // text에 값이 입력 될 때 마다 호출
        setText(e.target.value); // 현재 text에 적힌 값을 hook을 이용하여 최신화
    }

    return(
        <div>
            <form className="searchBar">
                <input type="text" className="searchBar_writeBox" placeholder="검색..." onChange={handleChange}></input>
                <button onClick={search} className="searchBar_icon">
                    <FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon>
                </button>
            </form>
            {find ? <RankingBoxInfo propsData={findAptInfo}/> : null}
        </div>
    );
}