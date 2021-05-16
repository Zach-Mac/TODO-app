import React from "react";
import Button from "react-bootstrap/Button";
import Draggable from "react-draggable";

export default class Thing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: props.done,
		};
	}

	//TODO: Thing images

	finish = async () => {
		this.setState({
			done: !this.state.done,
		});

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			// query: { thingName: "Workout", dayIndex: "3", doneVal: "done" },
			body: { title: "" },
		};

		const doneVal = !this.state.done ? "done" : "not";

		await fetch(
			`https://webhooks.mongodb-realm.com/api/client/v2.0/app/todo-ebofj/service/service-HTTP/incoming_webhook/setDone?thingName=${this.props.name}&dayIndex=${this.props.dayNum}&doneVal=${doneVal}`,
			requestOptions
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch(console.log);
	};

	//https://webhooks.mongodb-realm.com/api/client/v2.0/app/todo-ebofj/service/service-HTTP/incoming_webhook/setDone?thingName=Poker&dayIndex=4&doneVal=null

	//TODO: fix darkness after click

	render() {
		const bCol = this.state.done
			? "m-1 shadow-none btn-secondary"
			: "m-1 shadow-none btn-primary";

		return (
			<Button
				className={bCol}
				type="submit"
				onClick={this.finish}
				aria-disabled="true"
			>
				{this.state.done ? (
					<strike> {this.props.name} </strike>
				) : (
					this.props.name
				)}
			</Button>
		);
	}
}
