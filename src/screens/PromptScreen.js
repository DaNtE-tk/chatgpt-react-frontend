import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { listUserPrompts } from '../actions/promptActions'; // Import your action
import Loader from '../components/Loader';
import Message from '../components/Message';

const PromptRecordsPage = () => {
  const dispatch = useDispatch();
  const userPrompts = useSelector(state => state.userPrompts); // Assuming you have promptRecords state in Redux store
  const { loading, error, prompts } = userPrompts

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  // console.log(prompts.length);

  useEffect(() => {
    dispatch(listUserPrompts()); // Dispatch action to fetch prompt records
  }, [dispatch]);

  return (
    <Container style={{ paddingBottom: '100px' }}>
      <h1 className="my-4 display-4"><strong>{userInfo.name}'s</strong> Prompt Records</h1>
      <hr />
      {loading ? <Loader />
        : error ? <Message variant='danger'>{error}</Message>
          : <div>
            {prompts.length < 1 ? (
              <h2>No prompt records found.</h2>
            ) : (
              <ListGroup className="mt-3">
                {prompts.map(prompt => (
                  <ListGroup.Item key={prompt._id}>
                    <Row>
                      <Col xs={3}>
                      <strong>ID:</strong> {prompt._id}
                      </Col>
                      <Col >
                        <strong>Prompt:</strong> {prompt.prompt}
                      </Col>
                      <Col xs={4}>
                        <strong>Response:</strong> {prompt.response}
                      </Col>
                      <Col xs={2}>
                        <strong>Timestamp:</strong> {prompt.createdAt}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </div>}
    </Container>
  );
};

export default PromptRecordsPage;
