import React, { useState, useEffect, useRef } from "react";
import Firstcontainer from "./Firstcontainer";
import ThirdContainer from "./ThirdContainer";
import SecondContainer from "./SecondContainer";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "./index.css";

function Body() {
  let [rightcol, setRightCol] = useState(2);
  let [leftcol, setLeftCol] = useState(2);
  let [midcol, setMidCol] = useState(8);
  let [leftshow, setleftShow] = useState(false);
  let [rightshow, setrightShow] = useState(false);
  let [screenSize, setScreenSize] = useState();
  let [leftclasChange, setLeftClassChange] = useState(false);

  let expandright = () => {
    if (midcol === 8 || (midcol === 10 && leftcol === 0)) {
      setRightCol((pre) => pre - 2);
      setMidCol((pre) => pre + 2);
    } else if ((midcol === 10 && leftcol === 2) || midcol === 12) {
      setMidCol((pre) => pre - 2);
      setRightCol((pre) => pre + 2);
    }
  };

  let expandleft = () => {
    if (midcol === 8 || (midcol === 10 && rightcol === 0)) {
      setLeftCol((pre) => pre - 2);
      setMidCol((pre) => pre + 2);
    } else if ((midcol === 10 && rightcol === 2) || midcol === 12) {
      setMidCol((pre) => pre - 2);
      setLeftCol((pre) => pre + 2);
    }
  };

  let showleft = () => {
    setleftShow(!leftshow);
  };
  let showright = () => {
    setrightShow(!rightshow);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 767) {
        setScreenSize(window.innerWidth);
        setLeftClassChange(true);
        setleftShow(true);
        setrightShow(true);
      } else {
        setScreenSize(window.innerWidth);

        setLeftClassChange(false);
        setleftShow(false);
        setrightShow(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="main-div">
      <div className="left-div">
        <Sidebar />
      </div>
      <div className="right-div">
        <Row className="mybodyrow">
          {leftcol === 2 ? (
            <Col
              style={{ left: leftshow ? -500 : 0 }}
              xl={leftcol}
              lg={leftcol}
              md={leftcol}
              sm={5}
              xs={5}
              className={leftclasChange ? "leftbodycol myborder" : "myborder"}
            >
              <div className='branch'>
                <Firstcontainer func5={screenSize} func1={showleft} />
              </div>
            </Col>
          ) : null}
          <Col
            xl={midcol}
            lg={midcol}
            md={midcol}
            sm={12}
            className="mybodycol myborder "
          >
             <div className='branch'>
              <SecondContainer
                func1={showleft}
                func2={showright}
                func3={expandleft}
                func4={expandright}
                func5={screenSize}
              />
            </div>
          </Col>
          {rightcol === 2 ? (
            <Col
              style={{ right: rightshow ? -500 : 0 }}
              xl={rightcol}
              lg={rightcol}
              md={rightcol}
              sm={5}
              xs={5}
              className={leftclasChange ? "rightbodycol myborder" : "myborder"}
            >
               <div className='branch'>
                <ThirdContainer func5={screenSize} func2={showright} />
              </div>
            </Col>
          ) : null}
        </Row>
      </div>
    </div>
  );
}

export default Body;
// className={leftclasChange ? 'testing' : 'mybodycol'}
