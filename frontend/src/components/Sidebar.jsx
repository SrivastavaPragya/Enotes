// import React from 'react';
// import "../styles/Sidebar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';

// const Sidebar = () => {

//     const navigate=useNavigate();
//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         Pocket Notes

//       </div>
//       <div className="groupList">
//       <ul className="group-list">
//         <li  onClick={() => navigate('/notes')} className="group-item mn"><span className="circle">MN</span>My Notes</li>
//         <li onClick={() => navigate('/notes')}    className="group-item mp"><span className="circle">MP</span>My personal grp</li>
//         <li onClick={() => navigate('/notes')}  className="group-item jg"><span className="circle">JG</span>Javascript grp</li>
//         <li  onClick={() => navigate('/notes')} className="group-item hg"><span className="circle">HG</span>HTML grp</li>
//         <li  onClick={() => navigate('/notes')} className="group-item cn"><span className="circle">CN</span>CSS Notes</li>
//         <li  onClick={() => navigate('/notes')} className="group-item sn"><span className="circle">SN</span>SQL Notes</li>
//         <li onClick={() => navigate('/notes')}  className="group-item pn"><span className="circle">PN</span>Python Notes</li>
//         <li onClick={() => navigate('/notes')}  className="group-item cn"><span className="circle">CN</span>CSS Notes</li>
//         <li onClick={() => navigate('/notes')}  className="group-item sn"><span className="circle">SN</span>SQL Notes</li>
//         <li  onClick={() => navigate('/notes')} className="group-item pn"><span className="circle">PN</span>Python Notes</li>
//       </ul>
//       </div>
//       <div className="add-group-btn">
//         <FontAwesomeIcon icon={faPlus} />
//       </div>
//     </div>
//   );
// }


// export default Sidebar;




import React, { useState, useEffect } from 'react';
import "../styles/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [groups, setGroups] = useState([]);
    const navigate = useNavigate();

    // Fetch groups from the backend
    useEffect(() => {
        fetch('http://localhost:3000/group/getgroups')
            .then(response => response.json())
            .then(data => setGroups(data))
            .catch(error => console.error('Error fetching groups:', error));
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                Pocket Notes
            </div>
            <div className="groupList">
                <ul className="group-list">
                    {groups.map(group => (
                       <li key={group._id} onClick={() => navigate(`/notes/${group._id}`)} className={`group-item ${group.initials.toLowerCase()}`}>
                       <span className="circle">{group.initials}</span>{group.name}
                   </li>
                   
                    ))}
                </ul>
            </div>
            <div className="add-group-btn" onClick={() => navigate('/group/create')}>
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </div>
    );
};

export default Sidebar;


