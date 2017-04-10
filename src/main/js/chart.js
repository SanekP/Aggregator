/**
 * Created by Sanek on 4/7/2017.
 */
import React from "react";
import {Chart} from "react-google-charts";

export class SampleChart extends React.Component {
    render() {
        return (
            <Chart chartType="Line"
                   columns={[
                       {
                           type: 'date',
                           label: 'Date',
                       },
                       {
                           type: 'number',
                           label: 'Value',
                       },
                   ]}
                   rows={this.props.samples}
                   width="100%"
                   options={{
                       title: "Samples",
                       subtitle: 'in time'
                   }}
            />
        );
    }
}
