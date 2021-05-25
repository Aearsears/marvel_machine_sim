import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SideNavBar = ({ homer, slotsr, visr, collapsed, setCollapsed }) => {
    // Scrolls the correct section into place
    const scroll = (ref) => {
        return () => {
            return ref.current.scrollIntoView({ behavior: 'smooth' });
        };
    };
    
    return (
        <Container fluid className='sidenavbar'>
            <Row id='sidenavbar-head'>
                <Col className='head-item'>
                    <h1>MMS</h1>
                </Col>
                
                <Col className='head-item'>
                    <h3>Navigation</h3>
                </Col> 
            </Row>

            <Button variant='dark' onClick={scroll(homer)}>
                {collapsed ? 'H' : 'Home'}
            </Button>

            <Button onClick={scroll(slotsr)}>
                {collapsed ? 'S' : 'Slots'}
            </Button>

            <Button onClick={scroll(visr)}>
                {collapsed ? 'V' : 'Visualization'}
            </Button>

            <Button id='collapse-btn'
                onClick={() => { setCollapsed(!collapsed) }}>
                {collapsed ? 'Expand' : 'Collapse'}
            </Button>
        </Container>
    );
};

export default SideNavBar;
