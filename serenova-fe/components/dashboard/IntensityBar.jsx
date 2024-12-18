import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const IntensityBar = () => {
    const canvasRef = useRef(null);
    const [chartData, setChartData] = useState({ labels: [], data: [] });

    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                const response = await fetch('/api/timetask'); 
                const taskData = await response.json();

                const labels = taskData.map(task => `${task.date.day}/${task.date.month}`);
                const data = taskData.map(task => {
                    const durationParts = task.duration.split(' ');
                    const durationValue = parseFloat(durationParts[0]);
                    const durationUnit = durationParts[1];

                    return durationUnit === 'hour' ? durationValue : durationValue / 60; 
                });

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
                    label: 'Duration (hours)',
                    data: chartData.data,
                    backgroundColor: '#00B4BE26',
                    borderColor: '#00B4BE26',
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
                        }
                    },
                },
            },
        });

        return () => {
            myChart.destroy();
        };
    }, [chartData]); // Redraw chart when chartData changes

    return <canvas ref={canvasRef} />;
};

export default IntensityBar;
