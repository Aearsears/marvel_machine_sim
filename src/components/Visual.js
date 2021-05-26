import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Search from './Search';
import VisualAnimation from './VisualAnimation';

const Visual = ({ items, visualItem, setVisualItem }) => {
    return (
        <Container id='item-visual'>
            {/* search bar */}
            <Row className='justify-content-center'>
                <Search items={items} setVisualItem={setVisualItem}/>
            </Row>

            {/* visual
                displays the visual for the visualItem */}
            <Row className='justify-content-center'>
                <Container id='vis-item'>
                    <VisualAnimation item={visualItem}/>
                </Container>
            </Row>            
        </Container>
    );
};

export default Visual;