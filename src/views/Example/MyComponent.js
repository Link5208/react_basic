import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "",
        age: 12,
    };

    handleChangeName = (event) => {
        console.log(
            event.target.value,
            "event target: ",
            event.target,
            "event object:",
            event
        );
        this.setState({
            name: event.target.value,
        });
    };

    handleClickButton = () => {
        console.log("click the button");
        alert("click me");
    };

    render() {
        console.log(">>>>> call render: ", this.state);
        return (
            <>
                <div className="first">
                    {console.log("My name is :", this.state.name)}
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleChangeName(event)}
                    />
                    My name is {this.state.name}
                </div>
                <div className="second">My age is {this.state.age}</div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>
                        Click me
                    </button>
                </div>
            </>
        );
    }
}

export default MyComponent;
