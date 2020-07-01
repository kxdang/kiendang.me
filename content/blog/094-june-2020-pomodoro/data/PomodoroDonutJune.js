import React from "react"
import { Doughnut } from "react-chartjs-2"

const data = {
    labels: ["Blog Updates", "React Redux", "VSCode: Deep Dive (FEM Course)"],
    datasets: [
        {
            data: [5, 5, 29, 29],
            backgroundColor: ["#9bdeac", "#01a9b4", "#e7305b", "#706993"],
            hoverBackgroundColor: [
                "#9bdeac",
                "#01a9b4",
                "#e7305b",
                "#706993",
                "#331e38",
                "#0B4F6C",
            ],
        },
    ],
}

const option = {
    tooltips: {
        callbacks: {
            label: function (tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex]
                var meta = dataset._meta[Object.keys(dataset._meta)[0]]
                var total = meta.total
                var currentValue = dataset.data[tooltipItem.index]
                var percentage = parseFloat(((currentValue / total) * 100).toFixed(1))
                return percentage + "%"
            },
            title: function (tooltipItem, data) {
                return data.labels[tooltipItem[0].index]
            },
        },
    },
}

export default function PomodoroDonut() {
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>June Overview</h2>
            <Doughnut data={data} options={option} />
        </div>
    )

}
