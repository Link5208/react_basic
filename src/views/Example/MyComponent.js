import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: "abcjob1", title: "dev", salary: "500" },
            { id: "abcjob2", title: "tester", salary: "400" },
            { id: "abcjob3", title: "PM", salary: "1000" },
        ],
    };

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });
        console.log("check job from parent: ", job);
    };

    render() {
        console.log(">>>>> call render: ", this.state);
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent arrJobs={this.state.arrJobs} />
            </>
        );
    }
}

export default MyComponent;
