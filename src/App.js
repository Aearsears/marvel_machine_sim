import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef } from 'react';

import SideNavBar from './components/SideNavBar';
import SlotMachine from './components/SlotMachine';
import Visual from './components/Visual';
import Home from './components/Home';

function App() {
  const visRef = useRef(),
        slotsRef = useRef(),
        homeRef = useRef();

  return (
    <Container fluid>
      <Row className='pageDisplay'>
          <Col xs={2} id='sidenavbar-container'>
            <SideNavBar homer={homeRef} visr={visRef} slotsr={slotsRef}/>
          </Col>

          <Col xs={10} id='main-content'>
            <Row className='appItem justify-content-center'>
            <div ref={homeRef}>
              <Home ref={homeRef}/>
            </div>
            </Row>
            
            <Row className='appItem justify-content-center'>
            <div ref={slotsRef}>
              <SlotMachine ref={slotsRef}/>
            </div>
            </Row>

            <Row className='appItem justify-content-center'>
            <div ref={visRef}>
              <Visual ref={visRef}/>
            </div>
            </Row>

          </Col>
      </Row>
    </Container>
  );
};

export default App;
