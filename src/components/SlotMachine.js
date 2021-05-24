import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const SlotMachine = () => {
    return (
        <Container id='item-slot-machine'>
            <Row className='justify-content-center'>
                <h1>Roll gacha</h1> 
            </Row>

            <Row className='justify-content-center'>
                <Button>Go!</Button>
            </Row>            
        </Container>
    );
};

export default SlotMachine;
