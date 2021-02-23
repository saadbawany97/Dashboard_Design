import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Firstcontainer from "./Firstcontainer";
import SecondContainer from "./SecondContainer";
import Sidebar from "./Sidebar";
import ThirdContainer from "./ThirdContainer";

function Body() {
let [xlcountersecondcontainerright , setXlcountersecondcontainerright] = useState(0);
let [xlcountersecondcontainerleft , setXlcountersecondcontainerleft] = useState(0);

    const expand2ndcontainerright=()=>{

        if(xlcountersecondcontainerright === 0 ){
            setXlcountersecondcontainerright(xlcountersecondcontainerright + 2)
            document.getElementById('thirdcontainer').style.display='none'
        }
        else{
            setXlcountersecondcontainerright(0)
            document.getElementById('thirdcontainer').style.display='block'
        }
    }
    
    const expand2ndcontainerleft=()=>{

        
        if(xlcountersecondcontainerleft === 0 ){
            setXlcountersecondcontainerleft(xlcountersecondcontainerleft + 2)
            document.getElementById('firstcontainerid').style.display='none'
            console.log()
        }
        else{
            setXlcountersecondcontainerleft(0)
            document.getElementById('firstcontainerid').style.display='block'
        }
    }
console.log((7 + xlcountersecondcontainerleft + xlcountersecondcontainerright))


  return (
    <div className="custombody">
      <Sidebar />
      <Container fluid>
        <Row className="bodycontainer">
          <Col className="check colcon1" id='firstcontainerid' xl={2} lg={2} md={2} sm={12} xs={12}>
            <Firstcontainer />
          </Col>
          <Col className="check colcon1 secondcontainer" xl={(7 + xlcountersecondcontainerleft + xlcountersecondcontainerright)} lg={7} md={8} sm={12} xs={12}>
            <SecondContainer customfunc1={expand2ndcontainerright} customfunc2={expand2ndcontainerleft} />
          </Col>
          <Col className="check colcon1 " xl={2} lg={2} md={2} sm={12} xs={12}>
            <ThirdContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
