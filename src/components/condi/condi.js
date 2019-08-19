import React, { useState } from 'react';
import './condi.css';
import pic from './picture.jpg';
import pic2 from './picture2.jpg';
import pic3 from './picture3.jpg';
import pic4 from './picture4.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Condi() {
    var [textvalue, setTextvalue] = useState(null);
    var [isShown, setIsShown] = useState(false);

    var buttonchangertrue = () => {
        setTextvalue('my unique value');
        setIsShown(true)
    }

    var buttonchangerfalse = () => {
        setTextvalue('');
        setIsShown(false)
    }

    if (isShown == true) {
        var cooldiv = <img src={pic3} alt="super cool picture" />;
    } else if (isShown == false) {
        var cooldiv = <img src={pic4} alt="super cool picture" />;
    }

    return (
        <div className="overlay">
            <h1>Hello!</h1>
            <p>Here we are practicing the conditional rendering with some React Bootstrap.</p>
            <Container>
                <Row>
                    <Col>
                        <button type="button" className="btn-primary btn-lg" onClick={buttonchangertrue}>Add text</button>
                    </Col>
                    <Col>
                        <button type="button" className="btn-secondary btn-lg" onClick={buttonchangerfalse}>Delete text</button>
                    </Col>
                </Row>
            </Container >
            <textarea value={textvalue} className="text"></textarea>
            <div className="mycooldiv" >
                {cooldiv}
            </div>
        </div >
    )
}

export default Condi;