import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
// import logo from "../../assets/images/Screenshot (396).png";
class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }
  render() {
    console.log(">>>props: ", this.props);
    return (
      <>
        <div>Hello from Homepage</div>
        {/* <div>
          <img src={logo}></img>
        </div> */}
      </>
    );
  }
}

// export default withRouter(Home);
export default Color(Home);
