import React from 'react';
import ButtonConfirm from './Button';
import './Saloon.css';
import products from './Menu.json'
import logoBurgerQueen from '../assets/logo-burger-queen.png';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Form, Row, Col, Container, ListGroup, Tabs, Tab, Button } from 'react-bootstrap';

const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

// const products = [
//   {
//     name: "Café Americano",
//     price: 5.00,
//     type: "breakfast"
//   },
//   {
//     name: "Café com leite",
//     price: 7.00,
//     type: "breakfast"
//   },
//   {
//     name: "Sanduíche de presunto e queijo",
//     price: 10.00,
//     type: "breakfast"
//   },
//   {
//     name: "Suco de fruta natural",
//     price: 7.00,
//     type: "breakfast"
//   },
//   {
//     name: "Hambúrguer simples",
//     price: 10.00,
//     type: "lunch"
//   },
//   {
//     name: "Hambúrguer duplo",
//     price: 15.00,
//     type: "lunch"
//   },
//   {
//     name: "Carne Bovina",
//     price: 0,
//     type: "lunch"
//   },
//   {
//     name: "Frango",
//     price: 0,
//     type: "lunch"
//   },
//   {
//     name: "Vegetariano",
//     price: 0,
//     type: "lunch"
//   },
//   {
//     name: "Ovo",
//     price: 1.00,
//     type: "lunch"
//   },
//   {
//     name: "Queijo",
//     price: 1.00,
//     type: "lunch"
//   },
//   {
//     name: "Batata frita",
//     price: 5.00,
//     type: "lunch"
//   },
//   {
//     name: "Anéis de cebola",
//     price: 5.00,
//     type: "lunch"
//   },
//   {
//     name: "Água 500ml",
//     price: 5.00,
//     type: "lunch"
//   },
//   {
//     name: "Água 750ml",
//     price: 7.00,
//     type: "lunch"
//   },
//   {
//     name: "Bebida gaseificada 500ml",
//     price: 7.00,
//     type: "lunch"
//   },
//   {
//     name: "Bebida gaseificada 750ml",
//     price: 10.00,
//     type: "lunch"
//   }
// ];

