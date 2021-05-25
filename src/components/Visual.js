import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Search from './Search';

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
                    {/* temp */}
                    The current item being displayed is {visualItem ? visualItem['name'] : 'nothing'}
                    {visualItem &&
                        <div className='d-flex m-2 align-items-center'>
                            <img src={'https://marvel-api-ten.vercel.app/'+visualItem['path']}
                                style={{ height: '64px', width: '64px' }}
                                alt={visualItem['name']}
                                />
                            <div className='sm-3' style={{ marginLeft: '0.8rem' }}>
                                <div>{visualItem['name']}</div>
                                <div className='text-muted'>{visualItem['Rate']+'%'}</div>
                            </div>
                        </div>
                    }
                    
                </Container>
            </Row>            
        </Container>
    );
};

export default Visual;