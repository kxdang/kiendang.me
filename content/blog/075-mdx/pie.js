import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
    labels: [
        'Luck',
        'Skill',
        'Will',
        'Pleasure',
        'Pain'
    ],
    datasets: [{
        data: [10, 20, 15, 5, 50],
        backgroundColor: [
            '#f4f4f4',
            '#8ec6c5',
            '#6983aa',
            '#8566aa',
            '#d7385e'
        ],
        hoverBackgroundColor: [
            '#FFF',
            '#b8f2f1',
            '#8b9db9',
            '#aa9cbc',
            '#db7d93'
        ]
    }],
}

const option = {
    tooltips: {
        callbacks: {
            label: function (tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                var total = meta.total;
                var currentValue = dataset.data[tooltipItem.index];
                var percentage = parseFloat((currentValue / total * 100).toFixed(1));
                return percentage + '%';
            },
            title: function (tooltipItem, data) {
                return data.labels[tooltipItem[0].index];
            }
        }
    }
}


export default class PieChart extends Component {

    render() {

        return (
            <div>
                <h2 style={{ textAlign: "center" }}>Kien Dang</h2>
                <Pie data={data} options={option} />
            </div>
        );
    }
}
