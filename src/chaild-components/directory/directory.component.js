import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import Fan from "../../Ass1/images/fan.jpeg";
import { Col, Row, Container } from "react-bootstrap";
// import  'bootstrap/dist/css/bootstrap.min.css';
import Laptops from "../../Ass1/images/laptops.jpg";
import Mobiles from "../../Ass1/images/mobile.jpg";
import Books from "../../Ass1/images/books.jpg";
import Bottles from "../../Ass1/images/bottles.jpg";
import Beds from "../../Ass1/images/beds.jpg";
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          name: "fans",
          id: 1,
          cost: "$20",
          image: <img src={Fan} width="300" height="300" />
        },
        {
          name: "laptops",
          id: 2,
          cost: "$150",
          image: <img src={Laptops} width="300" height="300" />
        },

        {
          name: "mobiles",
          id: 3,
          cost: "$100",
          image: <img src={Mobiles} width="300" height="300" />
        },
        {
          name: "books",
          id: 4,
          cost: "$10",
          image: <img src={Books} width="300" height="300" />
        },
        {
          name: "bottles",
          id: 5,
          cost: "$5",
          image: <img src={Bottles} width="300" height="300" />
        },
        {
          name: "Beds",
          id: 6,
          cost: "$50",
          image: <img src={Beds} width="300" height="300" />
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-component">
        <div className="All">
          <h1>Directory</h1>
          {
            <Container>
              <Row className="col">
                <Col>
                  <div className="AllImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[0].name}
                      {this.state.categories[0].cost}
                    </div>
                    <div style={{ width: "100%" }}>
                      {" "}
                      {this.state.categories[0].image}
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="AllImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[1].name}
                      {this.state.categories[1].cost}
                    </div>
                    <div> {this.state.categories[1].image}</div>
                  </div>
                </Col>
                <Col>
                  <div className="AllImages">
                    <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                      {" "}
                      {this.state.categories[2].name}
                      {this.state.categories[2].cost}
                    </div>
                    <div> {this.state.categories[2].image}</div>
                  </div>
                </Col>
                <Row>
                  <Col>
                    <div className="AllImages">
                      <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                        {" "}
                        {this.state.categories[3].name}
                        {this.state.categories[3].cost}
                      </div>
                      <div> {this.state.categories[3].image}</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="AllImages">
                      <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                        {" "}
                        {this.state.categories[4].name}
                        {this.state.categories[4].cost}
                      </div>
                      <div> {this.state.categories[4].image}</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="AllImages">
                      <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                        {" "}
                        {this.state.categories[5].name}
                        {this.state.categories[5].cost}
                      </div>
                      <div> {this.state.categories[5].image}</div>
                    </div>
                  </Col>
                </Row>
              </Row>
            </Container>
          }
        </div>
      </div>
    );
  }
}
export default Directory;