class Saloon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buy: [],
      name: "",
      client: ""
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    database.collection('users')
      .doc(id)
      .get()
      .then(response => {
        const { name } = response.data();
        this.setState({
          name,
        })
      })
  }

  productAdd = (item) => {
    const itemIndex = this.state.buy.findIndex((product) => {
      return product.name === item.name;
    });

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      };
      this.setState({
        buy: this.state.buy.concat(newItem)
      });
    } else {
      let newBuy = this.state.buy;
      newBuy[itemIndex].quantity += 1;
      this.setState({
        buy: newBuy
      });
    }
  }

  productDelete = (item) => {
    const itemIndex = this.state.buy.findIndex((product) => {
      return product.name === item.name;
    });

    let newBuy = this.state.buy;
    newBuy[itemIndex].quantity -= 1;
    const quantity = newBuy[itemIndex].quantity;

    if (quantity > 0) {
      this.setState({
        buy: newBuy
      });
    } else {
      newBuy.splice(itemIndex, 1);
      this.setState({
        buy: newBuy
      });
    }
  }

  confirmBuy = () => {
    const object = {
      items: this.state.buy,
      client: this.state.client
    }
    database.collection('request').add(object)
    // this.setState({
    //   listBuy: this.state.buy.concat(object)

    // })
    //   .then(response => {
    //     const userId = response.user.uid;
    //     this.props.history.push(`/${this.state.occupationArea}/${userId}`);
    //   })
  }

  saveClient = (event, element) => {
    const newState = this.state;
    console.log(newState)
    newState[element] = event.target.value
    this.setState(newState);
  }

  render(props) {
    const total = this.state.buy.reduce((acc, curr) => {
      return acc + (curr.quantity * curr.price)
    }, 0);

    return (
      <div className="div-header">
        <Container>
          <Col xs={6} md={6} lg={12} >
            <div className="div-header-saloon">
              <div className="div-logo-saloon">
                <img src={logoBurgerQueen} className="logo-saloon" alt="logo do Burger Queen, coroa acima do nome" />
              </div>
              <div className="client-name-input">
                <Form>
                  <Row>
                    <Col sm={8}>
                      <Form.Group as={Col} className="form-client-name" controlId="formHorizontalName">
                        <Form.Control type="text" placeholder="Nome do Cliente" value={this.state.client}
                          onChange={(event) => this.saveClient(event, "client")} />
                      </Form.Group>
                    </Col>
                    <Col sm={4} className="">
                      <Button variant="success" className="btn-client-name" onClick={this.saveClient}>Salvar</Button>
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className="div-user-name">
                <FontAwesomeIcon icon={faUserCircle} className="user-name" />
                <p className="name-user">{this.state.name}</p>
              </div>
            </div>
            <div className="div-itens" >
              <div className="tabs-saloon">
                <Tabs defaultActiveKey="breakfast" transition={false} id="noanim-tab-example" className="tabs">
                  <Tab eventKey="breakfast" title="Café da Manhã" className="nav-link tab-content-saloon">
                    <div list-saloon>
                      <ListGroup>
                        <Row>
                          <Col sm={8}>
                            <ListGroup.Item disabled>Item</ListGroup.Item>
                          </Col>
                          <Col sm={4}>
                            <ListGroup.Item disabled>Preço R$ </ListGroup.Item>
                          </Col>
                        </Row>
                        <div className="return-item">
                          {
                            products.map((product, index) => {
                              if (product.type === "breakfast") {
                                return <ListGroup>
                                  <Row>
                                    <Col sm={8}>
                                      <ListGroup.Item
                                        key={index}>
                                        <FontAwesomeIcon
                                          icon={faPlusCircle}
                                          onClick={() => this.productAdd(product)}
                                        /> {product.name}</ListGroup.Item>
                                    </Col>
                                    <Col sm={4}>
                                      <ListGroup.Item> {product.price}</ListGroup.Item>
                                    </Col>
                                  </Row>
                                </ListGroup>
                              }
                            })
                          }
                        </div>
                      </ListGroup>
                    </div>
                  </Tab>
                  <Tab eventKey="lunches" title="Lanches e Bebidas" className="nav-link tab-content-saloon">
                    <ListGroup>
                      <Row>
                        <Col sm={8}>
                          <ListGroup.Item disabled>Item</ListGroup.Item>
                        </Col>
                        <Col sm={4}>
                          <ListGroup.Item disabled>Preço R$</ListGroup.Item>
                        </Col>
                      </Row>
                      <div className="return-item">
                        {
                          products.map((product, index) => {
                            if (product.type === "lunch" && product.burger !== true) {
                              return <ListGroup>
                                <Row>
                                  <Col sm={8}>
                                    <ListGroup.Item key={index} >
                                      <FontAwesomeIcon
                                        icon={faPlusCircle}
                                        onClick={() => this.productAdd(product)}
                                      /> {product.name}
                                    </ListGroup.Item>
                                  </Col>
                                  <Col sm={4}>
                                    <ListGroup.Item>{product.price}</ListGroup.Item>
                                  </Col>
                                </Row>
                              </ListGroup>
                            } else if (product.type === "lunch" && product.burger === true) {
                              return <ListGroup>
                                <Row>
                                  <Col sm={8}>
                                    <ListGroup.Item> {product.name}
                                    </ListGroup.Item>
                                    <ListGroup.Item ><FontAwesomeIcon
                                      icon={faPlusCircle}
                                      onClick={() => this.productAdd(product)}
                                    />{product.flavors}</ListGroup.Item>
                                    <ListGroup.Item ><FontAwesomeIcon
                                      icon={faPlusCircle}
                                      onClick={() => this.productAdd(product)}
                                    />{product.extras}</ListGroup.Item>
                                  </Col>
                                  <Col sm={4}>
                                    <ListGroup.Item>{product.price}</ListGroup.Item>
                                  </Col>
                                </Row>
                              </ListGroup>
                            }
                          })
                        }
                      </div>
                    </ListGroup>
                  </Tab>
                </Tabs>
              </div>
              <div className="list-itens">
                <ListGroup>
                  <ListGroup.Item className="header-item-checked" disabled>Pedido(s)</ListGroup.Item>
                </ListGroup>
                {
                  this.state.buy.map((product, index) => {
                    return <ListGroup>
                      <ListGroup.Item key={index} ><FontAwesomeIcon
                        icon={faMinusCircle}
                        onClick={() => this.productDelete(product)}
                      />{product.quantity} - {product.name} - {product.flavors} - {product.extras} - {product.price * product.quantity}</ListGroup.Item>
                    </ListGroup>
                  })
                }
                <ListGroup>
                  <ListGroup.Item className="item-checked" disabled>Total a Pagar</ListGroup.Item>
                  <ListGroup.Item className="item-checked">R$ {total}</ListGroup.Item>
                </ListGroup>
                <ListGroup>
                  <ListGroup.Item className="item-checked" disabled>Nome do(a) Cliente: {this.state.client}</ListGroup.Item>
                </ListGroup>
                <Col xs={6} md={6} lg={12} className="justify-content-md-center btn-col">
                  <ButtonConfirm text="Confirmar Pedido(s)" onClick={this.confirmBuy} />
                </Col>
              </div>
            </div>
          </Col>
        </Container>
      </div >
    );
  }
}

export default withFirebaseAuth({
  firebaseAppAuth,
})(Saloon);
