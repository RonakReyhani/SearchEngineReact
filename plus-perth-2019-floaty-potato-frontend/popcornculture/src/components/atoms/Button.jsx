import React, { Component } from "react";
import Button from "react-bootstrap-button-loader";

class Button extends Component {
  render() {
    return (
      <Button
        className="btn btn-default btn-sm"
        onClick={this.props.handleClick}
        loading={this.state.loading}
      >
        {this.props.label}
      </Button>
    );
  }
}

export default Button;
