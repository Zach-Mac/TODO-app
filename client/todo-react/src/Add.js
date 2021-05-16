import React from "react";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/esm/Alert";
import Form from "react-bootstrap/Form";
import ThingTemplate from "./ThingTemplate";
import daysOfWeek from "./consts";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

export default class Add extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			things: props.things,
			newThingName: "",
			newThingDay: 0,
		};
	}

	onSubmit = async () => {
		console.log(this.state);

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: { title: "" },
		};

		await fetch(
			`https://webhooks.mongodb-realm.com/api/client/v2.0/app/todo-ebofj/service/service-HTTP/incoming_webhook/addThing?thingName=${this.state.newThingName}&dayIndex=${this.state.newThingDay}`,
			requestOptions
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch(console.log);
	};

	//TODO: Horizontify

	render() {
		return (
			<div>
				<Alert className="alert-info">Add</Alert>

				<Form>
					<Form.Group className="m-0">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Thing Name"
							value={this.state.newThingName}
							onChange={(e) => this.setState({ newThingName: e.target.value })}
						/>
					</Form.Group>

					<Form.Group className="m-0">
						<Form.Label>Days</Form.Label>
						<Form.Control
							as="select"
							onChange={(e) =>
								this.setState({ newThingDay: e.target.selectedIndex })
							}
						>
							<option>All</option>
							{daysOfWeek.map((day, i) => (
								<option>{day}</option>
							))}
						</Form.Control>
					</Form.Group>

					<Button className="m-2 mb-5" variant="info" onClick={this.onSubmit}>
						submit
					</Button>
				</Form>

				{this.state.things.map((thing, i) => (
					<ThingTemplate name={thing} />
				))}
			</div>
		);
	}
}
