import React from 'react';
import ButtonConfirm from './Button';
import './Kitchen.css';
import logoBurgerQueen from '../assets/logo-burger-queen.png';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, ListGroup, Card, Row } from 'react-bootstrap';

const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

class Kitchen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      client: "",
      created: "",
      request: [],
      seconds: 0,
    };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    database.collection("users")
      .doc(id)
      .get()
      .then(response => {
        const { name } = response.data();
        this.setState({
          name,
        })
      })

    database.collection("request")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({
          request: data,
          seconds: 0,
        });
      })
      .then(() => {
        this.interval = setInterval(() => this.tick(), 1000);
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  timePreparing = (created) => {
    const time = Date(created).split(' ')[4];
    return time
  }

  timeDoneKitchen = () => {
    const time = Date().split(' ')[4];
    return time
  }

  signOut = () => {
    firebaseAppAuth.signOut()
      .then(() => {
        this.props.history.push(`/`)
      }).catch((error) => {
        alert(this.props.error)
      });
  }

  render(props) {
    const requestList = this.state.request;

    return (
      <Container fluid>
        <div className="div-header-kitchen">
          <div className="div-logo-kitchen">
            <img src={logoBurgerQueen} className="logo-kitchen" alt="logo do Burger Queen, coroa acima do nome" />
          </div>
          <div className="kitchen">
            <p className="welcome-kitchen">Boas Vindas à Cozinha</p>
          </div>
          <div className="div-user-name">
            <FontAwesomeIcon icon={faUserCircle} className="user-name-icon" />
            <p className="name-user">{this.state.name}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faSignOutAlt} onClick={() => this.signOut()} className="logout-icon" />
            <p className="out">Sair</p>
          </div>
        </div>
        <div className="list-items-kitchen">
          {
            requestList.map((cardItems, index) => {
              return <Card className="card-border" border="danger" key={index} style={{ width: '30rem' }} >
                <Card.Header className="text-align-center">{cardItems.client}</Card.Header>
                <Card.Body>
                  {
                    cardItems.items.map((item, index) => {
                      return <ListGroup key={index} variant="flush">
                        <ListGroup.Item> {item.quantity} - {item.name}</ListGroup.Item>
                      </ListGroup>
                    })
                  }
                </Card.Body>
                <Row>
                  <Col sm={6} className="justify-content-md-center btn-confirm-kitchen">
                    <ButtonConfirm className="justify-content-md-center" text="Feito" onClick={this.confirmDone} />
                  </Col>
                  <Col sm={6}>
                    <p>{this.state.seconds} - {cardItems.createdTime}</p>
                  </Col>
                </Row>
              </Card>
            })
          }
        </div>
      </Container >
    );
  }
}

export default withFirebaseAuth({
  firebaseAppAuth,
})(Kitchen);