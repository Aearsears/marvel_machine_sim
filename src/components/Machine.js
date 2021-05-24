import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Inventory from './Inventory';
import SlotMachine from 'jquery-slotmachine/lib/slot-machine.js';
import { useEffect } from 'react';

const Machine = () => {
    useEffect(() => {
        const btn = document.querySelector('#randomizeButton');
        const results = {
            machine1: document.querySelector('#machine1Result'),
            machine2: document.querySelector('#machine2Result'),
            machine3: document.querySelector('#machine3Result')
        };
        const el1 = document.querySelector('#machine1');
        const el2 = document.querySelector('#machine2');
        const el3 = document.querySelector('#machine3');
        const machine1 = new SlotMachine(el1);
        const machine2 = new SlotMachine(el2);
        const machine3 = new SlotMachine(el3);

        const update = (machine) => {
            var machineNode = document.getElementById(machine);
            var container = machineNode.getElementsByClassName('slotMachineContainer');
            var machineContainer = container[0];

            machineContainer.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
        }
            
        function onComplete(){
            console.log(this.element.id);
            
            var machineNode = document.getElementById(this.element.id);
            var container = machineNode.getElementsByClassName('slotMachineContainer');
            var winner = container[0].childNodes[this.active];

            console.log(winner.childNodes[0].attributes['title']);
            console.log(winner.childNodes[0].attributes['itemid']);

            results[this.element.id].innerText = `Index: ${this.active}`;
        }
        
        
        const clicker = () => {
            machine1.shuffle(5, onComplete);
            setTimeout(() => machine3.shuffle(5, onComplete), 500);
            setTimeout(() => machine2.shuffle(5, onComplete), 1000);
        }

        btn.addEventListener('click', clicker);
        update('machine1');
        update('machine2');
        update('machine3');
    }, []);

    return (
        <Container id='item-slot-machine'>
            <Row className='justify-content-center'>
                <h1> Marvel sim </h1>
            </Row>
            <Row className='justify-content-center'>
                
                <div id="randomize">
                    <div className="container">
                    <h1>The jquery-slotmachine package</h1>
                    <p>This allows for rolling at set rates. winners are retrieved from the index (see console)</p>
                    <div className="row">
                        <div className="col-sm-4">
                        <div>
                            <div id="machine1" className="randomizeMachine">
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/All-Star-Face-Coupon.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/All-Star-Hair-Coupon.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Gachapon-Ticket-(5).png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Premium-Surprise-Style-Box.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Valentine-Surprise-Style-Box.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Halloween-Surprise-Style-Box.png" /></div>
                            </div>
                        </div>
                        <div id="machine1Result" className="col-xs-4 machineResult">Index of winner: 0</div>
                        </div>

                        <div className="col-sm-4">
                        <div>
                            <div id="machine2" className="randomizeMachine">
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/All-Star-Face-Coupon.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/All-Star-Hair-Coupon.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Gachapon-Ticket-(5).png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Premium-Surprise-Style-Box.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Valentine-Surprise-Style-Box.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Halloween-Surprise-Style-Box.png" /></div>
                            </div>
                        </div>
                        <div id="machine2Result" className="col-xs-4 machineResult">Index of winner: 1</div>
                        </div>

                        <div className="col-sm-4">
                        <div>
                            <div id="machine3" className="randomizeMachine">
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/All-Star-Face-Coupon.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/All-Star-Hair-Coupon.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Gachapon-Ticket-(5).png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Premium-Surprise-Style-Box.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Valentine-Surprise-Style-Box.png" /></div>
                                <div><img className='photo' alt='' itemid='12' title='All-Star-Face-Coupon' src="https://marvel-api-ten.vercel.app/static/img/2021/Halloween-Surprise-Style-Box.png" /></div>
                            </div>
                        </div>
                        <div id="machine3Result" className="col-xs-4 machineResult">Index of winner: 2</div>
                        </div>
                    
                        <div className="btn-group btn-group-justified" role="group">
                        <button id="randomizeButton" type="button" className="btn btn-danger btn-lg">gacha</button>
                        </div>
                    </div>
                    <div className="row">
                    </div>
                    </div>
                </div>
            </Row>
          
            <Row>
                <Inventory />
            </Row>
        </Container>
    );
};

export default Machine;
