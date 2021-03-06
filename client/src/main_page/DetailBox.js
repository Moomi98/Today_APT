import './DetailBox_style.css';
import DetailChart from './DetailChart';

export default function DetailBox({details}){ // 상세 정보 창의 구성 정보

    return(
        <div className="detailBox">
            <div className="detailBox_info">
                <div className="detailBox_leftSide">
                    <p className="detailBox_address">주소 : {details.address} {details.roadAddress}</p>
                    <p className="detailBox_yearMonthDay">일시 : {details.year}년{details.month}월{details.day}일</p>
                </div>
                <div className="detailBox_rightSide">
                    <p className="detailBox_area">면적 : {details.area} m³</p>
                    <p className="detailBox_floor">층 : {details.floor}</p>
                </div>
            </div>
            <div className="detailBox_chart">
                {<DetailChart recentMonthData={details.recentMonth}/>}
            </div>
        </div>
    );
}