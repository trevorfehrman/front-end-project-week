import React from "react";

import Form from "./Form";

class EditNote extends React.Component {
	state = {
		title: "",
		textBody: "",
		tags: "",
	};

	componentDidMount() {
		this.setState({
			title: this.props.note.title,
			textBody: this.props.note.textBody,
			tags: this.props.note.tags,
		});
	}

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		let tags = [];
		if (typeof this.state.tags == "object") {
			tags = this.state.tags;
		} else if (this.state.tags) {
			tags = this.state.tags.split(",");
		}

		this.props.onSubmit({
			title: this.state.title,
			textBody: this.state.textBody,
			tags: tags,
		});
	};

	render() {
		return (
			<div className="AddNoteWrapper">
				<h3 className="AddNote__header">Edit Note:</h3>
				<Form
					textBody={this.state.textBody}
					tags={this.state.tags}
					title={this.state.title}
					onSubmit={this.onSubmit}
					handleInputChange={this.handleInputChange}
					label="Update"
				/>
			</div>
		);
	}
}

export default EditNote;
