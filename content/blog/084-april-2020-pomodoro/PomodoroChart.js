import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
        {
            label: 'Pomodoros',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [17, 22, 18, 15, 18, 24, 9]
        },
        {
            label: "Average Pomodoros",
            type: 'line',
            data: [4.25, 5.5, 4.5, 3.75, 4.5, 6, 2.25],
            fill: false,
            borderColor: 'rgba(126, 189, 180, 0.7)',
            backgroundColor: 'rgba(126, 189, 180, 0.7)',
            pointBorderColor: 'rgba(126, 189, 180, 0.2)',
            pointBackgroundColor: '#7ebdb4',
            pointHoverBackgroundColor: '#7ebdb4',
            pointHoverBorderColor: '#7ebdb4',
            // yAxisID: 'y-axis-2'
        },
    ],
};

// const options = {
//     maintainAspectRatio: false,
//     tooltips: {
//         mode: 'label'
//     },
//     elements: {
//         line: {
//             fill: false
//         }
//     },
//     scales: {
//         xAxes: [
//             {
//                 display: true,
//                 gridLines: {
//                     display: false
//                 },
//                 labels: {
//                     show: true
//                 },
//                 labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//             }
//         ],
//         yAxes: [
//             {
//                 type: 'linear',
//                 display: true,
//                 position: 'left',
//                 id: 'y-axis-1',
//                 gridLines: {
//                     display: false
//                 },
//                 labels: {
//                     show: true
//                 }
//             },
//             {
//                 type: 'linear',
//                 display: true,
//                 position: 'right',
//                 id: 'y-axis-2',
//                 gridLines: {
//                     display: false
//                 },
//                 labels: {
//                     show: true
//                 }
//             }
//         ]
//     }
// };


export default function BarChart() {
    return (<div>
        <h2 style={{ textAlign: "center" }}>April Pomodoro Data</h2>
        <Bar
            data={data}
            width={100}
            height={200}
            options={{ maintainAspectRatio: false }}
        />
    </div>)
}

