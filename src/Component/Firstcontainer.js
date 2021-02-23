import React from "react";
import addicon from "../image/addicon.png";
import man from "../image/man.jpg";

function Firstcontainer({ func1, func5 }) {
  return (
    <div id="firstcontainerid">
      {func5 <= 767 ? (
        <a onClick={func1} className="crossbtn">
          X
        </a>
      ) : null}
      <div className="first-container">
        <input
          className="dropdown-firstcontainer"
          type="text"
          placeholder="A1"
        />
        <div className="low-margin">
          <p>Shared Contacts</p>
          <hr />
          <p>Inbox</p>
        </div>
        <span>
          {" "}
          <a>
            {" "}
            <img height="22px" width="22px" src={addicon} />{" "}
          </a>{" "}
          <input
            className="collab-field"
            type="search"
            placeholder="COLLABORATION"
          />
        </span>
        <hr />
        <p>App License</p>
        <p>App Functions</p>
        <p>App Settings</p>
        <p>App Events</p>

        <span>
          {" "}
          <a>
            {" "}
            <img height="22px" width="22px" src={addicon} />{" "}
          </a>{" "}
          <input className="collab-field" type="search" placeholder="BOARDS" />
        </span>
        <hr />
        <p>Design Board</p>
        <p>Development Board</p>
        <p>Testing Board</p>

        <span>
          {" "}
          <a>
            {" "}
            <img height="22px" width="22px" src={addicon} />{" "}
          </a>{" "}
          <input
            className="collab-field"
            type="search"
            placeholder="TEAM MEMBERS"
          />
        </span>
        <hr />

        <div className="team-div">
          <div className="team-subdiv">
            <img src={man} height="36px" width="36px" className="team-icon" />{" "}
            <p>
              John Doe
              <br /> 2 mint ago
            </p>{" "}
          </div>
          <div>
            <span className="dot"></span>
          </div>
        </div>
        <div className="team-div">
          <div className="team-subdiv">
            <img src={man} height="36px" width="36px" className="team-icon" />{" "}
            <p>
              John Doe
              <br /> 2 mint ago
            </p>{" "}
          </div>
          <div>
            <span className="dot"></span>
          </div>
        </div>
        <div className="team-div">
          <div className="team-subdiv">
            <img src={man} height="36px" width="36px" className="team-icon" />{" "}
            <p>
              John Doe
              <br /> 3 mint ago
            </p>{" "}
          </div>
          <div>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firstcontainer;
