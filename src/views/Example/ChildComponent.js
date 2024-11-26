import React from "react";

class ChildComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    };

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    };

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(">>>> check data: ", this.state);
    };

    render() {
        console.log(">>>>> call render: ", this.state);
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age, address, arrJobs } = this.props;
        let a = "";
        return (
            <>
                <div className="job-lists">
                    {
                        (a = arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            );
                        }))
                    }
                    {console.log(">>>> check map arr: ", a)}
                </div>
            </>
        );
    }
}

export default ChildComponent;
