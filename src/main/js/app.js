import React from "react";
import ReactDOM from "react-dom";
import {api} from "./client";
import {SampleChart} from "./chart";

class App extends React.Component {
    constructor(props) {
        super(props);
        api.follow('samples')
            .getResource((error, document) => {
                if (error) {
                    console.error(error);
                } else {
                    this.setState((state, props) => {
                        state.samples = this.parseSamples(document);
                        return state;
                    });
                }
            });
    }

    parseSamples(document) {
        console.log(document);
        return document._embedded.samples.map(function (i) {
            return [new Date(i.timestamp), Number(i.value)]
        });
    }

    render() {
        console.log("App.render");
        if (this.state && this.state.samples) {
            return (
                <SampleChart samples={this.state.samples}/>
            )
        } else {
            return (
                <p>Waiting for samples...</p>
            )
        }
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);
