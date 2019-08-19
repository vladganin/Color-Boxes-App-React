import React, { useState, useEffect } from 'react';
import './condi.css';
import pic from './picture.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Condi() {
    var [textvalue, setTextvalue] = useState(null);

    return (
        <div className="overlay">
            <h1>Hello!</h1>
            <p>Here we are practicing the conditional rendering with some React Bootstrap.</p>
            <Container>
                <Row>
                    <Col>
                        <button type="button" className="btn-primary btn-lg" onClick={() => setTextvalue('my unique value')}>Add text</button>
                    </Col>
                    <Col>
                        <button type="button" className="btn-secondary btn-lg" onClick={() => setTextvalue('')}>Delete text</button>
                    </Col>
                </Row>
            </Container>
            <textarea value={textvalue} className="text"></textarea>
        </div >
    )
}

export default Condi;