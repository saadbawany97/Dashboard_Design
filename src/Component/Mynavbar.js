import React from 'react'
import '../index.css'
import { Row, Container, Col, FormControl } from 'react-bootstrap'
import logo from '../image/logo.png'
import Man from '../image/man.jpg'
import iconphone from '../image/phone.svg'
import iconemail from '../image/email.svg'
import coffeicon from '../image/coffee-cup.svg'
import notifiyicon from '../image/notification-bell.svg'
import shareicon from '../image/share.svg'

function Mynavbar() {
    return (


            <Row className='mynavrow'>
                <Col className='mynavbar-col' xl={1} lg={1} md={1} sm={2} xs={2} >
                    <img className='logo-img' src={logo} />

                </Col>
                <Col className='mynavbar-col' xl={7} lg={7} md={7} sm={3} xs={3} >
                    <input placeholder="Search..." className='searchbar ' type='text' />
                </Col>
                <Col className='mynavbar-col' xl={4} lg={4} md={4} sm={7} xs={7} >
                    <div className='myicon-list'>
                        <a href='#' className='my-icon'> <img height='20px' width='20px' src={iconphone}/> </a>

                        <a href='#' className='my-icon'> <img height='20px' width='20px' src={iconemail}/>  </a>
                        <a href='#' className='my-icon'> <img height='20px' width='20px' src={iconphone}/>  </a>
                        <a href='#' className='my-icon'> <img height='20px' width='20px' src={iconphone}/>  </a>
                        <a href='#' className='my-icon'> <img height='20px' width='20px' src={shareicon}/>  </a>
                        <a href='#' className='my-icon'> <img height='20px' width='20px' src={coffeicon}/>  </a>
                        <a href='#' className='my-icon'> <img height='20px' width='20px' src={notifiyicon}/>  </a>
                        <a href='#' > <img className='mypic' src={Man} />  </a>
                    </div>
                </Col>

            </Row>
 

    )
}

export default Mynavbar


