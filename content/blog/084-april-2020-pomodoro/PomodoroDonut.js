import React from "react"
import { Doughnut } from "react-chartjs-2"

const data = {
    labels: ["Blog", "Fullstack App", "Gatsby Projects", "Algorithms and Data Structures", "Tasks", "Udemy: The Modern React Bootcamp"],
    datasets: [
        {
            data: [5, 23, 7, 5, 8, 75],
            backgroundColor: ["#F4E8C1", "#a0c1b9", "#70a0af", "#706993", "#331e38", "#0B4F6C"],
            hoverBackgroundColor: [
                "#F4E8C1",
                "#a0c1b9",
                "#70a0af",
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
            <h2 style={{ textAlign: "center" }}>April Overview</h2>
            <Doughnut data={data} options={option} />
        </div>
    )

}
