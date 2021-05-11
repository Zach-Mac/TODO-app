import React from "react";
import Day from "./Day";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class Days extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			things: props.things,
			doneLists: props.doneLists,
		};
	}

	daysOfWeek = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	render() {
		return (
			<>
				{this.daysOfWeek.map((day, i) => (
					<Col>
						<Day
							day={day}
							dayNum={i}
							things={this.state.things[i]}
							doneList={this.state.doneLists[i]}
						/>
					</Col>
				))}
			</>
		);
	}
}
