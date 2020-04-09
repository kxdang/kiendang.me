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
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]

};

export default class PieChart extends Component {

    render() {

        return (
            <div>
                <h2 style={{ textAlign: "center" }}>Kien Dang</h2>
                <Pie data={data} />
            </div>
        );
    }
}
