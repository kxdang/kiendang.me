import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ["May '19", "June '19", "July '19", "August '19", "September '19", "October '19", "November '19", "December '19", "January '20", "February '20", "March '20", "April '20", "May '20"],
    datasets: [
        {
            label: 'Pomodoros',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [92, 90, 39, 42, 65, 56, 92, 90, 124, 103, 115, 123, 60]
        }
    ]
};

export default function BarChart() {
    return (<div>
        <h2 style={{ textAlign: "center" }}>Pomodoros</h2>
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

