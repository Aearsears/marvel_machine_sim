import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRef, useState, useEffect } from 'react';

import SideNavBar from './components/SideNavBar';
import SlotMachine from './components/Machine';
import Visual from './components/Visual';
import Home from './components/Home';

function App() {
  const visRef = useRef(),
        slotsRef = useRef(),
        homeRef = useRef();
  
  const [collapsed, setCollapsed] = useState(false);
  const [itemData, setItemData] = useState([]);
  const [visualItem, setVisualItem] = useState(null);

  useEffect(() => {
    fetch('https://marvel-api-ten.vercel.app/api/items')
    .then((resp) => {
      if (resp.status !== 200) {
        console.log('Error fetching item data');
        return;
      }
      return resp.json();
    })
    .then((data) => {
      setItemData(data);
    });
  }, []);
  

  return (
    <Container fluid>
      <Row className='pageDisplay'>
          <Col xs={collapsed ? 1 : 2} id='sidenavbar-container'>
            <SideNavBar 
            homer={homeRef} visr={visRef} slotsr={slotsRef}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            />
          </Col>

          <Col xs={collapsed ? 11 : 10} id='main-content'>
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
            <div ref={visRef} style={{ width: '100%' }}>
              <Visual ref={visRef} items={itemData} visualItem={visualItem} setVisualItem={setVisualItem}/>
            </div>
            </Row>

          </Col>
      </Row>
    </Container>
  );
};

export default App;
