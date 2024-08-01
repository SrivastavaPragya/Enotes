import { useState, useEffect } from "react";
import "../styles/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [initial, setInitial] = useState("");

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleInitialChange = (e) => {
    setInitial(e.target.value);
  };

  const handleSubmit = () => {
    const newGroup = { name, initials: initial, color: "rgb(0,31,139)" };

    fetch("http://localhost:3000/group/postgroups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((response) => response.json())
      .then((data) => {
        setGroups((prevGroups) => [...prevGroups, data]);
        setModal(false);
        setName("");
        setInitial("");
      })
      .catch((error) => console.error("Error posting group:", error));
  };

  // Fetch groups from the backend
  useEffect(() => {
    fetch("http://localhost:3000/group/getgroups")
      .then((response) => response.json())
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, []);

  return (
    <div className={`sidebar `}>
      <div className="sidebar-header">Pocket Notes</div>
      <div className="groupList">
        <ul className="group-list">
          {groups.length > 0 ? (
            groups.map((group) => (
              <li
                key={group._id}
                onClick={() => navigate(`/notes/${group._id}`)}
                className={`group-item ${group.initials.toLowerCase()}`}
              >
                <span className="circle">{group.initials}</span>
                <span className="groupName">{group.name}</span>
              </li>
            ))
          ) : (
            <div className="noGroups">No Groups Availaible</div>
          )}
        </ul>
      </div>
      <div className="add-group-btn" onClick={handleModal}>
        <FontAwesomeIcon icon={faPlus} />
      </div>

      {modal && (
        <div className="modalContainer">
          <div className="notesModal">
            <div className="modal-content">
              <h2>Create Group Name</h2>

              <div className="groupName">
                <label htmlFor="name">Group Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Your name"
                  id="name"
                />
              </div>
              <div className="groupInitial">
                <label htmlFor="initial">Group Initial</label>
                <input
                  type="text"
                  value={initial}
                  onChange={handleInitialChange}
                  placeholder="Your Initial"
                  id="initial"
                />
              </div>

              <div className="groupColor">
                <label htmlFor="grcolor">Choose Color</label>
                <div className="colors">
                  <span className="blue"></span>
                  <span className="green"></span>
                  <span className="red"></span>
                  <span className="pink"></span>
                </div>
              </div>

              <button className="submitBtn" onClick={handleSubmit}>
                Submit
              </button>
              <button onClick={handleModal} className="cross">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
