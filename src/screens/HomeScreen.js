import React, { useEffect, useState } from 'react'
import { Container, Form, Button, Col, Row, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import PromptLoader from '../components/PromptLoader';
import Message from '../components/Message';
import { createPrompt } from '../actions/promptActions';
// import botIcon from '../assets/bot.svg'
// import userIcon from '../assets/user.svg'
import newBot from '../assets/botAnimated.gif'
import newUser from '../assets/userAnimated.gif'


function HomeScreen() {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const sendPrompt = useSelector(state => state.sendPrompt)
    const { loading, error, prompt } = sendPrompt

    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! How can I assist you today?", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        addMessage(inputValue, true);
        dispatch(createPrompt(inputValue))
        setInputValue("");
    };

    const addMessage = (text, isUser) => {
        const newMessage = {
            id: messages.length + 1,
            text,
            isUser
        };
        setMessages([...messages, newMessage]);
    }

    useEffect(() => {
        if (prompt) {
            addMessage(prompt.response, false)
        }
    }, [prompt])

    return (
        <FormContainer style={{ paddingBottom: '130px' }}>
            <div className="jumbotron text-center" style={{ 'paddingBottom': 20 }}>
                <h1 className="display-4">Welcome to our platform!</h1>
                <hr />
                <p className="lead">Chat with us to get assistance or ask any questions you may have.</p>
            </div>
            <Container fluid className="chat-container" style={{ maxWidth: '1500px', margin: '0 auto', paddingBottom: '130px', minHeight: 'calc(100vh - 80px)' }}>
                {!userInfo ?
                    <Row>
                        <Col>
                            <Message variant='primary'>Sing In to interact with the chat bot!</Message>
                        </Col>
                    </Row>
                    :
                    <Row>
                        <Col xs={12} md={30}>
                            <ListGroup>
                                {messages.map((message) => (
                                    <ListGroup.Item key={message.id} className={`message ${message.isUser ? "user" : "bot"}`}>
                                        <div className="message-content">
                                            <Row>
                                                <Col xs={1}>{message.isUser ? (
                                                    <img src={newUser} alt='user' height={40} width={40} />
                                                    //  <HumanIcon className="icon" />
                                                    // <h3>Human</h3>
                                                ) : (
                                                    <img src={newBot} alt='bot' height={40} width={40} />
                                                    // <h3>BOT</h3>
                                                    //  <AIIcon className="icon" />
                                                )}</Col>
                                                {/* <span className='px-4'>||</span> */}
                                                <Col className="text px-4">{message.text}</Col>
                                            </Row>
                                        </div>
                                    </ListGroup.Item>
                                ))}

                                {error && (
                                    <ListGroup.Item>
                                        <Message variant='danger'> {error.message}</Message>
                                    </ListGroup.Item>
                                )}
                                {/* </ListGroup> */}

                                <hr />
                                <Form onSubmit={handleSubmit} className="input-form">
                                    <Row>
                                        <Col xs={10}>
                                            <Form.Control
                                                type="text"
                                                value={inputValue}
                                                disabled={loading}
                                                onChange={handleInputChange}
                                                placeholder="Type your message..."
                                            />
                                        </Col>
                                        <Col xs={2}>
                                            <Button variant="primary" type="submit" className="float-right">
                                                {loading ? <PromptLoader /> : <ArrowRightCircle size={24} />}
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>

                            </ListGroup>
                        </Col>
                    </Row>
                }
            </Container>
        </FormContainer>
    )
}

export default HomeScreen