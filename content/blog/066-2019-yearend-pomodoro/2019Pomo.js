import React, { Component } from 'react';
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
            data: [78, 35, 11, 6, 92, 90, 39, 42, 65, 56, 92, 90]
        }
    ]
};

export default class BarChart extends Component {
    render() {

        return (<div>
            <h2 style={{ textAlign: "center" }}>Year Summary</h2>
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
}
