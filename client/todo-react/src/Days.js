import React from "react";
import Day from './Day';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default class Days extends React.Component {

    daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    allDays = ["Workout", "Basketball", "Guitar", "EarTrain", "Spanish", "Voice", "Chess", "Read"]

    extraThings = [ [],             //Monday
                    ["Poker"],      //Tuesday
                    [],             //Wednesday
                    ["Jongle"],     //Thursday
                    [],             //Friday
                    ["Stretch"],    //Saturday
                    ["BJ"]]         //Sunday

    render() {
        return (
            <div className='days'>
                <Container fluid>
                    <Row>
                        {this.daysOfWeek.map((day, i) => 
                            <Col>
                                <Day day={day} things={[...this.allDays, ...this.extraThings[i]]} />
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        )
    }
}