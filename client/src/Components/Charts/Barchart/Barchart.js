import React, { Component } from 'react';
import Chart from 'chart.js';
import './Barchart.css';

let myBarChart;

const removeAccent = word => word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

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
                labels: this.uniqueList(),
                datasets: [{
                    label: 'Despesas',
                    backgroundColor: '#64B5F6',
                    borderColor: '#64B5F6',
                    data: this.sumUnique(),
                }]
            },
            options: {
                title: {
                    display: true,
                    fontColor: '#000',
                    text: 'Distribuição das despesas',
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    displayColors: false,
                    titleFontSize: 16,
                    bodyFontSize: 14,
                    xPadding: 10,
                    yPadding: 10,
                    callbacks: {
                        label: (tooltipItem, data) => {
                            return `R$ ${tooltipItem.value}`
                        }
                    },
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true,
                            suggestedMin: 0,
                            suggestedMax: `${Math.max(...this.sumUnique()) * 1.1}`,
                        },
                    }],
                },
            },
        });
    }

    uniqueList = () => { // Função para pegar apenas os elementos únicos das categorias da lista
        const expenseList = [...this.props.list.filter(element => {
          return element.tipo === 'Despesa'
        })];
        const flatList = [...expenseList.map(element => element.categoria)];
        const uniqueCategories = flatList.filter((value, index) => {
            return flatList.indexOf(value) === index
        });
        const orderedElements = uniqueCategories.sort((a,b) => {
          if(removeAccent(a.toLowerCase()) < removeAccent(b.toLowerCase())) {
            return -1;
          }
          if(removeAccent(a.toLowerCase()) > removeAccent(b.toLowerCase())) {
            return 1;
          }
          return 0;
        });
        return orderedElements;
    }
    
    sumUnique = () => {
          const values = [];
          this.uniqueList().forEach((item) => {
              values.push(this.props.list.filter(element => element.categoria === item && element.tipo === 'Despesa')
                  .reduce((sum, element) => sum + parseFloat(element.valor), 0)
              )
          })
          return values;
    }

    render() {
        return(
            <div className="barchart-container">
                <canvas id="myChart" ref={this.chartRef}/>
            </div>
        )
    }
};

export default Barchart;