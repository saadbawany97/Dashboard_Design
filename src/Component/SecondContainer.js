import React from "react";
import dashboardicon from "../image/dashboard.svg";
import { Button } from "react-bootstrap";

function SecondContainer({ func1 , func2, func3 , func4 , func5 }) {

   

  return (
    <div className='secondcontainerdiv'>
      <div className="secondcontainer-header">
        <div>
          <ul>
            <li    onClick={func5 <= 767 ? func1 : func3}>
              <img
                className=""
                height="25px"
                width="25px"
                src={dashboardicon}
              />
            </li>
            <li>
              <a> Event </a>
            </li>
            <li>
              <a> Tab2 </a>
            </li>
          </ul>
        </div>

        <div>
          {" "}
          <ul>
            <li>
              <div className="dot3">
                <span class="dot1"></span>
                <span class="dot1"></span>
                <span class="dot1"></span>
              </div>
            </li>

            <li className='customlibtn'   onClick={func5 <= 767 ? func2 : func4}>
              <img
                className=""
                height="25px"
                width="25px"
                src={dashboardicon}
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="secondcontainerbody">
        {/* another row */}
        <div className="eventdiv">
          <div className="flexproperty">
            <p className="purpleborder">DW</p>
            <p>
              <b>Event</b>
              <br /> for Workspace APP 1 @ Collaboration Events{" "}
            </p>
          </div>

          <div>
            <Button className="pinkbtn">Create an Event</Button>
          </div>
        </div>
        {/* another row */}

        <div className="eventdiv justify-content-center">
          <div className='searchfielddiv'>
            <input className="searchfield" placeholder="search" type="text" />
           <i class="fa fa-search searchicon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondContainer;
