import React, { Component } from 'react';
import Chart from 'chart.js';
import './Piechart.css';

let myPieChart;

class Piechart extends Component {

    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    };

    componentDidUpdate() {
        this.buildChart();
    };

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext('2d');

        if(typeof myPieChart !== 'undefined') {
            myPieChart.destroy();
        };

        myPieChart = new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                labels: ['Despesa', 'Receita'],
                datasets: [{
                    label: ['Despesa', 'Receita'],
                    backgroundColor: ['#7ECFA2', '#F127F8'],
                    borderColor: ['#7ECFA2', '#F127F8'],
                    data: this.sumUnique(),
                }]
            },
            options: {
                title: {
                    display: true,
                    fontColor: '#000',
                    text: 'Receitas x despesas',
                },
                legend: {
                    display: true,
                },
            },
        });
    }
    
    sumUnique = () => {
          const values = [];
          const elements = ['Despesa', 'Receita']
          elements.forEach((item) => {
              values.push(this.props.list.filter(element => element.tipo === item)
                  .reduce((sum, element) => sum + parseFloat(element.valor), 0)
              )
          })
          return values;
    }

    render() {
        return(
            <div className="piechart-container">
                <canvas id="myChart" ref={this.chartRef}/>
            </div>
        )
    }
};

export default Piechart;