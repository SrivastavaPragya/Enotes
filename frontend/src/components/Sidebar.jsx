import React from 'react';
import "../styles/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate=useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Pocket Notes

      </div>
      <div className="groupList">
      <ul className="group-list">
        <li  onClick={() => navigate('/notes')} className="group-item mn"><span className="circle">MN</span>My Notes</li>
        <li onClick={() => navigate('/notes')}    className="group-item mp"><span className="circle">MP</span>My personal grp</li>
        <li onClick={() => navigate('/notes')}  className="group-item jg"><span className="circle">JG</span>Javascript grp</li>
        <li  onClick={() => navigate('/notes')} className="group-item hg"><span className="circle">HG</span>HTML grp</li>
        <li  onClick={() => navigate('/notes')} className="group-item cn"><span className="circle">CN</span>CSS Notes</li>
        <li  onClick={() => navigate('/notes')} className="group-item sn"><span className="circle">SN</span>SQL Notes</li>
        <li onClick={() => navigate('/notes')}  className="group-item pn"><span className="circle">PN</span>Python Notes</li>
        <li onClick={() => navigate('/notes')}  className="group-item cn"><span className="circle">CN</span>CSS Notes</li>
        <li onClick={() => navigate('/notes')}  className="group-item sn"><span className="circle">SN</span>SQL Notes</li>
        <li  onClick={() => navigate('/notes')} className="group-item pn"><span className="circle">PN</span>Python Notes</li>
      </ul>
      </div>
      <div className="add-group-btn">
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
}

export default Sidebar;

