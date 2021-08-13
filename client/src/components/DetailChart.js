import { Line } from 'react-chartjs-2';

const today = new Date();   

const year = today.getFullYear(); // 년도
const month = today.getMonth() + 1;  // 월

const recent6Month = (month) => {
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

const DetailChart = ({recentMonthData}) => {
  const monthList = recent6Month(month);
  console.log(recentMonthData);
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