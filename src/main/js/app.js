const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
    render() {
        return (
            <p>Hello</p>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);
