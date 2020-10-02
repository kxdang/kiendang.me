import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'Pomodoros',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [124, 103, 115, 123, 60, 20, 4, 14, 8, 0, 0, 0]
        }
    ]
};

export default function BarChart() {
    return (<div>
        <h2 style={{ textAlign: "center" }}>Current 2020 Pomodoro Progress</h2>
        <Bar
            data={data}
            width={100}
            height={200}
            options={{
                maintainAspectRatio: false
            }}
        />
    </div>)
}

