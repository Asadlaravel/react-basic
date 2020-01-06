import React from "react";

import ReactDOM from "react-dom";

class Formset extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <input type="submit" value="Go Ahead" />
      </form>
    );
  }
}
ReactDOM.render(<Formset />, document.getElementById("root"));
