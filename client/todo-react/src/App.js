import React from "react";
import "./App.css";
import Days from "./Days";
import Add from "./Add";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default class App extends React.Component {
	state = {
		loaded: false,
	};

	//TODO: Auto refresh

	rawData = [];
	// rawData = [{"_id":{"$oid":"6097ff57018a26600cbf6237"},"name":"Workout","done":["not","not","not","not","not","not","not"]},{"_id":{"$oid":"6097ff9e018a26600cbf6238"},"name":"Basketball","done":["not","not","not","not","not","not","not"]},{"_id":{"$oid":"6097ffb7018a26600cbf6239"},"name":"Poker","done":["null","not","null","null","null","null","null"]}];
	things = [];
	dailyThings = [];
	allThings = [];
	doneLists = [];

	update() {
		for (var i = 0; i < this.rawData.length; i++) {
			//TODO: fix page insert order

			this.allThings.push(this.rawData[i].name);

			if (this.rawData[i].daily) {
				this.dailyThings.push(this.rawData[i].name);
			} else {
				for (var j = 0; j < 7; j++) {
					if (i === 0) {
						this.things[j] = [];
						this.doneLists[j] = [];
					}
					if (this.rawData[i].done[j] !== "null") {
						this.things[j].push(this.rawData[i].name);
						if (this.rawData[i].done[j] === "not") {
							this.doneLists[j].push(false);
						} else if (this.rawData[i].done[j] === "done")
							this.doneLists[j].push(true);
					}
				}
			}
		}
		this.setState({ loaded: true });
		console.log("daily: ", this.dailyThings);
	}

	componentDidMount() {
		fetch(
			"https://webhooks.mongodb-realm.com/api/client/v2.0/app/todo-ebofj/service/service-HTTP/incoming_webhook/getThings"
		)
			.then((res) => res.json())
			.then((data) => {
				if (this.rawData != data) {
					this.rawData = data;
					this.update();
				}
			})
			.catch(console.log);
	}

	render() {
		if (this.state.loaded) {
			return (
				<div className="App fill-window">
					<Container fluid className="h-100">
						<Row className="row-cols-xxl-8 row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
							<Days things={this.things} doneLists={this.doneLists} />
							<Col>
								<Add things={this.allThings} />
							</Col>
						</Row>
					</Container>
				</div>
			);
		} else {
			return <div>loading...</div>;
		}
	}
}
