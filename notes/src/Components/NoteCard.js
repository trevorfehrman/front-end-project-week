import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

class NoteCard extends React.Component {
	render() {
		const note = this.props.note;
		return (
			<div
				draggable
				onDragStart={e => this.props.onDragStart(e, note._id)}
				className="Notes"
				key={note._id}
			>
				<Link key={note._id} to={`/notes/${note._id}`}>
					<h4 className="Notes__title">
						{note.title.length > 20
							? note.title.substring(0, 20) + "..."
							: note.title}
					</h4>
				</Link>
				{note.tags.map(tag => (
					<span className="Notes__tag">{tag}</span>
				))}
				<ReactMarkdown
					className="Notes__text"
					source={
						note.textBody.length > 350
							? note.textBody.substring(0, 350) + "..."
							: note.textBody
					}
				/>
			</div>
		);
	}
}

export default NoteCard;
