import React, { Component } from 'react';
import Chart from 'chart.js';
import './Barchart.css';

let myBarChart;

class Barchart extends Component {

    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    };

    componentDidUpdate() {
        this.buildChart();
    };

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext('2d');

        if(typeof myBarChart !== 'undefined') {
            myBarChart.destroy();
        };

        myBarChart = new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: this.props.labels,
                datasets: [{
                    label: 'Despesas',
                    backgroundColor: '#FF9626',
                    borderColor: '#FF9626',
                    data: this.props.data,
                }]
            },
            options: {

            },
        });
    }

    render() {
        console.log(this.props.labels);
        console.log(this.props.data);
        return(
            <div className="barchart-container">
                <canvas id="myChart" ref={this.chartRef}/>
            </div>
        )
    }
};

export default Barchart;