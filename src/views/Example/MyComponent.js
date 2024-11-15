import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Long',
        age: 12
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <div className='first'>
                    {console.log('My name is :', this.state.name)}
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleChangeName(event)}
                    />
                    My name is {this.state.name}
                </div>
                <div className='second'>
                    My age is {this.state.age}
                </div>
            </>



        )

    }
}

export default MyComponent;
