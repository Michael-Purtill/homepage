import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="clock">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <p>Hello Michael Purtill</p>
        <div id="pics">
          <a href="https://www.facebook.com/?sk=h_chr">
            <img
              src="https://dumielauxepices.net/sites/default/files/logo-clipart-facebook-668388-4339680.gif"
              alt="facebook"
            />
          </a>
          <a href="https://www.youtube.com/">
            <img
              id="transparent"
              src="https://www.seeklogo.net/wp-content/uploads/2016/11/youtube-logo-preview-1.png"
              alt="youtube"
            />
          </a>
          <a href="http://twitter.com">
            <img
              src="https://www.seeklogo.net/wp-content/uploads/2014/12/twitter-logo-vector-download.jpg"
              alt="twitter"
            />
          </a>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
