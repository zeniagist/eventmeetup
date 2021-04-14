import React, { Component } from "react";

class InfoAlert extends Component {
  constructor(props) {
    super(props);
    this.color = 'yellow';
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

export default InfoAlert;