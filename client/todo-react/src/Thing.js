import React from 'react';
//import './Thing.css'
import Button from 'react-bootstrap/Button';

export default class Thing extends React.Component {

    constructor(props){
        super(props);
        this.state = {done: props.done};
    }

    finish = () => {
        this.setState({
            done: !this.state.done
        })
    }

    render() {
        const bCol = this.state.done ? "m-1 shadow-none btn-secondary" : "m-1 shadow-none btn-primary";

        return (
            <div> 
                <Button className={bCol} type="submit" onClick = {this.finish} aria-disabled="true"> 
                    {this.state.done ? <strike> {this.props.name} </strike> : this.props.name} 
                </Button>
            </div>
        )
    }
}