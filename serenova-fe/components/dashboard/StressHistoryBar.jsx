import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const IntensityBar = () => {
    const canvasRef = useRef(null);
    const [chartData, setChartData] = useState({ labels: [], data: [] });

    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                const response = await fetch('/api/historycheck'); 
                const taskData = await response.json();

                const labels = taskData.map(task => {
                    const dateParts = new Date(task.date);
                    return `${dateParts.getDate()}/${dateParts.getMonth() + 1}`;
                });

                const data = taskData.map(task => task.points);

                setChartData({ labels, data });
            } catch (error) {
                console.error("Error fetching task data:", error);
            }
        };

        fetchTaskData();
    }, []);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Stress Points',
                    data: chartData.data,
                    backgroundColor: '#00B4BE26',
                    borderColor: '#00B4BE',
                    borderRadius: 5,
                    barThickness: 25,
                    barPercentage: 0.5,
                    categoryPercentage: 0.5,
                    borderSkipped: false,
                }],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false
                        },
                        border: {
                            display: false,
                        },
                        ticks: {
                            font: {
                                size: 10,
                                color: '#161A4147',
                                weight: 'bold',
                            },
                            maxRotation: 0,
                            autoSkip: false,
                        },
                    },
                    y: {
                        display: true,
                        beginAtZero: true,
                        grid: {
                            display: false,
                        },
                        border: {
                            display: false,
                        },
                        ticks: {
                            display: false, 
                            beginAtZero: true,
                        }
                    },
                },
            },
        });

        return () => {
            myChart.destroy();
        };
    }, [chartData]); 

    return <canvas ref={canvasRef} />;
};

export default IntensityBar;
