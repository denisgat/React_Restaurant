import React from 'react'
import {
    Form,
    Button,
    Col
}
    from 'react-bootstrap';

function FormItem() {
    return (
        <div className="container">
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label> FirstName</Form.Label>
                        <Form.Control  type="text" placeholder="Denis" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label> LastName</Form.Label>
                        <Form.Control type="text" placeholder="Gatotho" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                    <Form.Label> Email</Form.Label>
                    <Form.Control  type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label> Reservation Time</Form.Label>
                        <Form.Control as="select" value="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label> Reservation Seat</Form.Label>
                        <Form.Control as="select" value="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
function Reserve() {
    return (
        <div>
            <br></br>
            <h1 className="text-center">Reserve your seat today!</h1>
            <br></br>
            <FormItem />
        </div>
    )
}

export default Reserve