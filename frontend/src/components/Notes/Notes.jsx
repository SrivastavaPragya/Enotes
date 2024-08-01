import React, { useState, useEffect } from "react";
import "../../styles/Notes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [group, setGroup] = useState(null);
  const [noteText, setNoteText] = useState("");
  const { groupId } = useParams();

  // Fetch group details
  useEffect(() => {
    fetch(`http://localhost:3000/group/getgroupbyid/${groupId}`)
      .then((response) => response.json())
      .then((data) => setGroup(data))
      .catch((error) => console.error("Error fetching group:", error));
  }, [groupId]);

  // Fetch notes from the server
  useEffect(() => {
    fetch(`http://localhost:3000/notes/getnotes/${groupId}`)
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, [groupId]);

  const handleTextChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSend = () => {
    if (noteText.trim()) {
      const noteData = {
        content: noteText,
        groupId,
      };

      fetch(`http://localhost:3000/notes/postnotes/${groupId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      })
        .then((response) => response.json())
        .then((data) => {
          setNotes([...notes, data]);
          setNoteText("");
        })
        .catch((error) => {
          console.error("Error posting note:", error);
        });
    }
  };

  // Helper functions for date and time formatting
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const formatTime = (dateString) => {
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return new Date(dateString).toLocaleTimeString("en-US", options);
  };

  return (
    <div className="Notes">
      <div className="notesHeader">
        {group && (
          <h1 className="grp">
            <span className="Dot">{group.initials}</span>
            {group.name}
          </h1>
        )}
      </div>

      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note._id} className="notescontent">
            <div className="upperPartNotes">
              <h2>{note.content}</h2>
            </div>
            <div className="LowerPartNotes">
              <h3>{formatDate(note.createdAt)}</h3>
              <h3> • {formatTime(note.createdAt)}</h3>
            </div>
          </div>
        ))
      ) : (
        <div className="noNotes">No Notes Found Yet</div>
      )}

      <div className="noteInput">
        <div className="new-note-input">
          <textarea
            value={noteText}
            onChange={handleTextChange}
            placeholder="Here’s the sample text for sample work"
            className="note-textarea"
          />
          <button
            onClick={handleSend}
            disabled={!noteText.trim()}
            className="send-note-btn"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
