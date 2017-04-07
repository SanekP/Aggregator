/**
 * Created by Sanek on 4/7/2017.
 */
import React from "react";

class GoogleChart extends React.Component {
    constructor(props) {
        super(props);
        if (!GoogleChart.libraryLoaded) {
            this.importChartLibrary();
        }
    }

    importChartLibrary() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.onload = () => {
            google.charts.load('current', {'packages': ['line']});
            google.charts.setOnLoadCallback(() => {
                GoogleChart.libraryLoaded = true;
                this.forceUpdate();
            });
        };
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(script);
    }

    render() {
        console.log("GoogleChart.render");
        return (
            <div id={this.props.id}/>
        )
    }

    componentDidMount() {
        if (GoogleChart.libraryLoaded) {
            this.drawChart();
        }
    }

    componentDidUpdate() {
        if (GoogleChart.libraryLoaded) {
            this.drawChart();
        }
    }
}

export class SampleChart extends GoogleChart {
    drawChart() {
        let data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Value');
        data.addRows(this.props.samples);

        this.chart = new google.charts.Line(document.getElementById(this.props.id));
        var options = {
            chart: {
                title: 'Samples',
                subtitle: 'in time'
            },
            width: 900,
            height: 500
        };
        this.chart.draw(data, options);
    }
}

GoogleChart.libraryLoaded = false;
