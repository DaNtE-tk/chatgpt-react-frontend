import React from 'react'
import { Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'

function Footer() {
    return (
        <Container fluid style={{ position: 'fixed', bottom: 0, width: '100%', padding: '15px', display: 'flex', zIndex: 1000, backgroundColor: '#272b30', justifyContent: 'center' }}>
            <Row className="justify-content-center">
                <Col xs="12" sm="auto" style={{ marginBottom: '5px' }}>
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-contact">Contact us at mind.ease@mail.com</Tooltip>}
                    >
                        <Button block variant="outline-light" style={{ width: '100%' }}><a href='mailto:“support@mind.ease.com' style={{"text-decoration":"none"}} >Contact</a></Button>
                    </OverlayTrigger>
                </Col>
                <Col xs="12" sm="auto" className="d-sm-flex align-items-center">
                    <OverlayTrigger
                        placement='top'
                        overlay={<Tooltip id="tooltip-feedback">Do leave a message, every feedback counts 📧</Tooltip>}
                    >
                        <Button block variant="outline-light" style={{ width: '100%', marginRight: '10px' }} >Feedback</Button>
                    </OverlayTrigger>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer