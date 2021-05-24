import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Home = () => {
    return (
        <Container id='home-info'>
            <Row className='justify-content-center'>
                <h1>Marvel Machine Simulator</h1> 
            </Row>

            <Row className='homeDesc'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec diam ac elit commodo porttitor. Nunc dictum elit a justo viverra, nec tristique risus eleifend. Praesent gravida pharetra purus, quis maximus nulla lacinia sit amet. Suspendisse tincidunt ac dui sed gravida. Quisque ultricies risus odio, sed ornare ante faucibus at. Aliquam eget venenatis arcu. Morbi congue sem quis ultricies pulvinar. Mauris quis sagittis quam.
                </p>
                <p>
                Etiam nec nisl justo. Donec rutrum vestibulum mi. Praesent magna nibh, blandit nec interdum ut, maximus eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eleifend dolor ac metus pellentesque, non egestas lacus congue. Proin fringilla vitae lectus ac elementum. Maecenas semper a ipsum non bibendum. Maecenas quis quam ac metus faucibus pharetra. Praesent tempus placerat efficitur. Donec fermentum odio felis, eget imperdiet ex ultricies id. Aliquam tincidunt porttitor aliquet. Donec fermentum lorem nec facilisis aliquet. Aliquam sit amet lobortis erat. Donec euismod a dui a scelerisque. Duis pretium tempor tellus cursus blandit. Proin semper nibh nec quam egestas varius.
                </p>
            </Row>

            <div className='homeSplash'>
                <div className='overlay'>
                    <div className='overlay-inner'>
                        <h3>Attractive Text</h3>
                        <h2>Funny joke</h2>
                        <p>Interesting fact.</p>
                    </div>
                </div>
            </div>

            <Row className='homeLinks'>
                <p>
                    More info:
                </p>
                <ul>
                    <li>
                        <a href='https://github.com/Aearsears/marvel_machine_sim'>Github</a>
                    </li>
                    <li>
                        <a href='https://youtu.be/qhHXu-wUWVg'>My Website</a>
                    </li>
                    <li>
                        <a href='https://youtu.be/6QJ1dt6-94o'>Twitter</a>
                    </li>
                    <li>
                        <a href='https://youtu.be/YFmUR_4RHjA'>Discord</a>
                    </li>    
                </ul>
            </Row>
          
        </Container>
    );
};

export default Home;
