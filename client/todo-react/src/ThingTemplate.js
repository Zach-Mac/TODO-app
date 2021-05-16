import React from "react";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/esm/Alert";
import Draggable from "react-draggable";

export default class ThingTemplate extends React.Component {
	editName = async () => {
		console.log("nae");
	};

	changeDay = async () => {
		console.log("dab");
	};

	deleteItem = async () => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: { title: "" },
		};

		await fetch(
			`https://webhooks.mongodb-realm.com/api/client/v2.0/app/todo-ebofj/service/service-HTTP/incoming_webhook/deleteThing?thingName=${this.props.name}`,
			requestOptions
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch(console.log);
	};

	//TODO: Smaller buttons

	render() {
		return (
			<Button className="m-1" variant="info" size="sm">
				<Dropdown className="p-0 m-0">
					<Dropdown.Toggle variant="info" id="dropdown-basic">
						{this.props.name}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item onClick={this.editName}>Edit Name</Dropdown.Item>
						<Dropdown.Item onClick={this.changeDay}>Change Day</Dropdown.Item>
						<Dropdown.Item onClick={this.deleteItem}>Delete</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Button>
		);
	}
}
