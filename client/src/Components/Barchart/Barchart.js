import React, { Component } from 'react';
import Chart from 'chart.js';
import './Barchart.css';

class Barchart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list,
        };
    };

    chartRef = React.createRef();

    uniqueList = () => {
        const flatList = [...this.state.list.map(element => element.categoria)];
        const uniqueCategories = flatList.filter((value, index) => {
            return flatList.indexOf(value) === index
        });
        console.log(flatList);
        console.log(uniqueCategories);
        return uniqueCategories;
    }

    sumUnique = () => {
        const values = [];
        this.uniqueList().forEach((item) => {
            values.push(this.state.list.filter(element => element.categoria === item)
                .reduce((sum, element) => sum + parseFloat(element.valor), 0)
            )
        })
        return values;
    }

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext('2d');

        console.log(this.uniqueList());
        console.log(this.sumUnique());
        

        new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: this.uniqueList(),
                datasets: [{
                    label: 'Despesas',
                    backgroundColor: '#FF9626',
                    borderColor: '#FF9626',
                    data: this.sumUnique(),
                }]
            },
            option: {

            },
        });
    }

    render() {
        return(
            <div className="barchart-container">
                <canvas id="myChart" ref={this.chartRef}/>
            </div>
        )
    }
    /*const ctx = document.getElementById('barchart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: data
    });
    return(
        <canvas id="barchart"></canvas>
    );*/
};

export default Barchart;