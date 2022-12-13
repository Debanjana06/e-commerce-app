import { Button, Card, Col, Container, ModalFooter, Row } from "react-bootstrap"

const About = () => {
    return (
        <Container style={{ textAlign: 'center' }}>
            <h1 className="display-4 mt-3">About Us</h1>
            <hr />
            <Card className="bg-dark text-white border-0">
                <Card.Img src="about.jpg" alt="Card image" style={{ height: '400px', opacity: '0.4' }} />
                <Card.ImgOverlay className="d-flex flex-column justify-content-center">
                    <Container>
                        <Card.Text className="lead fs-1.5 fw-bolder">
                            With more than 850 restaurants nationwide, we recognize our unique position to help provide
                            hunger relief in the local communities we serve. In 2003, we created our Harvest program, where
                            all restaurants gather wholesome, surplus food every day and carefully prepare for a weekly
                            donation to a local non-profit organization. Olive Garden restaurants have donated over 40
                            million pounds of food, and we also partner with Feeding America® to help children and
                            families facing hunger in our communities.
                        </Card.Text>

                    </Container>
                </Card.ImgOverlay>
            </Card>

            <hr />
            <Row>
                <Col md={5} style={{ margin: '10px' }}>
                    <p className="lead fs-1.8 fw-400">
                        With more than 850 restaurants nationwide, we recognize our unique position to help provide
                        hunger relief in the local communities we serve. In 2003, we created our Harvest program, where
                        all restaurants gather wholesome, surplus food every day and carefully prepare for a weekly
                        donation to a local non-profit organization. Olive Garden restaurants have donated over 40
                        million pounds of food, and we also partner with Feeding America® to help children and
                        families facing hunger in our communities.
                    </p>
                </Col>
                <Col md={5}>
                    <img src="brand-logo.jpg" alt="brand" style={{ height: '350px' }} />
                </Col>
            </Row>
            <hr />
            <ModalFooter className='bg-dark text-center text-white'>
                <Container className='p-4 py-2'>
                    <section>
                        <Button
                            floating
                            className='m-3'
                            style={{backgroundColor: '#3b5998', borderRadius:'50%', fontSize:'12px'}}
                            role='button'>
                            <i class="fa-brands fa-facebook-f"></i>
                        </Button>

                        <Button
                            floating
                            className='m-3'
                            style={{backgroundColor: '#55acee', borderRadius:'50%', fontSize:'12px'}}
                            role='button'>
                            <i class="fa-brands fa-twitter"></i>
                        </Button>

                        <Button
                            floating
                            className='m-3'
                            style={{backgroundColor: '#dd4b39', borderRadius:'50%', fontSize:'12px'}}
                            role='button'
                        >
                            <i class="fa-brands fa-google"></i>
                        </Button>

                        <Button
                            floating
                            className='m-3'
                            style={{backgroundColor: '#ac2bac', borderRadius:'50%', fontSize:'12px'}}
                            role='button'
                         >
                            <i class="fa-brands fa-instagram"></i>
                        </Button>
                    </section>
                </Container>
            </ModalFooter>
            <br/>
        </Container>
    )
}

export default About