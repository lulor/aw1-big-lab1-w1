import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import { MdDelete } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'
import './App.css';

function App() {
    return (
        <>
        
            <Navbar variant="dark" expand="sm" bg="success" fixed="top">

                { /* Logo and title */}
                <Navbar.Brand href="index.html">
                    <svg className="bi bi-check-all" width="30" height="30" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.354 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd" />
                        <path d="M6.25 8.043l-.896-.897a.5.5 0 10-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 00.708 0l7-7a.5.5 0 00-.708-.708L8.5 10.293l-.543-.543-.707.707z" />
                    </svg>
                    ToDo Manager
                </Navbar.Brand>

                { /* Search form */}
                <Form inline className="my-2 my-lg-0 mx-auto d-none d-sm-block">
                    <Form.Control
                        className="mr-sm-2"
                        placeholder="Search"
                    />
                </Form>

                { /* Link to the user profile */}
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/profile">
                            <svg className="bi bi-people-circle" width="30" height="30" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" />
                                <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clip-rule="evenodd" />
                            </svg>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

            </Navbar>

            { /* Content of the page */}
            <Container fluid>
                <Row className="vheight-100">

                    { /* Left sidebar */}
                    <Col xs={12} sm={4} className="bg-light below-nav">
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="sidebar" action active>All</ListGroup.Item>
                            <ListGroup.Item variant="sidebar" action>Important</ListGroup.Item>
                            <ListGroup.Item variant="sidebar" action>Today</ListGroup.Item>
                            <ListGroup.Item variant="sidebar" action>Next 7 Days</ListGroup.Item>
                            <ListGroup.Item variant="sidebar" action>Private</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    { /* Main content */}
                    <Col xs={12} sm={8} className="below-nav">
                        <h1>All</h1>

                        { /* List of tasks */}
                        <ListGroup as="ul" variant="flush">
        
                            <ListGroup.Item as="li">
                                <Form inline>
                                    <Form.Check
                                        type="checkbox"
                                        id="check-t1"
                                        custom
                                    />
                                    <Form.Label>Complete Lab 2</Form.Label>
                                    <Form.Text className="ml-auto">Monday 22 March 2021 at 14:30</Form.Text>
                                    <Form.Text className="ml-2">
                                        <a href="#"><MdEdit size="22"/></a>
                                    </Form.Text>
                                    <Form.Text>
                                        <a href="#"><MdDelete size="22"/></a>
                                    </Form.Text>
                                </Form>
                            </ListGroup.Item>

                            <ListGroup.Item as="li">
                                <Form inline>
                                    <Form.Check
                                        type="checkbox"
                                        id="check-t2"
                                        custom
                                    />
                                    <Form.Label>Buy some groceries</Form.Label>
                                    <Form.Text className="mx-auto">
                                        <svg className="bi bi-person-square" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                        </svg>
                                    </Form.Text>
                                    <Form.Text className="ml-auto">Today at 14:00</Form.Text>
                                    <Form.Text className="ml-2">
                                        <a href="#"><MdEdit size="22"/></a>
                                    </Form.Text>
                                    <Form.Text>
                                        <a href="#"><MdDelete size="22"/></a>
                                    </Form.Text>
                                </Form>
                            </ListGroup.Item>

                            <ListGroup.Item as="li">
                                <Form inline>
                                    <Form.Check
                                        type="checkbox"
                                        id="check-t3"
                                        custom
                                    />
                                    <Form.Label className="important">Read a good book!</Form.Label>
                                    <Form.Text className="ml-auto"></Form.Text>
                                    <Form.Text className="ml-2">
                                        <a href="#"><MdEdit size="22"/></a>
                                    </Form.Text>
                                    <Form.Text>
                                        <a href="#"><MdDelete size="22"/></a>
                                    </Form.Text>
                                </Form>
                            </ListGroup.Item>

                        </ListGroup>

                        { /* Add a new task... */}
                        <Button size="lg" variant="success" className="fixed-right-bottom">&#43;</Button>

                    </Col>

                </Row>
            </Container>

        </>
    );
}

export default App;
