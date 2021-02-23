import React from "react";
import addicon from "../image/addicon.png";
function ThirdContainer({ func2, func5 }) {
  return (
    <div className="thirdcontainer" id="thirdcontainer">
      <div className="thirdcontainerdiv">
        {func5 <= 767 ? (
          <a onClick={func2} className="crossbtn">
            X
          </a>
        ) : null}
        <div>
          <a>
            {" "}
            <span>A1</span>
          </a>
          <a>
            <span>WS</span>
          </a>
        </div>
        <div>
          <a>
            <span>A1</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ThirdContainer;
