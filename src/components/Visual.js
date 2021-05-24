import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Visual = () => {
    return (
        <Container id='item-visual'>
            <Row className='justify-content-center'>
                <h1>Choose item</h1> 
            </Row>

            <Row className='justify-content-center'>
                <Button>vis</Button>
            </Row>            
        </Container>
    );
};

export default Visual;