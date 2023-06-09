import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import sunacrip from "../assets/img/SUNACRIP.png";
import bitsdapp from "../assets/img/BITS.png";
import projImg1 from "../assets/img/reto2.png";
import projImg2 from "../assets/img/avilacoin2.png";
import projImg3 from "../assets/img/Building.png";
import projImg4 from "../assets/img/CCC.png";
import projImg5 from "../assets/img/YYY.png";
import projImg6 from "../assets/img/OOO.png";
import projImg7 from "../assets/img/11.png";
import projImg8 from "../assets/img/12.png";
import projImg9 from "../assets/img/13.png";
import projImg10 from "../assets/img/14.png";
import projImg11 from "../assets/img/15.png";




import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects2 = [
    {
      title: "SUNACRIP",
      description: "Analista de Zonas Economicas Especiales PETRO y Criptoactivos",
      imgUrl: sunacrip,
    },
    {
      title: "BitsDapps",
      description: "Blockchain Developer",
      imgUrl: bitsdapp,
    },
    {
      title: "ThernLoven",
      description: "Blockchain Developer",
      imgUrl: projImg11,
    },
    {
      title: "Bankor - Splendor Network",
      description: "Blockchain Developer and IT Consultant",
      imgUrl: projImg10,
    },

  ];

  const projects = [
    {
      title: "NFT Love",
      description: "ERC-721 & Mint Dapp",
      imgUrl: projImg1,
    },
    {
      title: "AvilaCoin $AVLC2",
      description: "ERC-20 and Social Test",
      imgUrl: projImg2,
    },
    {
      title: "Real State Tokenization",
      description: " I made this project as part of my work in BitsDapps, i built a Smart Contratcs to tokenizate Real States Assets.",
      imgUrl: projImg7,
    },
    {
      title: "NFT Marketplace",
      description: " I made this project as part of my work in ThernLoven, i built a marketplace which has some functions such as: Trades, Auction, Royalties, Fees and Stablecoin Payments",
      imgUrl: projImg8,
    },
    {
      title: "Sign Documents in Blockchain",
      description: " I made this project as part of my work in BitsDapps, i built a Smart Contract to sign documents into the Blockchain",
      imgUrl: projImg9,
    },
    {
      title: "BUILDING...",
      description: "Coming Soon",
      imgUrl: projImg3,
    },
  
  ];
  const projects3 = [
    {
      title: "BNB Martian",
      description: "I made an event / workshop with UNETI - university to give to the community (+50 students and devs) kwoledge about BNB CHAIN ECOSISTEM. Also i drove technical worshop of Smart Contracts / Solidity",
      imgUrl: projImg6,
    },
    {
      title: "Workshop Solidity and Blockchain",
      description: "Deploy Smart Contracts with Students and Community",
      imgUrl: projImg4,
    },
    {
      title: "Tokenization Assets - Conference",
      description: "I made a conference of Tokenization with Blockchain at EXPLOSION CREATIVA - Most importrant event in Venezuelan of Enterprises and Companies every year. As a CTO in Bitdata Labs ",
      imgUrl: projImg5,
    },
    {
      title: "BUILDING...",
      description: "Coming Soon",
      imgUrl: projImg3,
    },
  
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {
              <div className= "animate__animated animate__fadeIn">
                <h2>Background</h2>
                <p>
                I am actively working to build my professional career, with a broad understanding of the cryptocurrency industry. I have an impeccable work ethic, and I thrive in a collaborative team environment. I am dedicated to continuously learning and expanding my knowledge in the field, and I am committed to delivering high-quality work on every project.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Events and Conference</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className= "animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
