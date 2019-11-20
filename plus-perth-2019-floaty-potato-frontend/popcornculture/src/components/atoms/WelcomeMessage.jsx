import React from "react";

class WelcomeMessage extends Component {
  welcomeName() {
    //if user loged in show Welcome {username}
    //else show welcome stranger!
  }

  render() {
    return <p>Welcome {this.welcomeName()}</p>;
  }
}

export default WelcomeMessage;
