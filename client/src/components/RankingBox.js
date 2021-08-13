import './ranking_box.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import DetailBox from './DetailBox';
import * as SampleData from './SampleData';


export const RankingBoxInfo = ({propsData}) =>{  // 순위 정보 박스에 담을 내용을 렌더링

    const AptRank = (props) => { /* 순위 숫자를 렌더링하는 함수 */
        const rank = props.rank; 
        return (rank === 1 ?  /* 1위의 순위 색은 황금 색으로 변경하여 리턴 */
        <p className="apt_rank" style={{color: 'gold', fontSize: '35px'}}>{rank}</p>
         : <p className="apt_rank" color='black'>{rank}</p>); 
    }

    const [detailState, setDetailState] = useState(false); // 상세 정보창이 열려 있는지의 여부를 hook을 통해 확인
    const onClick = (e) =>{ // 상세 정보 버튼이 눌렸을 때 호출
        if(detailState === false){ // hook이 false이면 true 로 전환 후 검정색으로 변경
            setDetailState(true);
            e.target.style.color = 'black';
        }
        else{ // hook이 true이면 false로 전환 후 원래 색으로 변경
            setDetailState(false);
            e.target.style.color = "rgb(200, 200, 200)";
        }
    }

    return(
        <div> 
            <div className="apt_info">
                <div className="apt_info_leftSide">
                    <AptRank rank={propsData.rank}></AptRank>
                    <p className="apt_name">{propsData.apt_name}</p>
                </div>
                <div className="apt_info_rightSide">
                    <p className="apt_price">{propsData.apt_price}</p>
                    <button type="button" className="detailBtn" onClick={onClick}>
                        <FontAwesomeIcon className="detailBtn_icon" icon={faChevronDown} color="rgb(200, 200, 200)"></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            {detailState ? <DetailBox details={propsData.details}/> : null}
        </div>
    );
}

export default function RankingBox ()  {
    
    const aptInfo = SampleData.SampleData();

  return (
    <div className="box">
        {aptInfo.map((item) => {return (<RankingBoxInfo key={item.rank} propsData={item}></RankingBoxInfo>)})}
    </div>
  );

};

