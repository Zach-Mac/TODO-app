import React from "react";
import Day from './Day';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default class Days extends React.Component {

    state = {
        things: [],
        doneLists: []
    }

    componentDidMount() {
        console.log("quite shitting on my dick pls")
        // var rawData = [];
        let rawData = [{"_id":{"$oid":"6097ff57018a26600cbf6237"},"name":"Workout","done":["not","not","not","not","not","not","not"]},{"_id":{"$oid":"6097ff9e018a26600cbf6238"},"name":"Basketball","done":["not","not","not","not","not","not","not"]},{"_id":{"$oid":"6097ffb7018a26600cbf6239"},"name":"Poker","done":["null","not","null","null","null","null","null"]}];
        let tempDone = [];
        let tempThings = [];

        // await fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/todo-ebofj/service/service-HTTP/incoming_webhook/getThings')
        // .then(res => res.json())
        // .then((data) => {
        //     rawData = data
        //     console.log(data)
        // })
        // .catch(console.log)

        for (var i=0; i<rawData.length; i++){
            for (var j=0; j<7; j++){
                console.log('cringngnngngngngngngngngne ', rawData[i])
                if (i==0) {
                    tempThings[j] = [];
                    tempDone[j] = [];
                }
                if (rawData[i].done[j] != 'null'){
                    console.log('dabnaeasdhhfkashjdflkhasjdfkl;hasjdfklhasfk')
                    tempThings[j].push(rawData[i].name)
                    if (rawData[i].done[j] == 'not') tempDone[j].push(false);
                    else if (rawData[i].done[j] == 'done') tempDone[j].push(true);
                }
            }
        }

        this.setState({things: tempThings, doneLists: tempDone})
    }

    daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    //allDays = ["Workout", "Basketball", "Guitar", "EarTrain", "Spanish", "Voice", "Chess", "Read"]

    // extraThings = [ [],             //Monday
    //                 ["Poker"],      //Tuesday
    //                 [],             //Wednesday
    //                 ["Jongle"],     //Thursday
    //                 [],             //Friday
    //                 ["Stretch"],    //Saturday
    //                 ["BJ"]]         //Sunday
    
    // <Day day={day} things={this.state.things[i]} />

    render() {

        return (
            <div className='days'>
                <Container fluid>
                    <Row>
                        {this.daysOfWeek.map((day, i) => 
                            <Col>
                                <Day day={day} things={this.state.things[i]} doneList={this.state.doneLists[i]} />
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        )
    }
}