import React from 'react';
import Thing from './Thing';
import Alert from 'react-bootstrap/Alert'

export default class Day extends React.Component {

    constructor(props){
        super(props);
        console.log("day.js props.things ", props.things)
        this.state= {
            things: props.things,
            doneList: props.doneList
        };
    }

    render() {



        this.state.things.map((thing, i) => 
            console.log(thing,this.state.doneList[i])
        )

        return (
            <div> 
                <Alert>{this.props.day}</Alert>

                {this.state.things.map((thing, i) => 
                    <Thing name={thing} done={this.state.doneList[i]}/>
                )}
            </div>
        )
    }
}