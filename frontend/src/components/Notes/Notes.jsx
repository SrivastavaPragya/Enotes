import React, { useState } from 'react'
import "../../styles/Notes.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Notes = () => {

    const [noteText, setNoteText] = useState(""); // State to keep track of the input text

    const handleTextChange = (event) => {
      setNoteText(event.target.value); // Update the state when text changes
    };
  
    const handleSend = () => {
      // Here you could add functionality to handle sending/storing the note
      console.log("Note sent:", noteText);
      setNoteText(""); // Clear text after sending
    };
  return (
    <div className='Notes'>
      <div className="notesHeader">
        <h1 className='grp'><span className="Dot">MN</span>My Notes</h1>
      </div>
      <div className="notescontent">
<div className="upperPartNotes">
    <h2>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</h2>
</div>
<div className="LowerPartNotes">
    <h3>9 Mar 2023</h3>
    <h3> • 10:10 AM</h3>
</div>
      </div>


      <div className="notescontent">
<div className="upperPartNotes">
    <h2>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</h2>
</div>
<div className="LowerPartNotes">
    <h3>9 Mar 2023</h3>
    <h3> • 10:10 AM</h3>
</div>
      </div>




      <div className="notescontent">
<div className="upperPartNotes">
    <h2>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</h2>
</div>
<div className="LowerPartNotes">
    <h3>9 Mar 2023</h3>
    <h3> • 10:10 AM</h3>
</div>
      </div>




      <div className="notescontent">
<div className="upperPartNotes">
    <h2>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</h2>
</div>
<div className="LowerPartNotes">
    <h3>9 Mar 2023</h3>
    <h3> • 10:10 AM</h3>
</div>
      </div>




      <div className="notescontent">
<div className="upperPartNotes">
    <h2>Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.</h2>
</div>
<div className="LowerPartNotes">
    <h3>9 Mar 2023</h3>
    <h3> • 10:10 AM</h3>
</div>
      </div>

<div className="noteInput">
<div className="new-note-input">
        <textarea
          value={noteText}
          onChange={handleTextChange}
          placeholder="Here’s the sample text for sample work"
          className="note-textarea"
        >
            
        </textarea>
        <button
  onClick={handleSend}
  disabled={!noteText.trim()} // Disable button if noteText is empty or only whitespace
  className="send-note-btn"
>
  <FontAwesomeIcon icon={faPaperPlane} /> 
</button>
      </div>
</div>
     
    </div>
  )
}

export default Notes
