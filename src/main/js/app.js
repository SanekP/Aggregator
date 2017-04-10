import React from "react";
import ReactDOM from "react-dom";
import {api} from "./client";
import {SampleChart} from "./chart";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.samplesRequest = api.newRequest()
            .follow('samples');
        this.state = {
            size: 10
        };
        this.onChangeSize = this.onChangeSize.bind(this);
    }

    loadSamples() {
        this.samplesRequest.withTemplateParameters({
            sort: "timestamp,desc",
            size: this.state.size
        })
            .getResource((error, document) => {
                console.log(document);
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
        return document._embedded.samples.map(function (i) {
            return [new Date(i.timestamp), Number(i.value)]
        });
    }

    onChangeSize(event) {
        let value = event.target.value;
        this.setState((state, props) => {
            state.samples = null;
            state.size = value;
            return state;
        });
    }

    render() {
        console.log("App.render");
        if (this.state.samples) {
            return (
                <div>
                    <SampleChart samples={this.state.samples}/>
                    <input type="text" value={this.state.size} onChange={this.onChangeSize}/>
                </div>
            )
        } else {
            this.loadSamples();
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
