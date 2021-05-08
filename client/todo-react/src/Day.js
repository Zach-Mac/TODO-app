import React from 'react';
import Thing from './Thing';
import Alert from 'react-bootstrap/Alert'

export default class Day extends React.Component {

    render() {
        return (
            <div> 
                <Alert>{this.props.day}</Alert>

                {this.props.things.map((thing, i) => 
                    <Thing name={thing}/>
                )}
            </div>
        )
    }
}