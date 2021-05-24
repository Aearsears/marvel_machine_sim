import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SideNavBar = ({ homer, slotsr, visr }) => {
    
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
                Home
            </Button>

            <Button onClick={scroll(slotsr)}>
                Simulator
            </Button>

            <Button onClick={scroll(visr)}>
                Visualization
            </Button>
        </Container>
    );
};

export default SideNavBar;
