import React from 'react'
import { Container, Form, Button, Alert, ModalFooter } from 'react-bootstrap'
import { useState } from 'react'

function Contact() {
    const [submit, setSubmit] = useState(false)

    return (
        <Container style={{ textAlign: 'center' }}>
            <img src='brand-logo.jpg' alt='brandLogo'
                style={{
                    margin: '10px',
                    padding: '5px',
                    height: '120px',
                    borderRadius: '50%'
                }}
            />
            <h1 className='m-0 text-center fs-1 fw-bolder'>Contact Us</h1>
            <hr />
            <Container className='py-3 bg-light'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                   {submit && <Alert variant="success">
                        <Alert.Heading>Hey, your details have been saved!</Alert.Heading>
                    </Alert>}
                    <Button variant="primary" type="submit" onClick={()=>setSubmit(true)}>
                        Submit
                    </Button>
                </Form>
            </Container>
            <br />

            <ModalFooter className='text-center text-white'>
                <Container className='p-4 py-2'>
                    <section>
                        <Button
                            floating
                            className='m-3'
                            style={{ backgroundColor: '#3b5998', borderRadius: '50%', fontSize: '12px' }}
                            role='button'>
                            <i class="fa-brands fa-facebook-f"></i>
                        </Button>

                        <Button
                            floating
                            className='m-3'
                            style={{ backgroundColor: '#55acee', borderRadius: '50%', fontSize: '12px' }}
                            role='button'>
                            <i class="fa-brands fa-twitter"></i>
                        </Button>

                        <Button
                            floating
                            className='m-3'
                            style={{ backgroundColor: '#dd4b39', borderRadius: '50%', fontSize: '12px' }}
                            role='button'
                        >
                            <i class="fa-brands fa-google"></i>
                        </Button>

                        <Button
                            floating
                            className='m-3'
                            style={{ backgroundColor: '#ac2bac', borderRadius: '50%', fontSize: '12px' }}
                            role='button'
                        >
                            <i class="fa-brands fa-instagram"></i>
                        </Button>
                    </section>
                </Container>
            </ModalFooter>
        </Container>
    )
}

export default Contact