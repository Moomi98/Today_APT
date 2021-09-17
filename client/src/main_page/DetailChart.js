import { Line } from 'react-chartjs-2';

const today = new Date();   

const year = today.getFullYear(); // 년도
const month = today.getMonth() + 1;  // 월

const recent6Month = (month) => { // 그래프에 최근 6개월의 리스트를 계산하여 반환해주는 함수
  const monthList = [];

  for(let i = 0 ; i < 6; i++){
    monthList.push(month + "월");
    month -= 1;
    if (month === 0){
      month = (year - 1) + "-" + 12;
    }
  }
  monthList.reverse();
  return monthList;

}

const DetailChart = ({recentMonthData}) => { // 차트를 그리는 함수
  const monthList = recent6Month(month); // 최근 6개월 계산
  const data = {
    labels: monthList,
    datasets: [
      {
        label: '단위 : 억',
        data: recentMonthData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    legend: {
      display:false
    },
  
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return(
    <>
    <div className='header'>
    </div>
    <Line data={data} options={options} />
  </>
  );
  }

export default DetailChart;